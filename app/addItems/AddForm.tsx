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
        <div className='w-lg bg-white m-auto p-5'>
            <CardTitle>Add Item</CardTitle>
            <form action="">
                {
                    formData.map((form: formType) => <div key={form.id} className='flex items-center gap-5'>
                        <Label htmlFor={form.id}>{form.label}</Label>
                        <Input id={form.id} className='border flex-1/2' placeholder={form.placeHolder} />
                    </div>)
                }

            </form>
        </div>
    )
}
