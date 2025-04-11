import Title from "../_components/Title"
import FormCard from "./_components/FormCard"
import FormElement from "./_components/FormElement"

export default function page() {
    return (
        <div className="my-14">
            <Title title="Contact us" description="Fast, secure, and scalable Next.js websites with expert support to keep your business ahead." />
            <div className="grid grid-cols-[1fr_2fr] mt-20 mx-20">
                <FormCard />
                <FormElement />
            </div>
        </div>
    )
}