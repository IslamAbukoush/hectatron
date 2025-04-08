import Title from "../../_components/Title"
import FAQBlock from "./FAQBlock"

const FAQ = () => {
  return (
    <div className="px-[100px] py-[50px] flex flex-col gap-10 items-center justify-center">
        <Title 
            title='FAQs' 
            description='Find answers to common questions about our services, technology, and process. If you need more details, feel free to reach out!'
        />
        <div className="grid grid-cols-2 gap-10 w-full">
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
            <FAQBlock/>
        </div>
    </div>
  )
}

export default FAQ