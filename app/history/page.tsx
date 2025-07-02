import SearchMenu from '@/components/shared/SearchMenu'
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card'
import React from 'react'

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
  ]
  return (
    <div>
      <SearchMenu />
      <main className='mt-5'>

        {/* Overall History */}
        <div className='bg-white p-5 rounded-2xl border'>
          <CardTitle className='text-xl'>Overall History</CardTitle>
          <div className='flex gap-10 items-center justify-between mt-10'>
            {
              historys.map((history: historyType, _: number) => <div key={_} className='leading-10'>
                <h3 className={`text-lg font-semibold ${history.color}`}>{history.title}</h3>
                <p>{history.items}</p>
                <p className='text-gray-600'>Items</p>
              </div>)
            }

          </div>
        </div>

{/* Todays Items */}
        <div>
<div>
  <CardTitle className='text-xl'>Today Items</CardTitle>

  <div>
    <Button variant={"default"}>Today</Button>
    <Button variant={"outline"}>Select Date</Button>
    <Button variant={"outline"}>Download</Button>
  </div>
</div>


        </div>
      </main>
    </div>
  )
}
