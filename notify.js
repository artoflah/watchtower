// api/notify.js — WatchTower notifications via Courier
// Env vars needed in Vercel: COURIER_KEY

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, phone, email, zip, utility, status, name } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ error: 'phone or email required' });
  }

  const COURIER_KEY = process.env.COURIER_KEY;
  if (!COURIER_KEY) {
    return res.status(500).json({ error: 'COURIER_KEY not set in environment' });
  }

  // Build message content based on type
  const messages = {
    welcome: {
      title: 'WATCHTOWER — You\'re connected to the NYC grid',
      body: `You're now monitoring zip ${zip || 'your area'} for ${utility || 'power and water'} outages. We'll alert you the moment something changes. Visit watchtower-murex.vercel.app for the live map.`
    },
    outage: {
      title: `⚡ ${utility || 'Utility'} OUT — ${zip}`,
      body: `Outage confirmed in zip ${zip}. Reported by multiple neighbors. Con Ed / DEP notified. We'll update you when restored. Visit watchtower-murex.vercel.app for live status.`
    },
    restored: {
      title: `✓ ${utility || 'Utility'} RESTORED — ${zip}`,
      body: `Service restored in zip ${zip}, confirmed by neighbors.${utility === 'Water' ? ' Run cold tap 2 min before drinking.' : ''} Stay safe — WatchTower is still monitoring your area.`
    },
    report_confirm: {
      title: `WATCHTOWER — Report received (${zip})`,
      body: `Your report has been logged — ${utility || 'utility'} is ${status || 'being tracked'} at zip ${zip}. Thank you for helping your neighbors. View live map: watchtower-murex.vercel.app`
    }
  };

  const msg = messages[type] || {
    title: 'WATCHTOWER — Update for your area',
    body: `Update for zip ${zip}: ${utility || 'utility'} is ${status || 'being monitored'}. Visit watchtower-murex.vercel.app`
  };

  // Build Courier payload
  const payload = {
    message: {
      to: {},
      content: {
        title: msg.title,
        body: msg.body
      },
      data: { zip, utility, status, type, name }
    }
  };

  // Add email recipient
  if (email) {
    payload.message.to.email = email;
  }

  // Add SMS recipient
  if (phone) {
    payload.message.to.phone_number = phone;
  }

  try {
    const response = await fetch('https://api.courier.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COURIER_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ ok: true, requestId: data.requestId });
    } else {
      return res.status(response.status).json({ ok: false, error: data.message || 'Courier error' });
    }

  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
