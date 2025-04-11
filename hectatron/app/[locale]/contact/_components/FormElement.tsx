'use client'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
    phoneNumber: z.string(),
    services: z.enum(['service1', 'service2', 'service3', 'service4']),
    message: z.string(),
})

export default function FormElement() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            services: 'service1',
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
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <input placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        )
    }

    return (
        <div className='bg-white'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Item type="firstName" label="First Name" placeholder="John" />
                    <Item type="lastName" label="Last Name" placeholder="Doe" />
                    <Item type="email" label="Email" placeholder="johndoe@gmail.com" />
                    <Item type="phoneNumber" label="Phone Number" placeholder="+1 012 3456 789" />
                    <button type="submit">Submit</button>
                </form>
            </Form>
        </div>
    )
}