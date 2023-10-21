import Nav from "@/app/navbar/nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Call the function with a cookie value

  return (
    <>
      <Nav />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
