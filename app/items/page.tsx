import Skeleton from '@/components/shared/skeleton'
import React, { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<Skeleton/>}>
        <main>
            Items
        </main>
    </Suspense>
  )
}
