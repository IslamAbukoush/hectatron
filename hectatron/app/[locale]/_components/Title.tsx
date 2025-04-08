import { twMerge } from "tailwind-merge";

type TitleProps = {
    title: string;
    description: string;
    className?: string;
  };

const Title = ({title, description, className}: TitleProps) => {
  return (
    <div className={twMerge("flex flex-col gap-6 items-center justify-center my-[10px]", className)}>
        <h1 className="text-gradient text-6xl max-w-[70%] text-center ">{title}</h1>
        <p className="text-xl text-white/60 max-w-[50%] text-center">{description}</p>
    </div>
  )
}

export default Title