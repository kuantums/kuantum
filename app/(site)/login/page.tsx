import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import  AuthForm  from "./authform";
import { Klogo } from "@/components/icon/klogo";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>

      <div className="container relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Klogo className="fill-slate-100 " />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Bisnis manajemen berbasis web. Dengan fitur-fitur seperti
                server-side rendering (SSR) dan static site generation (SSG),
                Kuantum Mengunakan teknologi modern dalam membangun situs web
                yang responsif dan cepat dan aman.&rdquo;
              </p>
              <footer className="text-gray-500 text-sm font-semibold">
                Kuantum Karsa Karya
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                Silahkan Login
              </h1>
              <p className="text-sm text-muted-foreground">
                Gunakan email yang terdaftar di platform
                kami.
              </p>
            </div>
            <AuthForm />
            <p className="px-8 text-center text-[9px] text-muted-foreground">
              Dengan melakukan login , berarti Anda setuju dengan{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Ketentuan Layanan
              </Link>{" "}
              dan{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Kebijakan Privasi Kami
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
