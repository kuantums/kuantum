"use client"
import React from "react";
import {Card, CardHeader,CardFooter, Image, Button} from "@nextui-org/react";

export default function UserCard() {
  return (
    <>
<Card className="col-span-12 sm:col-span-4 h-[300px]">
<CardHeader className="absolute z-10 top-1 flex-col !items-start">
  <p className="text-tiny text-white/60 uppercase font-bold">Platform Chat Bot</p>
  <h4 className="text-white font-medium text-large">Kuantum Vector AI</h4>
</CardHeader>
<Image
  removeWrapper
  alt="Card background"
  className="z-0 w-full h-full object-cover"
  src="/"
/>
</Card>

<Card className="col-span-12 sm:col-span-4 h-[300px]">
<CardHeader className="absolute z-10 top-1 flex-col !items-start">
  <p className="text-tiny text-white/60 uppercase font-bold">Melayani Pembuatan</p>
  <h4 className="text-white font-medium text-large">Website & Platform Berbasis Web aplikasi lainya.</h4>
</CardHeader>
<Image
  removeWrapper
  alt="Card background"
  className="z-0 w-full h-full object-cover"
  src="/"
/>
</Card>
<Card className="col-span-12 sm:col-span-4 h-[300px]">
<CardHeader className="absolute z-10 top-1 flex-col !items-start">
  <p className="text-tiny text-white/60 uppercase font-bold">Content Marketing</p>
  <h4 className="text-white font-medium text-large">Video, Motion, & Graphic Design.</h4>
</CardHeader>
<Image
  removeWrapper
  alt="Card background"
  className="z-0 w-full h-full object-cover"
  src="/"
/>
</Card>
<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
<CardHeader className="absolute z-10 top-1 flex-col items-start">
  <p className="text-tiny text-white/60 uppercase font-bold">New</p>
  <h4 className="text-black font-medium text-2xl">Acme camera</h4>
</CardHeader>
<Image
  removeWrapper
  alt="Card example background"
  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
  src="/"
/>
<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
  <div>
    <p className="text-black text-tiny">Available soon.</p>
    <p className="text-black text-tiny">Get notified.</p>
  </div>
  <Button className="text-tiny" color="primary" radius="full" size="sm">
    Notify Me
  </Button>
</CardFooter>
</Card>
<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
<CardHeader className="absolute z-10 top-1 flex-col items-start">
  <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
  <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
</CardHeader>
<Image
  removeWrapper
  alt="Relaxing app background"
  className="z-0 w-full h-full object-cover"
  src="/"
/>
<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
  <div className="flex flex-grow gap-2 items-center">
    <Image
      alt="Breathing app icon"
      className="rounded-full w-10 h-11 bg-black"
      src="/"
    />
    <div className="flex flex-col">
      <p className="text-tiny text-white/60">Breathing App</p>
      <p className="text-tiny text-white/60">Get a good night's sleep.</p>
    </div>
  </div>
  <Button radius="full" size="sm">Get App</Button>
</CardFooter>
</Card>
</>
  )
}
