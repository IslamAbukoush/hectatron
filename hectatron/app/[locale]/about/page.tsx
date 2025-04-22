import InfoBlock from "./_components/InfoBlock"
import Team from "./_components/Team old"
import WhatIs from "./_components/WhatIs"

const page = () => {
  return (
    <div className="flex flex-col gap-10 mt-[60px]">
        <WhatIs/>
        <Team />
        <InfoBlock/>
    </div>
  )
}

export default page