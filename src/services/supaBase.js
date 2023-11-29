import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://guijftdzyonstvgqncwa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aWpmdGR6eW9uc3R2Z3FuY3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNTU1NTcsImV4cCI6MjAxNjczMTU1N30.YEQrhkG9KomgeZmaYr-c7Eb6bqJ314Z5aqM2TCGERwE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
