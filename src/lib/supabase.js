import { createClient } from '@supabase/auth-helpers-sveltekit'
// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL, } from '$env/static/public'



export const supabase = createClient(
    'https://ctymofxlcnumdobuuexy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0eW1vZnhsY251bWRvYnV1ZXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4Mjg3NzgsImV4cCI6MTk5MzQwNDc3OH0.Gt35mxo3-7j1Rgxvq_EnYQTYrWdB5ELDzEkF7AR_sNk'
)

