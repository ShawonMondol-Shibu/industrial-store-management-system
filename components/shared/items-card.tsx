import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ItemsCard() {
  return (
    <>
      <Link href={"#"} className="m-auto w-fit hover:scale-120 group transition-all duration-200 ease-linear ">
        <Card className="w-full max-w-sm p-0  rounded-none bg-transparent group-hover:bg-background border-none group-hover:border shadow-none group-hover:shadow">
          <CardHeader className="p-0 relative border group-hover:border-none"> 
              <Image
                src={"/images/image 2.png"}
                width={300}
                height={100}
                alt="card image"
                className="m-auto w-full"
              />
              <Button
                variant={"outline"}
                size={"sm"}
                className="text-blue-600 border-blue-600 absolute top-5 right-5"
              >
                Edit
              </Button>
          </CardHeader>
          <CardFooter className="flex-wrap p-0 bg-white border group-hover:border-none">
            
            <div className="flex items-center justify-between w-full">
              <Button variant={"link"} className="text-base font-bold underline">IT009</Button>
              <Button variant={"link"} className="underline">50</Button>
            </div>
            <div className="flex items-center justify-between w-full">
              <Button variant={"link"} className="text-gray-400 underline">Hammer</Button>
              <Button variant={"link"} className="text-green-600 underline">In-stock</Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}
