import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardNavbar from "./Navbar";
import { redirect } from "next/navigation";

const cookieStore = cookies();
const supabase = createServerComponentClient<Database>({
  cookies: () => cookieStore,
});

export default async function Nav() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userdata = user?.user_metadata;

  return (
    <>
      <DashboardNavbar userdata={userdata} />
    </>
  );
}
