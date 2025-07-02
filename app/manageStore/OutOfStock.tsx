import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OutOfStock() {
  return (
    <div>
      <div className="w-full max-w-max p-5 bg-white rounded-2xl border">
        <div className="flex items-center justify-between text-(--darkOrange)">
          <CardTitle className="text-xl">Out of Stock</CardTitle> <Link href={"#"} className="text-base">See All</Link>
        </div>

        <div className="mt-5">
          {Array.from({ length: 3 }).map((item, i) => (
            <div key={i} className="flex items-center gap-5">
              <Image
                src={"/images/tata.png"}
                width={60}
                height={70}
                alt="tata salt"
              />
              <p>
                Tata Salt <span>Remaining Quantity : 10 Packet</span>
              </p>
              <Badge
                variant={"default"}
                className="bg-[#F900001d] text-[#F900009d]"
              >
                Low
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
