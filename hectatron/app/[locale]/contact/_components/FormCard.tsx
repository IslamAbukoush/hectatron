import Image from "next/image"

export default function FormCard() {
    return (

        <div className="bg-[#1A1A32] relative rounded-xl overflow-hidden p-10 flex flex-col gap-32">
            <div className="flex flex-col gap-3">
                <p className="text-[#FF8629] font-semibold text-3xl">Contact Information</p>
                <p className="text-[#C9C9C9] text-xl">Say something to start a live chat!</p>
            </div>

            <ul className="flex flex-col gap-12 [&>li]:flex [&>li]:gap-5 [&>li]:text-white">
                <li>
                    <Image src="/icons/phone.svg" alt="phone" width={24} height={24} className="" />
                    +373 697-048-56
                </li>
                <li>
                    <Image src="/icons/mail.svg" alt="email" width={24} height={24} className="" />
                    hectatron.web@gmail.com
                </li>
                <li>
                    <Image src="/icons/location.svg" alt="location" width={24} height={24} className="" />
                    Chisinau Islam’s Home
                </li>
            </ul>
            <div className="flex gap-5">
                <Image src='/icons/twitter.svg' alt="twitter" width={30} height={30} />
                <Image src='/icons/insta.svg' alt="instagram" width={30} height={30} />
                <Image src='/icons/discord.svg' alt="discord" width={30} height={30} />
            </div>
            <Image src='/icons/circles.svg' alt="circles" width={200} height={200} className="absolute bottom-0 right-0" />
        </div>
    )
}