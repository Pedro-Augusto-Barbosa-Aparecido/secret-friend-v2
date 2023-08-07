import { BackgroundImage } from '@/components/BackgroundImage'

import { LoginForm } from './LoginForm'

export default function Login() {
  return (
    <div className="relative flex flex-1">
      <BackgroundImage />
      <div className="flex flex-1 items-center justify-end pr-20 font-body text-black">
        <div className="-mt-16 flex h-fit min-w-[480px] flex-col rounded-button bg-white px-12 py-11 text-center shadow-md">
          <div className="flex flex-col gap-2">
            <span className="text-2xl">Crie seu grupo e</span>
            <span className="text-6xl font-bold text-naruto-orange">
              Divirta-se
            </span>
          </div>
          <span className="mt-4 text-lg">
            Já tem Cadastro? Então faça o seu Login!
          </span>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
