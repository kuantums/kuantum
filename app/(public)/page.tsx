import { Klogo } from "@/components/icon/klogo";
import { LoginForm } from "./loginform";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <section className="max-w-[90rem] max-h-screen mx-auto relative flex flex-col items-center">
      <Image
        src={"/pattern.svg"}
        alt="kuantum"
        height={100}
        width={100}
        className="w-full max-h-screen absolute inset-0 z-10"
      />

      <div className="grid grid-cols-3 gap-8 w-full  h-screen px-3 py-16 lg:py-24 text-foreground relative z-10">
        <div className="col-span-2">
          <h1 className="max-w-2xl text-content1-foreground text-8xl font-bold tracking-tighter leading-[5rem]">
            <Balancer ratio={0.2}>
              Jadikan Pekerjaan & Bisnis Semakin Mudah.
            </Balancer>
          </h1>
          <p className="text-2xl text-left lg:text-3xl !leading-tight tracking-tighter my-4">
            Dengan Platform Berbasis Web Aplikasi Kami.
          </p>
          <LoginForm />
        </div>
        <div className="col-span-1 relative">
          <Klogo className="w-[25rem] h-[25rem] fill-slate-300 hidden md:block" />
        </div>
        <Image
          src={"/balon.png"}
          alt="kuantum"
          height={100}
          width={100}
          className="hidden md:block w-[40rem] absolute -right-[15rem] -top-[15rem] z-0 opacity-60 "
        />
        <div className="col-span-3 flex w-full max-h-full items-end justify-center">
          <h2 className="text-lg font-bold text-center">
            "Setiap kesalahan adalah kesempatan untuk belajar. Jangan takut
            mencoba hal-hal baru, karena itulah bagaimana kita tumbuh"
          </h2>
        </div>
      </div>
    </section>
  );
}
