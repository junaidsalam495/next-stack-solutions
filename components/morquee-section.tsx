import React from 'react'
import { Marquee, MarqueeContent, MarqueeItem } from './ui/marquee'
import Image from 'next/image'

const MorqueeSection = ({ title }: { title: string }) => {
    return (
        <>
            <Marquee>
                <MarqueeContent>
                    {new Array(10).fill(null).map((_, index) => (
                        <MarqueeItem key={index} className="flex items-center justify-center space-x-4">
                            <span className="md:text-6xl font-bold h-20">{title}</span>
                            <Image
                                src="/images/favicon.png"
                                alt="Service Icon"
                                width={40}
                                height={40}
                                className="object-contain -mt-4"
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </>
    )
}

export default MorqueeSection

