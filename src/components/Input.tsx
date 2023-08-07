import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'h-14 w-full rounded-button border-y border-l-8 border-r border-naruto-orange border-y-black border-r-black pl-4 placeholder-black/40',
        className,
      )}
      {...props}
    />
  )
}
