
import { domAnimation, LazyMotion } from "motion/react"
import { PropsWithChildren } from "react"
import { NextIntlClientProvider } from "next-intl";

export default async function Providers({ children }: PropsWithChildren<unknown>) {
  
  return (
    <LazyMotion features={domAnimation}>
      <NextIntlClientProvider >
        {children}
      </NextIntlClientProvider>
    </LazyMotion>
  )
}
