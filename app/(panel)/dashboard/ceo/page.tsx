import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupaRoot } from "@/utils/server/roots";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Menu from "./menu";

export default async function ceopage() {
  const getakun = useSupaRoot;

  const supabase = createServerComponentClient<Database>({ cookies });
  // get all user / service role must be in server client
  const { data: akundata } = await getakun.from("akun").select("*");
  //get single
  const { data: akun } = await supabase.from("akun").select("*").single();
  // get metadata user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const lastsignin = user?.last_sign_in_at;
  if (akun && akun.roles === "ceo") {
    return (
      <Menu userdata={akun} lastsignin={lastsignin} selectuser={akundata} />
    );
  } else {
    redirect("/dashboard");
  }
}
