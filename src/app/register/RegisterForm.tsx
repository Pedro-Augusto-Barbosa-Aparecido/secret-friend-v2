import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'

import Link from 'next/link'

export function RegisterForm() {
  return (
    <form className="mt-10 flex w-full flex-col gap-5">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />

      <Checkbox label="Lembre-se de mim" />

      <button className="w-full rounded-button bg-naruto-blue py-3 text-center text-xl font-semibold text-naruto-orange hover:text-white hover:brightness-125">
        LOGIN
      </button>

      <Link
        href="/forgot-password"
        className="text-md -mt-2 font-medium hover:underline hover:brightness-110"
      >
        Esqueci minha senha
      </Link>

      <Link
        href="/register"
        className="-mt-2 w-full rounded-button py-2 text-center text-xl font-semibold text-naruto-blue hover:underline hover:brightness-125"
      >
        Cadastrar
      </Link>
    </form>
  )
}
