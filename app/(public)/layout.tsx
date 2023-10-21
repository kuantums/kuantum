import PublicNavbar from "./components/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
    </>
  );
}
