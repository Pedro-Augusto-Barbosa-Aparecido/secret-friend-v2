import Image from 'next/image'

import BackgroundImagePNG from '@/assets/bg-image.png'

export function BackgroundImage() {
  return (
    <>
      <Image
        src={BackgroundImagePNG}
        alt=""
        fill
        className="-z-[999999999999999999]"
      />
      <div className="absolute bottom-0 left-0 right-0 flex h-11 items-center justify-center bg-naruto-orange text-center">
        <span className="text-lg font-normal text-black">
          © www.konan.vercel.app - 2022
        </span>
      </div>
    </>
  )
}
