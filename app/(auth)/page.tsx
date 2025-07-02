import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='h-screen flex items-center justify-center'>
       <Card className='w-[360px] grid gap-20 border-none shadow-none p-0'>
        <CardHeader>
          <Image src={'/images/logo.png'} width={460} height={140} alt='logo image'/>
        </CardHeader>
        <CardContent>
          <div className='mb-5 space-y-2'>
            <Label htmlFor='id'>ID</Label>
            <Input id='id' placeholder='Enter your ID' className='border-2'/>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='pass'>Password</Label>
            <Input id='pass' type='password' placeholder='****' className='border-2'/>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant={'default'} size={'lg'} asChild className='bg-(--darkOrange) rounded w-full'><Link href={'/store-area/'}>GO</Link></Button>
        </CardFooter>
        </Card> 
    </div>
  )
}
