import Image from 'next/image'
import { Just_Me_Again_Down_Here } from 'next/font/google'

import GiftImage from '@/assets/gift.png'
import { HeaderLink } from './HeaderLink'

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  weight: ['400'],
  subsets: ['latin'],
})

export function Header() {
  return (
    <header className="flex items-center gap-2 bg-white py-1">
      <Image src={GiftImage} alt="" className="h-20 w-20" />
      <h1 style={justMeAgainDownHere.style} className="text-5.5xl">
        Amigo Secreto de Konoha
      </h1>
      <div className="ml-auto flex items-center gap-2 pr-8">
        <HeaderLink href="/register">Cadastrar</HeaderLink>
        <HeaderLink href="/login">Login</HeaderLink>
      </div>
    </header>
  )
}
