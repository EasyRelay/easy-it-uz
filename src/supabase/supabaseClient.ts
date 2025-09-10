// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gyzzxkrojrrlzdianfgt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5enp4a3JvanJybHpkaWFuZmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNDE4NjMsImV4cCI6MjA2NzYxNzg2M30.hYIGBQbpRm9fj9sitdvGagtCpGZKaWbt67BY_XrTiRc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
