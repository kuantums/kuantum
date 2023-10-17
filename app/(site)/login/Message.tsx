'use client'

import { useSearchParams } from 'next/navigation'


export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
 
  return (
    <>
    {error && <p className="text-red-600 font-light text-sm">{error}</p>}
    </>
  );
}
