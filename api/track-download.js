// api/track-download.js
import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ipHash = createHash('sha256').update(ip).digest('hex');
  const userAgent = req.headers['user-agent'] || '';

  const { full_name, email, whatsapp, file_name } = req.body || {};
  const { error } = await supabase
    .from('demo_downloads')
    .insert([
      {
        downloadet_at: new Date().toISOString(),
        user_agent: userAgent,
        ip_hash: ipHash,
        full_name: full_name || null,
        email: email || null,
        whatsapp: whatsapp || null,
        file_name: file_name || 'BMAE_Demo.ex5'
      }
    ]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to track download' });
  }

  res.status(200).json({ message: 'Download tracked' });
}