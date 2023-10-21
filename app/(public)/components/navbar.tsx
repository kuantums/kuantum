"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Link,
  NavbarItem,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Klogo, Ktypo } from "@/components/icon/klogo";
import { LoginDashBoardForm } from "../loginform";
import { cn } from "@/lib/utils";

export default function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Layanan",
    "Aplikasi",
    "Portfolio",
    "Dashboard",
    "Help & Feedback",
  ];

  return (
    <>
      <Navbar
        shouldHideOnScroll
        suppressHydrationWarning
        isBordered
        maxWidth="full"
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarBrand>
          <Ktypo
            className="fill-slate-300 
        "
          />
        </NavbarBrand>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "success"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavigationMenu
          className="hidden max-w-2xl lg:block mx-auto"
          suppressHydrationWarning
        >
          <NavigationMenuList suppressHydrationWarning>
            <NavigationMenuItem suppressHydrationWarning>
              <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <span className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <Klogo className="h-20 w-20" fill="white" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Kuantum.
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Jasa Pembuatan Platform Berbasis Web Applikasi.
                      </p>
                    </span>
                  </li>
                  <ListItem href="/docs" title="Website">
                    Fullstack Web Aplikasi
                  </ListItem>
                  <ListItem href="/docs/installation" title="Platform">
                    Pembuatan Sistem Berbasis Website seperti CRM/CMS/FMS
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Konten Marketing"
                  >
                    Design Graphic & Video untuk Kegiatan Marketing
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Portfolio"
                  >
                    Portfolio Website
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Cloud SQL"
                  >
                    Migrate Database dari Lokal ke Cloud
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Aplikasi</NavigationMenuTrigger>
              <NavigationMenuContent suppressHydrationWarning>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/dashboard"
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LoginDashBoardForm />
      </Navbar>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <span
          ref={ref}
          className={cn(
            "block select-none space-y-1 cursor-pointer rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </span>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI Vector",
    href: "/",
    description: "Chat GPT Customize",
  },
  {
    title: "Platform Manajemen Penjualan Ponsel & Servis Berbasis Web",
    href: "/",
    description: "Software Untuk Mengolah Data Penjualan Dan Servis Smartphone",
  },
  {
    title: "Platform Manajemen Konten",
    href: "/",
    description:
      "Mengatur dan Mengolah Konten Marketing Dalam satu Panel Dashboard",
  },
  {
    title: "Platform Manajemen Pelanggan",
    href: "/",
    description: "Buat Relasi Dengan Pelanggan Semakin Mudah.",
  },
];
