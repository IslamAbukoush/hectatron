'use client'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

type ItemProps = {
    type: "firstName" | "lastName" | "email" | "phoneNumber" | "services" | "message",
    label: string,
    placeholder: string,
}

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phoneNumber: z.string().min(7).max(25),
    services: z.enum(['newWebsite', 'websiteRedisgn', 'websiteBugFixes', 'technicalConsultation']),
    message: z.string().min(10).max(3000),
})

export default function FormElement() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            services: 'newWebsite',
            message: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    type ItemProps = {
        type: "firstName" | "lastName" | "email" | "phoneNumber" | "services" | "message",
        label: string,
        placeholder: string,
    }

    const Item: React.FC<ItemProps> = ({ type, label, placeholder }) => {
        return (
            <FormField
                control={form.control}
                name={type}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-white text-base'>{label}</FormLabel>
                        <FormControl>
                            <input className='appearance-none outline-none text-white border-b-1 border-[#8D8D8D] py-2' placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        )
    }

    return (
        <div className='p-10'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className='grid grid-cols-2 gap-5'>
                        <Item type="firstName" label="First Name" placeholder="John" />
                        <Item type="lastName" label="Last Name" placeholder="Doe" />
                        <Item type="email" label="Email" placeholder="johndoe@gmail.com" />
                        <Item type="phoneNumber" label="Phone Number" placeholder="+1 012 3456 789" />
                    </div>
                    <RadioGroup defaultValue="newWebsite" name='services' className='flex flex-col'>
                        <p className='text-white'>Select Service?</p>
                        <div className='flex justify-between'>
                            {['newWebsite', 'websiteRedisgn', 'websiteBugFixes', 'technicalConsultation'].map((item, i) => (
                                <div className="flex items-center space-x-2" key={i}>
                                    <RadioGroupItem value={item} id={item} />
                                    <label htmlFor={item} className='text-white'>{item}</label>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>
                    <Item type="message" label="Message" placeholder="Write your message..." />
                    <button type="submit" className='cursor-pointer text-white rounded-md bg-[#FF8629] px-15 py-5'>Send Message</button>
                </form>
            </Form>
        </div>
    )
}