import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TechniciansCard() {
  return (
    <div>
      <Card className="w-full max-w-max rounded-4xl">
        <CardHeader>
            <span className="rounded-full border-5 border-orange-400 w-fit p-4 ">

            <UserCircle2 size={50}/>
            </span>
            {/* <Image src={''} width={230} height={230} alt=""/> */}
        </CardHeader>
        <CardContent>

          <p className="text-base text-orange-400 font-normal">Automation Engineer</p>
          <CardTitle className="text-2xl">A.K Jayawardhana</CardTitle>
<div>
    <p>ID :</p>
    <p>Contact :</p>
</div>

        </CardContent>
        <CardFooter>
          <CardAction>
            <div  className="flex gap-10 items-center justify-between">
 
            <Button variant={'default'} size={"default"} className="bg-orange-400">Edit</Button>
            <Button variant={'default'} size={"default"} className="bg-(--darkOrange)">Disable</Button>
            </div>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}
