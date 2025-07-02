import SearchMenu from "@/components/shared/SearchMenu";
import { CardTitle } from "@/components/ui/card";
import React from "react";
import LowQuantity from "./LowQuantity";
import OutOfStock from "./OutOfStock";

interface storesType {
  title: string;
  items: number;
  color: string;
}
export default function Page() {
  const stores = [
    { title: "Categories", items: 14, color: "text-blue-500" },
    { title: "Total Products", items: 868, color: "text-[#03C143]" },
    { title: "Out of Stock", items: 5, color: "text-[#F90000]" },
    { title: "Low Stocks", items: 12, color: "text-[#F900009d]" },
  ];

  return (
    <div>
      <SearchMenu />
      <main className="mt-6">
        <section className="bg-white p-5 rounded-2xl border">
          <CardTitle className="text-xl">Overall Store</CardTitle>
          <div className="flex flex-nowrap gap-10 items-center justify-between mt-10">
            {stores.map((store: storesType, _: number) => (
              <div key={_} className="leading-10">
                <h3 className={`text-lg font-semibold ${store.color}`}>
                  {store.title}
                </h3>
                <p>{store.items}</p>
                <p className="text-gray-600">Last 7 days</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 flex flex-wrap items-center justify-end gap-6">
          <LowQuantity />
          <OutOfStock />
        </section>
      </main>
    </div>
  );
}
