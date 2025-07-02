import SearchMenu from "@/components/shared/SearchMenu";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListFilter } from "lucide-react";
import React from "react";

interface historyType {
  title: string;
  items: number;
  color: string;
}
export default function Page() {
  const historys = [
    { title: "Today", items: 14, color: "text-blue-500" },
    { title: "This Week", items: 200, color: "text-[#E19133]" },
    { title: "Last Month", items: 400, color: "text-[#845EBC]" },
    { title: "Issued", items: 400, color: "text-[#03C143]" },
  ];

  const columns: string[] = [
    "Technician ID",
    "Item ID",
    "Item Name",
    "Quantity",
    "Time",
  ];

  return (
    <div>
      <SearchMenu />
      <main className="mt-5">
        {/* Overall History */}
        <div className="bg-white p-5 rounded-2xl border">
          <CardTitle className="text-xl">Overall History</CardTitle>
          <div className="flex flex-nowrap gap-10 items-center justify-between mt-10">
            {historys.map((history: historyType, _: number) => (
              <div key={_} className="leading-10">
                <h3 className={`text-lg font-semibold ${history.color}`}>
                  {history.title}
                </h3>
                <p>{history.items}</p>
                <p className="text-gray-600">Items</p>
              </div>
            ))}
          </div>
        </div>

        {/* Todays Items */}
        <div className="mt-5 p-5 bg-white rounded-2xl border">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Today Items</CardTitle>

            <div className="flex items-center gap-2">
              <Button
                variant={"default"}
                size={"default"}
                className="bg-(--darkOrange)"
              >
                Today
              </Button>
              <Button variant={"outline"} size={"default"}>
                <ListFilter />
                Select Date
              </Button>
              <Button variant={"outline"} size={"default"}>
                Download
              </Button>
            </div>
          </div>

          <div className="mt-5 text-gray-600">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((item: string) => (
                    <TableHead key={item}>{item}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 14 }).map((item, i: number) => (
                  <TableRow key={i}>
                    <TableCell>ABC 23</TableCell>
                    <TableCell>12 987</TableCell>
                    <TableCell>Hammer</TableCell>
                    <TableCell>7535</TableCell>
                    <TableCell>12.00 PM</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
