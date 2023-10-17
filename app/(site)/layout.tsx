import { Toaster } from 'sonner';

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
