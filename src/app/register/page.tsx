import RegisterBackgroundImage from '@/assets/register-image.png'
import Image from 'next/image'
import { RegisterForm } from './RegisterForm'
import { GoogleIcon } from '@/components/SVGIcons/google'
import { FacebookIcon } from '@/components/SVGIcons/facebook'

export default function Register() {
  return (
    <div className="relative flex-1 bg-[#D9D9D926]">
      <div className="absolute -right-14 bottom-0 -z-[99999999999999999999999999]">
        <Image src={RegisterBackgroundImage} alt="" width={560} height={460} />
      </div>
      <div className="grid h-full grid-cols-register gap-3">
        <div className="relative flex flex-col items-start justify-start gap-4 pl-20 pt-10">
          <h1 className="text-5xl font-bold text-naruto-orange">
            Faça seu Cadastro
          </h1>
          <p className="w-register text-xl font-normal text-black">
            Preencha as informações para efetuar o seu cadastro e começar a
            brincadeira
          </p>

          <RegisterForm />
        </div>
        <div></div>
        <div className="flex flex-col items-start justify-start gap-4 pr-20 pt-10">
          <button className="group flex w-full items-center justify-start space-x-2 rounded-md bg-naruto-blue p-4 shadow-md transition-transform duration-500 hover:scale-110 hover:bg-naruto-blue/80">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white group-hover:brightness-90">
              <div className="h-6 w-6">
                <GoogleIcon />
              </div>
            </div>
            <span className="font-body text-lg font-medium text-white group-hover:brightness-90">
              Increver-se com o Google
            </span>
          </button>
          <button className="group flex w-full items-center justify-start space-x-1 rounded-md bg-naruto-blue p-2 shadow-md transition-transform duration-500 hover:scale-110 hover:bg-naruto-blue/80">
            {/* <div className="flex items-center justify-center rounded bg-white group-hover:brightness-90"> */}
            <FacebookIcon />
            {/* </div> */}
            <span className="font-body text-lg font-medium text-white group-hover:brightness-90">
              Increver-se com o Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
