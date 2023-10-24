import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserMenu from "./user/menu";


export default async function dashboard() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({  cookies: () => cookieStore, });
  const { data: akun } = await supabase.from("akun").select("*").single();
  if (akun?.roles == "ceo") {
    redirect(`/dashboard/${akun.roles}`);
  } else if (akun?.roles == "humanresource") {
    redirect(`/dashboard/${akun.roles}`);
  } else if (akun?.roles == "contentcreator") {
    redirect(`/dashboard/${akun.roles}`);
  } else if (akun?.roles == "digitalmarketing") {
    redirect(`/dashboard/${akun.roles}`);
  } else {
    return (
    <section className="p-4 w-full h-full">
    <UserMenu />
    </section>
    );
    
  }
}
