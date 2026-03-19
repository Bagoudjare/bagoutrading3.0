
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.exemple.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.exemple.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
