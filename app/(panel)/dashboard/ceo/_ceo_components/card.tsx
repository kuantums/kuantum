"use Client";

import { Card, CardHeader, Image, Chip } from "@nextui-org/react";
import React from "react";

interface User {
  userdata?: any;
  lastlogin?: any;
}

export function CeoCard({ userdata, lastlogin }: User) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold py-2">
          Selamat Datang Kembali
        </p>
        <p className="text-2xl">{userdata.nama}</p>
        <p className="text-xl tracking-tight flex flex-col font-extralight">
          {" "}
          Terakhir Login Pada :
          <span className="font-semibold">{lastlogin}</span>
        </p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full rounded-3xl h-full object-cover relative"
        src="https://i.pravatar.cc"
      />
      <div className="absolute bg-gradient-to-t from-slate-900 to-transparent inset-0" />
    </Card>
  );
}
