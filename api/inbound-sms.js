export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).send('WATCHTOWER inbound SMS is running');
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const body = req.body || {};
  const incomingText = (body.Body || '').trim().toUpperCase();

  let reply = `WATCHTOWER: Thanks for reaching out. Reply WATCH to connect to outage alerts.`;

  if (incomingText === 'WATCH') {
    reply = `WATCHTOWER: You're connected to WATCHTOWER. Reply with your ZIP code to start getting outage updates for your area. Reply STOP to opt out.`;
  }

  if (/^\d{5}$/.test(incomingText)) {
    reply = `WATCHTOWER: ZIP ${incomingText} received. You're now set up for local updates.`;
  }

  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(`
    <Response>
      <Message>${escapeXml(reply)}</Message>
    </Response>
  `);
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}