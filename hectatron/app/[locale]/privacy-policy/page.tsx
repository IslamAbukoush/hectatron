import { IPrivacy } from "@/lib/types/IPrivacy"
import Title from "../_components/Title"

const privacy : IPrivacy[] = [
    {
        title: '1.Acceptance of Terms',
        description: 'By accessing or using our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not use our Services.'
    },
    {
        title: '2.Eligibility',
        description: 'To use our Services, you must be at least 13 years old and legally able to enter into a binding contract. By using the Services, you represent and warrant that you meet these requirements.'
    },
    {
        title: '3.Service Description',
        description: '[Your Company Name] provides tools and services for designing, building, and managing websites. Features may include drag-and-drop editing, custom domain integration, and access to templates and plugins. We reserve the right to modify or discontinue any features at any time.'
    },
    {
        title: '4.User Responsibilities',
        description: `You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for all content you upload, including text, images, and code. You may not use the Services to:
Post or share unlawful, defamatory, or infringing content.
Distribute spam or malicious software.
Misrepresent your identity or affiliation.`
    },
    {
        title: '5.Payment and Billing',
        description: 'Certain Services may require payment. By subscribing or making a purchase, you authorize us to charge your provided payment method on a recurring basis (if applicable), according to the terms you agreed upon at the time of purchase.'
    },
    {
        title: '6.Intellectual Property',
        description: 'All intellectual property related to our Services, including designs, software, logos, and trademarks, are owned by or licensed to [Your Company Name]. You may not use our brand or assets without written permission.'
    },
    {
        title: '7.Termination',
        description: 'We may suspend or terminate your access to the Services at any time, without notice, for conduct that violates these Terms or is otherwise harmful to us or others.'
    },
    {
        title: '8.Disclaimer of Warranties',
        description: 'Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Services will be error-free, secure, or continuously available.'
    },
    {
        title: '9.Limitation of Liability',
        description: 'To the fullest extent permitted by law, [Your Company Name] will not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the Services.'
    },
    {
        title: '10.Changes to Terms',
        description: 'We reserve the right to update or modify these Terms at any time. We will notify users of any changes by updating the "Effective Date" above. Continued use of the Services after changes implies acceptance.'
    },
    {
        title: '11.Contact',
        description: 'If you have any questions about these Terms, please contact us at: [contact@example.com]'
    }
]

const page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] py-6 sm:py-8 md:py-10 lg:py-[50px]">
        <Title title="Privacy Policy" description="Effective Date [01.01.2030]" left />
        <p className="text-sm sm:text-base text-white/60 my-4 sm:my-6">Welcome to Hectatron! These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website creation services, tools, and related content (collectively, the &quot;Services&quot;). By using our Services, you agree to these Terms in full.</p>
        <ol className="flex flex-col gap-3 sm:gap-4">
            {privacy.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">{item.title}</h2>
                    <p className="text-white/60 text-sm sm:text-base">{item.description}</p>
                </div>
            ))}
        </ol>
    </div>
  )
}

export default page