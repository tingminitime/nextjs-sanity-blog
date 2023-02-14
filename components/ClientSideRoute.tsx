'use client'
import { ReactNode } from 'react'
import Link from 'next/link'

function ClientSideRoute({
  children,
  route,
}: {
  children: ReactNode
  route: string
}) {
  return <Link href={route}>{children}</Link>
}
export default ClientSideRoute
