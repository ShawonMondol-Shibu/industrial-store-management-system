import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

interface formType {
    label: string;
    type: string;
    id: string;
    placeHolder: string;
}
export default function AddForm() {
    const formData = [
        { label: "Item Name", type: "text", id: "name", placeHolder: "Enter product Name" },
        { label: "Item ID", type: "text", id: "id", placeHolder: "Enter product ID" },
        { label: "Category", type: "text", id: "category", placeHolder: "Select product category" },
        { label: "Quantity", type: "number", id: "quantity", placeHolder: "Enter product quantity" },
        { label: "Unit", type: "number", id: "unit", placeHolder: "Enter product unit" },
        { label: "Date of delivery", type: "date", id: "date", placeHolder: "Enter date of delivery" },
    ]
    return (
        <div className='w-lg bg-white m-auto p-5 rounded-xl border'>
            <CardTitle className='text-2xl font-medium'>New Item</CardTitle>
            <form action="" className=''>
                {
                    formData.map((form: formType) => <div key={form.id} className='flex flex-wrap items-center justify-between gap-5 my-8'>
                        <Label htmlFor={form.id} className='flex-1/6'>{form.label}</Label>
                        <Input id={form.id} className='border flex-1/2' placeholder={form.placeHolder} />
                    </div>)
                }

<Button variant={'default'} size={"lg"} className='bg-(--darkOrange) cursor-pointer m-auto'>Add Product</Button>
            </form>
        </div>
    )
}
