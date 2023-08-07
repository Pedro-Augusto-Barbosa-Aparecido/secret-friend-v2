import RegisterBackgroundImage from '@/assets/register-image.png'
import Image from 'next/image'

export default function Register() {
  return (
    <div className="relative flex-1">
      <div className="absolute bottom-0 right-0 -z-[99999999999999999999999999]">
        <Image src={RegisterBackgroundImage} alt="" width={560} height={460} />
      </div>
      <div className="grid h-full grid-cols-register gap-3">
        <div className="flex flex-col items-start justify-start gap-4 pl-20 pt-10">
          <h1 className="text-5xl font-bold text-naruto-orange">
            Faça seu Cadastro
          </h1>
          <p className="w-register text-xl font-normal text-black">
            Preencha as informações para efetuar o seu cadastro e começar a
            brincadeira
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
