"use client";

import * as React from "react";
import {
  Ban,
  CirclePlus,
  History,
  Home,
  NotebookText,
  UserCircle,
} from "lucide-react";
// import { MdOutlineWorkHistory } from "react-icons/md";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Items",
      url: "/items",
      icon: Home,
      isActive: true,
    },
    {
      title: "Add Items",
      url: "/addItems",
      icon: CirclePlus,
    },
    {
      title: "History",
      url: "/history",
      icon: History,
    },
    {
      title: "Technicians",
      url: "/technicians",
      icon: UserCircle,
    },
    {
      title: "Disabled",
      url: "/disabled",
      icon: Ban,
    },
    {
      title: "Manage Store",
      url: "/manageStore",
      icon: NotebookText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
