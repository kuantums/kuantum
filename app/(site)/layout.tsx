import { Toaster } from 'sonner';
export const dynamic = 'force-dynamic'
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <main className="min-h-screen">
      {children}
    </main>
    <Toaster />
    </>
  );
}
