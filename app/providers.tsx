// app/providers.tsx
"use client";
import { Provider } from "react-wrap-balancer";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider>{children}</Provider>
    </NextUIProvider>
  );
}
