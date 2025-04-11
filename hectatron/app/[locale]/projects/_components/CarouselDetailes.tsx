import * as m from 'motion/react-m'

interface TypeDetailes{
    title: string,
    description: string
}

const animateDiv = {
    initial:{ opacity: 0, scale: 0 },
    animate:{ opacity: 1, scale: 1 },
    exit:{ opacity: 0, scale: 0 },
    transition:{ duration: 0.5 },
  }

const CarouselDetailes = ({title, description}: TypeDetailes) => {
  return (
    <div
    className="absolute  w-full h-full pointer-events-none">
        <m.div
        {...animateDiv}
        className="absolute w-full text-center top-[-25%]">
            <h2 className='text-gradient text-4xl font-semibold'>{title}</h2>
        </m.div>
        <m.div
        {...animateDiv}
        className="absolute bottom-[-25%] w-full text-center">
            <p className='text-white/60 text-base'>{description}</p>
        </m.div>
    </div>
  )
}

export default CarouselDetailes