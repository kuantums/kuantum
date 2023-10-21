import "@/style/globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Kuantum",
  description: "Bakul Pasar Is Powerfull",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children}
          <Toaster dir="ltr" />
        </Providers>
      </body>
    </html>
  );
}
