import Team from "./_components/Team"
import WhatIs from "./_components/WhatIs"

const page = () => {
  return (
    <div className="flex flex-col gap-10">
        <WhatIs/>
        <Team />
    </div>
  )
}

export default page