
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '@/types/database.types'


export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient<Database>({ cookies })

  

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Password salah / Akun tidak terdaftar`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    )
  }

  const { data: user } = await supabase
  .from('user_details')
  .select('roles, status')
  
  if (user && user[0].roles === "ceo" && (user[0].status === "active" || user[0].status === "training")) {
    // Render CEO specific dashboard
    return NextResponse.redirect(`${requestUrl.origin}/ceo`, {
      status: 301,
    })
  } else if (user && user[0].roles === "humanres" && (user[0].status === "active" || user[0].status === "training")) {
    return NextResponse.redirect(`${requestUrl.origin}/human_resource`, {
      status: 301,
    })
  }
}
