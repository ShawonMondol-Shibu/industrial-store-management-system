import ItemsCard from "@/components/shared/items-card";
import SearchMenu from "@/components/shared/SearchMenu";
import Skeleton from "@/components/shared/skeleton";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
     <SearchMenu/>

      <div className="flex items-center justify-between">
        <CardTitle>All Items</CardTitle>
        <Button
          variant={"outline"}
          size={"default"}
          className="border-(--darkOrange) hover:bg-(--darkOrange) hover:text-white"
          asChild
        >
          <Link href={"/store-area/addItems"}>
            <CirclePlus fill="gray" stroke="white" className="size-5" />
            Add New
          </Link>
        </Button>
      </div>

      <main className="mt-5">
        <Suspense fallback={<Skeleton />}>
          <div className="flex flex-wrap items-center gap-10">
            {Array.from({ length: 9 }).map((item, i: number) => (
              <ItemsCard key={i} />
            ))}
          </div>
        </Suspense>
      </main>
    </>
  );
}
