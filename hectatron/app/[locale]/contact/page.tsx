import Title from "../_components/Title"
import FormCard from "./_components/FormCard"
import FormElement from "./_components/FormElement"
import { getTranslations } from "next-intl/server"

export default async function page() {
    const t = await getTranslations("contact");
    return (
        <div className="my-14">
            <Title title={t("title")} description={t("description")} />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] mt-20 mx-5 md:mx-10 lg:mx-20 xl:grid-cols-[1fr_2fr]">
                <FormCard />
                <FormElement />
            </div>
        </div>
    )
}