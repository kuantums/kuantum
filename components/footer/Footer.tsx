import Link from "next/link"

export default function Footer() {
  return (
    <footer>
        <div className="flex justify-center text-center text-xs">
          <p>
            Powered by{' '}
            <Link
              href="https://supabase.com/"
              target="_blank"
              className="font-bold"
            >
              Supabase
            </Link>
          </p>
        </div>
    </footer>

  )
}
