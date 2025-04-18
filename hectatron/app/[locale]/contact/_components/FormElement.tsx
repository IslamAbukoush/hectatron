'use client'
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import * as m from "motion/react-m"
import { buttonAnimation, formElementAnimation, formFieldAnimation, staggerContainer } from "@/lib/animations/constactAnimations"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useFormStore } from '@/lib/store/FormStore';
import { useState } from 'react';

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phoneNumber: z.string().min(7).max(25),
    service: z.enum(['newWebsite', 'websiteRedisgn', 'websiteBugFixes', 'technicalConsultation']),
    message: z.string().min(10).max(3000),
})

export default function FormElement() {
    const { setIsOpen, setMessage } = useFormStore()
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            service: 'newWebsite',
            message: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        
        emailjs.send(
            'service_ygz6zab',
            'template_fuu8po9',
            {
                title: 'New inquery from Hectatron',
                time: 'time',
                name: `${values.firstName} ${values.lastName}`,
                ...values,
            },
            {
                publicKey: 'NxaXNUOZOCYcvu-Jx'
            }
        ).then(
            () => {
                console.log('SUCCESS!');
                setMessage('Am primit mesajul tău!\nEchipa noastră îți va răspunde în cel mai scurt timp.')
                setIsOpen(true);
                form.reset(); // Reset the form after successful submission
                setIsSubmitting(false);
            },
            (error) => {
                console.log('FAILED...', error.text);
                setMessage('A apărut o eroare. Te rugăm să încerci din nou mai târziu.')
                setIsOpen(true);
                setIsSubmitting(false);
            },
        );
    }

    type ItemProps = {
        type: "firstName" | "lastName" | "email" | "phoneNumber" | "message",
        label: string,
        placeholder: string,
        index?: number
    }

    const Item: React.FC<ItemProps> = ({ type, label, placeholder, index = 0 }) => {
        return (
            <m.div
                variants={formFieldAnimation}
                custom={index}
            >
                <FormField
                    control={form.control}
                    name={type}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-white text-base'>{label}</FormLabel>
                            <FormControl>
                                <m.input
                                    className='appearance-none outline-none text-white border-b-1 border-[#8D8D8D] py-2 w-full'
                                    placeholder={placeholder}
                                    {...field}
                                    whileFocus="focus"
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </m.div>
        )
    }

    return (
        <m.div
            className='p-10'
            variants={formElementAnimation}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <m.div
                        className='grid grid-cols-1 gap-5 lg:grid-cols-1'
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <Item type="firstName" label="First Name" placeholder="John" index={0} />
                        <Item type="lastName" label="Last Name" placeholder="Doe" index={1} />
                        <Item type="email" label="Email" placeholder="johndoe@gmail.com" index={2} />
                        <Item type="phoneNumber" label="Phone Number" placeholder="+1 012 3456 789" index={3} />
                    </m.div>

                    {/* Properly connected RadioGroup using FormField */}
                    <m.div
                        variants={formFieldAnimation}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    >
                        <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white'>Select Service?</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            className='flex flex-col'
                                            disabled={isSubmitting}
                                        >
                                            <m.div
                                                className='grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-1 xl:grid-cols-4 min-[975px]:grid-cols-2'
                                                variants={staggerContainer}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                {['newWebsite', 'websiteRedisgn', 'websiteBugFixes', 'technicalConsultation'].map((item, i) => (
                                                    <m.div
                                                        className="flex items-center space-x-2"
                                                        key={i}
                                                        variants={formFieldAnimation}
                                                        custom={i}
                                                    >
                                                        <RadioGroupItem value={item} id={item} disabled={isSubmitting} />
                                                        <label htmlFor={item} className='text-white'>{item}</label>
                                                    </m.div>
                                                ))}
                                            </m.div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </m.div>

                    <m.div
                        variants={formFieldAnimation}
                        initial="hidden"
                        animate="visible"
                        custom={5}
                    >
                        <Item type="message" label="Message" placeholder="Write your message..." index={5} />
                    </m.div>

                    <m.button
                        type="submit"
                        className={`cursor-pointer text-white rounded-md bg-[#FF8629] px-15 py-5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        variants={buttonAnimation}
                        initial="hidden"
                        animate="visible"
                        whileHover={isSubmitting ? {} : "hover"}
                        whileTap={isSubmitting ? {} : "tap"}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </m.button>
                </form>
            </Form>
        </m.div>
    )
}