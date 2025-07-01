import { SearchForm } from "@/components/search-form";
import ItemsCard from "@/components/shared/items-card";
import Notification from "@/components/shared/Notification";
import Skeleton from "@/components/shared/skeleton";
import User from "@/components/shared/User";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="flex gap-5 items-center justify-between bg-white p-4 rounded-full shadow-gray-200 shadow-lg">
        <SearchForm className="flex-1/3" />
        <div className="flex items-center gap-5">
          <Notification />
          <User />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <CardTitle>All Items</CardTitle>
        <Button
          variant={"outline"}
          size={"default"}
          className="border-(--darkOrange)"
          asChild
        >
          <Link href={"/addItems"}>
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
