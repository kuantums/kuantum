"use client"
import UserTable from "./table/usertable"
import { Spacer } from "@nextui-org/react";


type Space = 0 | "px" | 2 | 1 | 0.5 | 1.5 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

export default function TableUser() {
  return (
    <div className="p-2">
        <h2 className="text-3xl space-y-4 font-bold tracking-tight">Akun Manajemen</h2>
        <Spacer y={4} />
      <UserTable />
      </div>
  )
}
