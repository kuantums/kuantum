"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { LogOutIcon } from "lucide-react";
import { CircularProgress, Tooltip } from "@nextui-org/react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <Tooltip content="Sign Out" color="warning" offset={-7}>
      <Button
        className="rounded-full"
        variant="outline"
        size="icon"
        onClick={handleSignOut}
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress color="success" aria-label="Loading..." />
        ) : (
          <LogOutIcon className="h-4 w-4" />
        )}
      </Button>
    </Tooltip>
  );
}
