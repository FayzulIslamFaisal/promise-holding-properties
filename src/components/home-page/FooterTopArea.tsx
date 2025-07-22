"use client";

import {
  Facebook,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from "lucide-react";

const FooterTopArea = () => {
    interface SocialIcon {
        href: string;
        icon: LucideIcon;
        className?: string;
    }
    
    const socialIcons: SocialIcon[] = [
        { href: '#', icon: Facebook, className: "size-5 md:size-6" },
        { href: '#', icon: Linkedin, className: "size-5 md:size-6" },
        { href: '#', icon: TwitterIcon, className: "size-5 md:size-6" },
        { href: '#', icon: InstagramIcon, className: "size-5 md:size-6" },
        { href: '#', icon: YoutubeIcon, className: "size-5 md:size-6" },
    ];

    return (
        <div className="px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 border-b border-[var(--custom-bg-accent)]/25 pb-4 shadow-2xl">
                    {/* Logo Area */}
                    <div>
                        <Link href="/" className="inline-block relative w-[200px] h-[70px]">
                            <Image
                                src="/assets/images/Web-Logo.png"
                                fill
                                alt="PromiseHoldings Logo"
                                className="object-scale-down w-full h-full"
                            />
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 justify-start md:justify-end flex-wrap">
                        <span className="text-sm md:text-base font-semibold text-[var(--custom-bg-white)]">
                            Follow Us:
                        </span>
                        <div className="flex items-center gap-3">
                            {socialIcons.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        className="bg-[var(--custom-bg-accent)] text-[var(--custom-bg-white)] 
                                        hover:bg-[var(--custom-bg-black)] hover:text-white 
                                        p-2 rounded-md border border-[var(--custom-bg-accent)] transition-all duration-300 
                                        shadow-md hover:shadow-[0_4px_15px_rgba(255,255,255,0.6)] 
                                        hover:-translate-y-1 transform hover:border-[var(--custom-border-primary)]"
                                    >
                                        <IconComponent className={item.className} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTopArea;