"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
// import Link from "next/link";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-(--darkOrange) sticky top-0 z-50 flex w-full h-fit items-center border-b shadow">
      <div className="flex h-(--header-height) w-full items-center gap-2">
        <a href={'/items'} className="bg-white p-1">
          <Image src={"/images/logo.png"} width={150} height={100} alt="logo" />
        </a>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <h1 className="m-auto text-5xl text-white">Store Keeper Area</h1>
      </div>
    </header>
  );
}
