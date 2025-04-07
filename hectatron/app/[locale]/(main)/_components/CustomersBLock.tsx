import { CustomersBlockProps } from "@/lib/types/CustomersBlockProps"
import Image from "next/image"

const CustomersBLock = ({src, alt, title, position, description}: CustomersBlockProps) => {
  return (
    <div className="bg-[#1A1A32] rounded-[16px] p-10 flex flex-col gap-4 border-2 border-white/20">
      <div className="flex items-start gap-6 justify-evenly">
        <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden">
          <Image 
            src={src}
            alt={alt}
            width={150}
            height={100}
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col gap-10">
          <div className="flex mb-1 justify-end">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-7 h-7 text-orange-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-gradient font-bold text-3xl">{title}</h3>
            <p className="text-gray-400 text-base">{position}</p>
          </div>
        </div>
      </div>
      
      <p className="text-white/60 text-lg">
        {description}
      </p>
      
      <div className="flex items-center justify-end gap-2 mt-2">
        <div className="bg-orange-500 p-2 rounded-full">
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
          </svg>
        </div>
        <span className="text-white text-lg font-bold">Testimonial</span>
      </div>
    </div>
  )
}

export default CustomersBLock