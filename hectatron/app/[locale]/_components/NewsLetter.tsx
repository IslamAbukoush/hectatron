import { cn } from "@/lib/utils"
import Image from "next/image"
import * as m from 'motion/react-m'

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormStore } from '@/lib/store/FormStore';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useTranslations } from "next-intl";

const formSchema = z.object({
    email: z.string().email(),
})

export default function NewsLetter() {
    const t = useTranslations('newsletter');
    const { setIsOpen, setMessage } = useFormStore()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setMessage(t('success'));
        setIsOpen(true);
        form.reset();
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="px-5 xs:px-12 py-6 flex flex-col gap-4 items-start inner-shadow rounded-[24px] border-2 border-[#D86A15]/20">
                    <h3 className={cn("text-lg font-semibold text-white/80", "max-sm:text-base")}>
                        {t('title')}
                    </h3>
                    <div className="w-full flex gap-4 items-center justify-between">
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl className="w-full">
                                        <m.input
                                            className={cn("w-full p-4 max-sm:p-2 rounded-[20px] items-center bg-white border-1 border-[#D86A15]/60 placeholder:text-black/40 placeholder:text-lg placeholder:font-semibold", "max-sm:placeholder:text-sm")}
                                            placeholder={t('placeholder')}
                                            {...field}
                                            whileFocus="focus"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <m.button initial={{ opacity: 0, scale: 0 }}
                            type="submit"
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ color: '#FF7043', scale: 1.15 }}
                            transition={{ type: 'spring', stiffness: 250, damping: 10, duration: 0.3 }}
                            className="cursor-pointer"
                        >
                            <Image src="/icons/arrow-right.svg" alt="arrow" width={50} height={50} className="rtl:rotate-180" />
                        </m.button>
                    </div>
                </div>
            </form>
        </Form>
    )
}