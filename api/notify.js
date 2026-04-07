// api/notify.js — WatchTower notifications
// SMS via Twilio, Email via Resend
// Vercel env vars: TWILIO_SID, TWILIO_AUTH, TWILIO_PHONE, RESEND_API_KEY, FROM_EMAIL

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type, phone, email, zip, utility, status, name } = req.body;
  if (!email && !phone) return res.status(400).json({ error: 'phone or email required' });

  const TWILIO_SID   = process.env.TWILIO_SID;
  const TWILIO_AUTH  = process.env.TWILIO_AUTH;
  const TWILIO_PHONE = process.env.TWILIO_PHONE;
  const RESEND_KEY   = process.env.RESEND_API_KEY;
  const FROM_EMAIL   = process.env.FROM_EMAIL || 'WATCHTOWER <alerts@watchtower-nyc.app>';

  const results = { sms: null, email: null };

  // ── SMS via Twilio ──
  if (phone && TWILIO_SID && TWILIO_AUTH && TWILIO_PHONE) {
    try {
      const smsText = buildSMS({ type, zip, utility, status });
      const twilioRes = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + Buffer.from(`${TWILIO_SID}:${TWILIO_AUTH}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            To:   phone,
            From: TWILIO_PHONE,
            Body: smsText
          }).toString()
        }
      );
      const twilioData = await twilioRes.json();
      results.sms = twilioData.sid ? 'sent: ' + twilioData.sid : (twilioData.message || 'failed');
    } catch (err) {
      results.sms = 'error: ' + err.message;
    }
  }

  // ── Email via Resend ──
  if (email && RESEND_KEY) {
    try {
      const { subject, html } = buildEmail({ type, zip, utility, status, name });
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_KEY}`
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email,
          subject,
          html
        })
      });
      const resendData = await resendRes.json();
      results.email = resendData.id ? 'sent: ' + resendData.id : (resendData.message || JSON.stringify(resendData));
    } catch (err) {
      results.email = 'error: ' + err.message;
    }
  }

  return res.status(200).json({ ok: true, results });
}

function buildSMS({ type, zip, utility, status }) {
  const u = utility || 'Utility';
  const z = zip || 'your area';
  if (type === 'welcome')
    return `WATCHTOWER: You're connected to the NYC grid for zip ${z}. We'll text you when ${u} changes. Reply STOP to opt out. Map: watchtower-murex.vercel.app`;
  if (type === 'outage')
    return `WATCHTOWER: ⚡ ${u} OUT confirmed — zip ${z}. Reported by neighbors. We'll text you when restored. Map: watchtower-murex.vercel.app`;
  if (type === 'restored')
    return `WATCHTOWER: ✓ ${u} RESTORED — zip ${z}. Confirmed by neighbors.${u === 'Water' ? ' Run tap 2min before drinking.' : ''} Stay safe.`;
  if (type === 'report_confirm')
    return `WATCHTOWER: Report received — ${u} ${status || 'status'} at zip ${z}. Thank you. Map: watchtower-murex.vercel.app`;
  return `WATCHTOWER: Update for zip ${z} — ${u} is ${status || 'being monitored'}. Map: watchtower-murex.vercel.app`;
}

function buildEmail({ type, zip, utility, status, name }) {
  const u = utility || 'power and water';
  const z = zip || 'your area';
  const greeting = name ? `Hi ${name},` : 'Hi,';

  const templates = {
    welcome: {
      subject: `WATCHTOWER — You're connected to the NYC grid`,
      body: `${greeting}<br><br>
You're now monitoring <strong>zip ${z}</strong> for ${u} outages. We'll alert you the moment something changes in your neighborhood.<br><br>
<a href="https://watchtower-murex.vercel.app" style="color:#2563eb">→ Open the live map</a><br><br>
Stay safe,<br>
<strong>WATCHTOWER</strong> — NYC Community Utility Network`
    },
    subscribe: {
      subject: `WATCHTOWER — You're signed up for alerts`,
      body: `${greeting}<br><br>
You've subscribed to <strong>WATCHTOWER</strong> email alerts for NYC utility outages. You'll receive notifications when outages are confirmed or restored in your area.<br><br>
<a href="https://watchtower-murex.vercel.app" style="color:#2563eb">→ Open the live map</a><br><br>
Stay safe,<br>
<strong>WATCHTOWER</strong> — NYC Community Utility Network`
    },
    outage: {
      subject: `⚡ ${u.toUpperCase()} OUT — ${z}`,
      body: `${greeting}<br><br>
A <strong>${u} outage</strong> has been confirmed in zip <strong>${z}</strong>, reported by multiple neighbors. Con Ed / DEP has been notified.<br><br>
We'll notify you the moment service is restored.<br><br>
<a href="https://watchtower-murex.vercel.app" style="color:#2563eb">→ Live map</a><br><br>
<strong>WATCHTOWER</strong>`
    },
    restored: {
      subject: `✓ ${u.toUpperCase()} RESTORED — ${z}`,
      body: `${greeting}<br><br>
<strong>${u} service has been restored</strong> in zip ${z}, confirmed by neighbors.${u.toLowerCase().includes('water') ? '<br><br><em>Note: Run your cold tap for at least 2 minutes before drinking.</em>' : ''}<br><br>
Stay safe. WatchTower is still monitoring your area.<br><br>
<a href="https://watchtower-murex.vercel.app" style="color:#2563eb">→ Live map</a><br><br>
<strong>WATCHTOWER</strong>`
    },
    report_confirm: {
      subject: `WATCHTOWER — Report received (${z})`,
      body: `${greeting}<br><br>
Your report has been logged — <strong>${u} is ${status || 'being tracked'}</strong> at zip ${z}. Thank you for helping your neighbors.<br><br>
<a href="https://watchtower-murex.vercel.app" style="color:#2563eb">→ Live map</a><br><br>
<strong>WATCHTOWER</strong>`
    }
  };

  const t = templates[type] || {
    subject: `WATCHTOWER — Update for ${z}`,
    body: `${greeting}<br><br>Update for zip ${z}: ${u} is ${status || 'being monitored'}.<br><br><a href="https://watchtower-murex.vercel.app">watchtower-murex.vercel.app</a>`
  };

  return {
    subject: t.subject,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:#060606;color:#f2efe6;font-family:'Courier New',monospace;padding:40px 32px;max-width:560px;margin:0 auto;line-height:1.6">
  <div style="border-bottom:1px solid rgba(242,239,230,0.2);padding-bottom:20px;margin-bottom:28px">
    <span style="font-size:22px;font-weight:700;letter-spacing:0.25em">WATCHTOWER</span>
    <span style="font-size:11px;color:rgba(242,239,230,0.5);display:block;letter-spacing:0.2em;margin-top:2px">NYC UTILITY GRID</span>
  </div>
  <div style="font-size:15px">${t.body}</div>
  <div style="border-top:1px solid rgba(242,239,230,0.12);margin-top:36px;padding-top:16px;font-size:11px;color:rgba(242,239,230,0.4);letter-spacing:0.15em">
    WATCHTOWER™ — NYC Community Utility Network<br>
    Community-powered. Verification-verified. Always on.
  </div>
</body>
</html>`
  };
}
