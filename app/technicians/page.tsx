import React, { Suspense } from "react";
import TechniciansCard from "./TechniciansCard";
import Skeleton from "@/components/shared/skeleton";

export default function Page() {
  return (
    <div>
      <main>
        <Suspense fallback={<Skeleton />}>
        <div className="grid grid-cols-3 gap-5 items-center justify-center">

          {Array.from({ length: 9 }).map((item, i: number) => (
              <TechniciansCard key={i} />
            ))}
            </div>
        </Suspense>
      </main>
    </div>
  );
}
