'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { useState } from 'react'

type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  label: string
}

export function Checkbox({ label, onCheckedChange, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(
    'indeterminate',
  )

  function handleCheckedChange(value: CheckboxPrimitive.CheckedState) {
    setIsChecked(value)

    if (onCheckedChange) onCheckedChange(value)
  }

  return (
    <div className="flex items-center justify-start gap-2">
      <CheckboxPrimitive.Root
        className="group flex h-6 w-6 items-center justify-center rounded border border-black transition-all duration-700 ease-in-out data-[state=checked]:border-naruto-orange data-[state=checked]:bg-naruto-orange"
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="">
          <Check className="h-3 w-3 text-white" strokeWidth={4} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span
        onClick={() => setIsChecked((state) => !state)}
        className="text-md cursor-pointer font-medium text-naruto-orange"
      >
        {label}
      </span>
    </div>
  )
}
