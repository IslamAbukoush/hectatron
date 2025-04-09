import { Link } from "@/i18n/navigation"
import Image from "next/image"

interface InfoType{
    src: string,
    link: string
}

const info: InfoType[] = [
    {
        src: '/icons/facebook.svg',
        link: 't.me/HectatronBot'
    },
    {
        src: '/icons/telegram-color.svg',
        link: 't.me/HectatronBot' 
    },
    {
        src: '/icons/instagram-color.svg',
        link: 't.me/HectatronBot' 
    },
    {
        src: '/icons/google-color.svg',
        link: 't.me/HectatronBot' 
    },
    {
        src: '/icons/github-color.svg',
        link: 't.me/HectatronBot' 
    },
    {
        src: '/icons/linkedin-color.svg',
        link: 't.me/HectatronBot' 
    },
]

const InfoBlock = () => {
  return (
    <div className=" px-[100px] py-[30px]">
        <div className="w-1/2 flex flex-col gap-4 bg-[#1A1A32] inner-shadow rounded-[16px] p-6">
            <div className="w-full text-center">
                <h2 className="text-gradient text-2xl font-semibold">Maxim Roenco</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-white/60 text-base">
                <p>Web developer</p>
                <p>Co-Founder</p>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {
                info.map((item, index) => (
                    <div className="flex px-4 py-1 border-2 border-white/20 rounded-[16px]" key={index}>
                        <Link href={item.link} className="w-full h-full flex items-center justify-between">
                            <Image src={item.src} alt={item.src} width={50} height={50} />
                            <p className="text-white font-semibold text-base">{item.link}</p>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default InfoBlock