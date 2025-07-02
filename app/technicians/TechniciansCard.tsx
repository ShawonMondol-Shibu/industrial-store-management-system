import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserCircle2 } from "lucide-react";
// import Image from "next/image";
import React from "react";

export default function TechniciansCard({className}:{className:string}) {
  return (
    <>
      <Card className={`${className} w-full max-w-max rounded-4xl px-6 py-10 m-auto hover:scale-110 transition-all duration-200 ease`}>
        <CardHeader>
          <span className="rounded-full border-5 border-orange-400 w-[90px] h-[90px] flex ">
            <UserCircle2 size={50} className="m-auto"/>
          </span>
          {/* <Image src={''} width={230} height={230} alt=""/> */}
        </CardHeader>
        <CardContent>
          <p className="text-base text-orange-400 font-normal">
            Automation Engineer
          </p>
          <CardTitle className="text-2xl">A.K Jayawardhana</CardTitle>
          <div className="grid grid-cols-2 items-center mt-4">
            <p>ID :</p>
            <p>73456</p>
            <p>Contact :</p>
            <p>077 34 76 300</p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button
            variant={"default"}
            size={"default"}
            className="bg-orange-400"
          >
            Edit
          </Button>
          <Button
            variant={"default"}
            size={"default"}
            className="bg-(--darkOrange)"
          >
            Disable
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
