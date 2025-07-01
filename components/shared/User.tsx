import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { UserCircle2 } from "lucide-react";

export default function User() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          {" "}
          <UserCircle2 size={30} />{" "}
        </PopoverTrigger>
        <PopoverContent> hi </PopoverContent> 
      </Popover>
    </>
  );
}
