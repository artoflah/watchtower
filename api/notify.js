// api/notify.js — WatchTower notifications
// SMS via Twilio, Email via Courier
// Vercel env vars: TWILIO_SID, TWILIO_AUTH, TWILIO_PHONE, COURIER_KEY

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type, phone, email, zip, utility, status, name } = req.body;
  if (!email && !phone) return res.status(400).json({ error: 'phone or email required' });

  const TWILIO_SID   = process.env.TWILIO_SID;
  const TWILIO_AUTH  = process.env.TWILIO_AUTH;
  const TWILIO_PHONE = process.env.TWILIO_PHONE;
  const COURIER_KEY  = process.env.COURIER_KEY;

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

  // ── Email via Courier ──
  if (email && COURIER_KEY) {
    try {
      const { title, body } = buildMessage({ type, zip, utility, status, name });
      const courierRes = await fetch('https://api.courier.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${COURIER_KEY}`
        },
        body: JSON.stringify({
          message: {
            to: { email },
            content: { title, body },
            data: { zip, utility, status, type, name }
          }
        })
      });
      const courierData = await courierRes.json();
      results.email = courierData.requestId ? 'sent: ' + courierData.requestId : (courierData.message || 'failed');
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

function buildMessage({ type, zip, utility, status, name }) {
  const u = utility || 'Utility';
  const z = zip || 'your area';
  const g = name ? `Hi ${name},` : 'Hi,';
  const titles = {
    welcome:        `WATCHTOWER — You're connected to the NYC grid`,
    subscribe:      `WATCHTOWER — You're signed up for alerts`,
    outage:         `⚡ ${u} OUT — ${z}`,
    restored:       `✓ ${u} RESTORED — ${z}`,
    report_confirm: `WATCHTOWER — Report received (${z})`
  };
  const bodies = {
    welcome:        `${g}\n\nYou're now monitoring zip ${z} for ${u} outages. We'll alert you the moment something changes.\n\nVisit the live map: watchtower-murex.vercel.app`,
    subscribe:      `${g}\n\nYou've subscribed to WATCHTOWER email alerts for NYC utility outages. You'll receive notifications when outages are confirmed or restored in your area.\n\nVisit the live map: watchtower-murex.vercel.app`,
    outage:         `${g}\n\nA ${u} outage has been confirmed in zip ${z}, reported by multiple neighbors. Con Ed / DEP has been notified.\n\nWe'll notify you the moment service is restored.\n\nLive map: watchtower-murex.vercel.app`,
    restored:       `${g}\n\n${u} service has been restored in zip ${z}, confirmed by neighbors.${u === 'Water' ? '\n\nNote: Run your cold tap for at least 2 minutes before drinking.' : ''}\n\nStay safe. WatchTower is still monitoring your area.`,
    report_confirm: `${g}\n\nYour report has been logged — ${u} is ${status || 'being tracked'} at zip ${z}. Thank you for helping your neighbors.\n\nLive map: watchtower-murex.vercel.app`
  };
  return {
    title: titles[type] || `WATCHTOWER — Update for ${z}`,
    body:  bodies[type] || `${g}\n\nUpdate for zip ${z}: ${u} is ${status || 'being monitored'}.\n\nwatchtower-murex.vercel.app`
  };
}
