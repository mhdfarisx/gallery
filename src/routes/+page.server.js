import { supabase } from "$lib/supabase";

export async function load() {
  const data  = await supabase.from("img").select("*");
 
  return {
    img: data ?? [],
  

  }
}