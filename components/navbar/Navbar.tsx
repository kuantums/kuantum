"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/database.types";
import NextLink from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  SearchIcon,
  Mail,
  MessageSquare,
  Settings,
  User,
  UserPlus,
  Users,
  AlignLeft,
} from "lucide-react";

import { Klogo, Ktypo } from "@/components/icon/klogo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import LogoutButton from "@/components/button/LogoutButton";

type Profile = Database["public"]["Tables"]["user_details"]["Row"];

export default function DashboardNavbar() {
  const [profile, setProfile] = useState<Profile[] | null>(null);
  const supabase = createClientComponentClient<Database>();
  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.from("user_details").select();
      setProfile(user);
    };

    getData();
  }, []);

  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Sheet>
            <SheetTrigger>
              <AlignLeft />
            </SheetTrigger>
            <SheetContent side="left">
              {profile?.map(({ id, roles }) => (
                <div key={id} className="flex flex-col">
                  {roles === "humanres" && (
                    <>
                      <SheetClose asChild>
                        <NextLink href="/human_resource">Home</NextLink>
                      </SheetClose>
                      <SheetClose asChild>
                        <NextLink href="/human_resource/data_akun">
                          Akun Manajemen
                        </NextLink>
                      </SheetClose>
                    </>
                  )}
                </div>
              ))}
            </SheetContent>
          </Sheet>
          <Ktypo className="w-20 fill-gray-200 ml-3" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Badge variant="destructive">
              Last Login Minggu 15 Oktober 2023
            </Badge>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {profile?.map(({ id, username }) => (
          <DropdownMenu key={id}>
            <DropdownMenuTrigger asChild>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-3">
              <DropdownMenuLabel>Hi {username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
