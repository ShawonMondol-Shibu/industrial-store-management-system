"use client"

import { SidebarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import Image from "next/image"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-(--darkOrange) sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Image src={'/images/logo.png'}width={200} height={100} alt="logo"/>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <h1 className="text-center text-5xl">Store Keeper Area</h1>
      </div>
    </header>
  )
}
