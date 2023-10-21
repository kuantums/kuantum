import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import DashboardNavbar from './Navbar';
import { redirect } from 'next/navigation';

export default async function Nav() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect('/');
  }

  const { data: akun } = await supabase
    .from('akun')
    .select('nama,email,foto_profil,roles')
    .single();

  const nama = akun?.nama;
  const email = akun?.email;

  return (
    <>
      <DashboardNavbar nama={nama} email={email} />
    </>
  );
}
