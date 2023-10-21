import { useSupaRoot } from "@/utils/server/roots";
import DashboardNavbar from "@/app/navbar/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });

  // const getakun = useSupaRoot;
  // const data = await getakun.from('akun').select();
  // console.log(data);

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
      <div>
        <p className="text-2xl tracking-tighter">Non Employee</p>
      </div>
    );
  }
}
