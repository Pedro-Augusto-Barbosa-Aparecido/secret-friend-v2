'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type HeaderLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

export function HeaderLink({ className, href, ...props }: HeaderLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      data-currentpath={pathname === href}
      className={twMerge(
        'w-52 rounded-button bg-transparent py-2 text-center text-xl font-semibold text-naruto-blue hover:bg-naruto-blue/90 hover:text-white hover:brightness-125 data-[currentpath=true]:bg-naruto-blue data-[currentpath=true]:text-naruto-orange',
        className,
      )}
      {...props}
    />
  )
}
