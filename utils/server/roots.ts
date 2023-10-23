import { createClient } from "@supabase/supabase-js";

export const useSupaRoot = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || "",
  {
    db: {
      schema: "public",
    },
  }
);

export default { useSupaRoot };
