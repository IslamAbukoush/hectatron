'use client'

import { TeamMember, useTeamStore } from '@/lib/store/teamStore'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import * as m from 'motion/react-m'
import { LeftTeamMemberAnimation, RightTeamMemberAnimation, TeamAnimation } from '@/lib/animations/TeamAnimation';
import { AnimatePresence } from 'motion/react';
import Blur from '../../_components/Blur';
import Star from '../../_components/Star';
import { TitleAnimation } from '@/lib/animations/TitleAnimation';
import { useTranslations } from 'next-intl';

const Team: React.FC = () => {
    const t = useTranslations('team');
    const { currentTeamMember, setCurrentTeamMember } = useTeamStore();
    const isIslam = currentTeamMember === 'Islam';
    const isMaxim = currentTeamMember === 'Maxim';

    const handleTeamMember = (member: TeamMember) => {
        return () => {
            setCurrentTeamMember(member);
        }
    }

    return (
        <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col gap-6 py-10 overflow-hidden relative'>
            <m.div 
                variants={TitleAnimation}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
            >
                <h2 className='mx-auto text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 sm:pb-8 lg:pb-10'>
                  {t('title')}
                </h2>
            </m.div>
            
            <div className="grid grid-cols-2 bg-white/11 rounded-[12px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 py-3 sm:py-5 cursor-pointer">
                <div 
                    className={cn("text-center transition-colors duration-300", isMaxim && "text-[#FF7043]")} 
                    onClick={handleTeamMember('Maxim')}
                >
                    {t('maximTab')}
                </div>
                <div 
                    className={cn("text-center transition-colors duration-300", isIslam && "text-[#FF7043]")} 
                    onClick={handleTeamMember('Islam')}
                >
                    {t('islamTab')}
                </div>
            </div>
            
            <AnimatePresence mode='wait'>
            {/* Islam's section */}
            {isIslam && (
                <m.div
                    key='islam'
                    variants={TeamAnimation}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
                >
                    <m.div
                        variants={LeftTeamMemberAnimation}
                        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-10 justify-center items-center order-2 lg:order-1"
                    >
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient text-center'>
                          {t('islamTitle')}
                        </h2>
                        <div className="flex flex-col text-base sm:text-lg md:text-xl text-white/60 gap-2 sm:gap-3">
                            <p className='indent-8'>{t('islamP1')}</p>
                            <p className='indent-8'>{t('islamP2')}</p>
                            <p className='indent-8'>{t('islamP3')}</p>
                        </div>
                    </m.div>
                    <m.div
                        variants={RightTeamMemberAnimation}
                        className="w-full flex justify-center items-center relative order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-[500px] aspect-[533/611]">
                            <Image 
                                className='rounded-2xl object-cover' 
                                src='/images/team.png' 
                                alt={t('imageAlt')}
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
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
                >
                    <m.div
                        variants={LeftTeamMemberAnimation}
                        className="w-full flex justify-center items-center relative"
                    >
                        <div className="relative w-full max-w-[500px] aspect-[533/611]">
                            <Image 
                                className='rounded-2xl object-cover' 
                                src='/images/team.png' 
                                alt={t('imageAlt')}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                            />
                            <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-[#161616]/70 backdrop-blur-[4px] z-10 rounded-l-2xl" />
                        </div>
                    </m.div>
                    <m.div 
                        variants={RightTeamMemberAnimation}
                        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-10 justify-center items-center"
                    >
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient text-center'>
                          {t('maximTitle')}
                        </h2>
                        <div className="flex flex-col text-base sm:text-lg md:text-xl text-white/60 gap-2 sm:gap-3">
                            <p className='indent-8'>{t('maximP1')}</p>
                            <p className='indent-8'>{t('maximP2')}</p>
                            <p className='indent-8'>{t('maximP3')}</p>
                        </div>
                    </m.div>
                </m.div>
            )}
            </AnimatePresence>
            <div className="absolute inset-0 w-full h-full -z-10">
                <Blur className="top-[300px] right-[-18%] w-[200px] h-[300px]"/>
            </div>
            <Star className="top-[300px] right-[3%]"/>
            <Star className="top-[800px] left-[3%]"/>
        </div>
    )
}

export default Team