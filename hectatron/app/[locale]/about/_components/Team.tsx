'use client'

import { TeamMember, useTeamStore } from '@/lib/store/teamStore'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import * as m from 'motion/react-m'
import { LeftTeamMemberAnimation, RightTeamMemberAnimation, TeamAnimation } from '@/lib/animations/TeamAnimation';
import { AnimatePresence } from 'motion/react';

const Team: React.FC = () => {
    const { currentTeamMember, setCurrentTeamMember } = useTeamStore();
    const isIslam = currentTeamMember === 'Islam';
    const isMaxim = currentTeamMember === 'Maxim';

    const handleTeamMember = (member: TeamMember) => {
        return () => {
            setCurrentTeamMember(member);
        }
    }

    return (
        <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col gap-6 py-10'>
            <div className="text-center">
                <h2 className='mx-auto text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 sm:pb-8 lg:pb-10'>Team</h2>
            </div>
            
            <div className="grid grid-cols-2 bg-white/11 rounded-[12px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 py-3 sm:py-5 cursor-pointer">
                <div 
                    className={cn("text-center transition-colors duration-300", isMaxim && "text-[#FF7043]")} 
                    onClick={handleTeamMember('Maxim')}
                >
                    Maxim
                </div>
                <div 
                    className={cn("text-center transition-colors duration-300", isIslam && "text-[#FF7043]")} 
                    onClick={handleTeamMember('Islam')}
                >
                    Islam
                </div>
            </div>
            
            <AnimatePresence mode='wait'>
            {/* Islam's section */}

            {isIslam && (
                    <m.div
                    key='islam'
                    variants={TeamAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                        <m.div
                        variants={LeftTeamMemberAnimation}
                        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-10 justify-center items-center order-2 lg:order-1">
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient text-center'>Islam Abu-Koush - Co-Founder & Full-Stack Developer</h2>
                            <div className="flex flex-col text-base sm:text-lg md:text-xl text-white/60 gap-2 sm:gap-3">
                                <p className='indent-8'>Islam is a versatile full-stack developer and co-founder of Hectatron. With a robust technical background in Next.js, React, Express.js, Tailwind CSS, and Node.js, he has honed his skills through diverse experiences, including hackathon projects like Codify and Investora.</p>
                                <p className='indent-8'>His journey also includes working as a call center agent, which shaped his strong communication skills and client-oriented mindset. Islam's proficiency in Figma and Photoshop enables him to seamlessly integrate aesthetics with functionality, crafting modern, engaging web solutions.</p>
                                <p className='indent-8'>Passionate about continuous learning, he actively explores new development practices to keep Hectatron at the forefront of web innovation.</p>
                            </div>
                        </m.div>
                    
                        <m.div
                        variants={RightTeamMemberAnimation}
                        className="w-full flex justify-center items-center relative order-1 lg:order-2">
                            <div className="relative w-full max-w-[500px] aspect-[533/611]">
                                <Image 
                                    className='rounded-2xl object-cover' 
                                    src='/images/team.png' 
                                    alt='Hectatron Team' 
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                />
                                <div className="absolute top-0 bottom-0 left-1/2 right-0 bg-[#161616]/70 backdrop-blur-[4px] z-10 rounded-r-2xl" />
                            </div>
                        </m.div>
                    </m.div>
            )}
            
            {/* Maxim's section */}
            {isMaxim && (
                    <m.div
                    key='maxim'
                    variants={TeamAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                        <m.div
                        variants={LeftTeamMemberAnimation}
                        className="w-full flex justify-center items-center relative">
                            <div className="relative w-full max-w-[500px] aspect-[533/611]">
                                <Image 
                                    className='rounded-2xl object-cover' 
                                    src='/images/team.png' 
                                    alt='Hectatron Team' 
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                />
                                <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-[#161616]/70 backdrop-blur-[4px] z-10 rounded-l-2xl" />
                            </div>
                        </m.div>
                        
                        <m.div 
                        variants={RightTeamMemberAnimation}
                        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-10 justify-center items-center">
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient text-center'>Maxim Roenco - Co-Founder & Full-Stack Developer</h2>
                            <div className="flex flex-col text-base sm:text-lg md:text-xl text-white/60 gap-2 sm:gap-3">
                                <p className='indent-8'>Maxim is a passionate full-stack developer and co-founder of Hectatron. With hands-on experience from internships at Amdaris, Smart Energy Solutions, and Quant-Apps, he excels in building modern web applications using Next.js, React, Tailwind CSS, Node.js, and MongoDB.</p>
                                <p className='indent-8'>His projects range from interactive learning platforms to innovative financial tools, showcasing his problem-solving abilities and technical expertise. Maxim is also skilled in Figma and Photoshop, allowing him to create visually appealing and user-friendly interfaces.</p>
                                <p className='indent-8'>Dedicated to delivering quality and performance, he constantly explores new technologies to enhance his craft. As a leader, he drives Hectatron's mission of building responsive, cutting-edge websites.</p>
                            </div>
                        </m.div>
                    </m.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default Team