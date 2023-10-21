'use client'

import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const [nama, setNama] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [roles, setRoles] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('akun')
        .select(`nama, email, roles`)
        .eq('id', user?.id ?? "")
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setNama(data.nama)
        setEmail(data.email)
        setRoles(data.roles)
       
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])





  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>
      <div>
        <label htmlFor="Nama">Full Name</label>
        <input
          id="Nama"
          type="text"
          value={nama || ''}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="roles">roles</label>
        <input
          id="roles"
          type="url"
          value={roles || ''}
          onChange={(e) => setRoles(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}