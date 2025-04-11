import Image from "next/image"
import Footer from "../_components/Footer"
import InfoBlock from "./_components/InfoBlock"
import Team from "./_components/Team"
import WhatIs from "./_components/WhatIs"

const page = () => {
  return (
    <div className="flex flex-col gap-10">
        <WhatIs/>
        <Team />
        <InfoBlock/>
    </div>
  )
}

export default page