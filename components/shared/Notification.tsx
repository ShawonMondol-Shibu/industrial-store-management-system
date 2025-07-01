import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          {" "}
          <Bell size={20} />{" "}
        </PopoverTrigger>
        <PopoverContent> hi </PopoverContent>
      </Popover>
    </>
  );
}
