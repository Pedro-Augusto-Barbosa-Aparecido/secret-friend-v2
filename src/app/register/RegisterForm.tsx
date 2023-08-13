import { Input } from '@/components/Input'

export function RegisterForm() {
  return (
    <form action="" className="w-full">
      <div className="flex flex-col items-start justify-start gap-3">
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <label
            htmlFor="name"
            className="cursor-text font-body text-xl font-medium text-naruto-blue"
          >
            Nome
          </label>
          <Input name="name" id="name" />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <label
            htmlFor="email"
            className="cursor-text font-body text-xl font-medium text-naruto-blue"
          >
            E-mail
          </label>
          <Input name="email" id="email" type="email" />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <label
            htmlFor="email_confirmation"
            className="cursor-text font-body text-xl font-medium text-naruto-blue"
          >
            Confirme seu E-mail
          </label>
          <Input
            name="email_confirmation"
            id="email_confirmation"
            type="email"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <label
            htmlFor="password"
            className="cursor-text font-body text-xl font-medium text-naruto-blue"
          >
            Senha
          </label>
          <Input name="password" id="password" type="password" />
        </div>
      </div>

      <button
        className="mt-12 w-52 rounded-button bg-naruto-blue py-2.5 text-center text-xl font-semibold text-naruto-orange hover:bg-naruto-blue/90 hover:text-white hover:brightness-125"
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  )
}
