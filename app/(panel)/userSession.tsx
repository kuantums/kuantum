import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'


export default async function UserSessions() {
  const supabase = createServerComponentClient({
    cookies,
  })
  const router = useRouter()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    router.push('/')
  }
}