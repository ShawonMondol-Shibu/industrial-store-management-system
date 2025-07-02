import React, { Suspense } from "react";
import Skeleton from "@/components/shared/skeleton";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import SearchMenu from "@/components/shared/SearchMenu";
import TechniciansCard from "../technicians/TechniciansCard";

export default function Page() {
  return (
    <div>
      <SearchMenu />
      <div className="flex items-center justify-between gap-5 mt-10">
        <CardTitle className="text-2xl">All Technicians</CardTitle>
        <div className="flex items-center gap-10">
          <Button variant={"outline"} size={"lg"}>
            {" "}
            <CirclePlus /> Add New
          </Button>
          <Button variant={"default"} size={"lg"} className="bg-(--darkOrange)">
            Disable
          </Button>
        </div>
      </div>
      <main className="mt-8">
        <Suspense fallback={<Skeleton />}>
          <div className="xl:grid grid-cols-3 flex flex-wrap gap-5 items-center justify-center">
            {Array.from({ length: 9 }).map((item, i: number) => (
              <TechniciansCard className="bg-[#f9000025] shadow-none" key={i} />
            ))}
          </div>
        </Suspense>
      </main>
    </div>
  );
}
