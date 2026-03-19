import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { error } = await supabase
    .from('demo_downloads')
    .update({ count: 1 })
    .eq('id', 1)

  if (error) {
    return res.status(500).json({ error })
  }

  res.status(200).json({ success: true })
}