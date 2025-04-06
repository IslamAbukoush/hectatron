'use client'
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState, RefObject } from "react"

interface LinkItem {
  href: string;
  label: string;
}

const Header = () => {
    const path = usePathname();
    const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
    const navContainerRef = useRef<HTMLDivElement>(null);
    
    const links: LinkItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];
    
    // Function to update indicator position
    const updateIndicatorPosition = () => {
        // Find the active link element
        const activeLink = links.find(link => link.href === path);
        if (activeLink && navRefs.current[activeLink.href]) {
            const element = navRefs.current[activeLink.href];
            const navContainer = navContainerRef.current;
            if (element && navContainer) {
                // Calculate position relative to the container
                const containerLeft = navContainer.getBoundingClientRect().left;
                const elementLeft = element.getBoundingClientRect().left;
                const relativeLeft = elementLeft - containerLeft;
                
                // Set indicator position and width based on the active element
                setIndicatorStyle({
                    width: `${element.offsetWidth*2}px`,
                    left: `${relativeLeft - element.offsetWidth/2}px`,
                    opacity: 1
                });
            }
        } else {
            // Hide indicator if no active link
            setIndicatorStyle({ opacity: 0 });
        }
    };
    
    // Update indicator position when path changes or on initial render
    useEffect(() => {
        // Use timeout to ensure DOM is fully rendered
        const timeoutId = setTimeout(updateIndicatorPosition, 50);
        return () => clearTimeout(timeoutId);
    }, [path]); // Only depend on path changes
    
    // Add resize event listener to handle window resizing
    useEffect(() => {
        // Debounce function to limit how often the resize handler fires
        const debounce = (fn: Function, ms = 100) => {
            let timeoutId: ReturnType<typeof setTimeout>;
            return function(...args: any[]) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => fn.apply(this, args), ms);
            };
        };
        
        // Create debounced resize handler
        const handleResize = debounce(() => {
            updateIndicatorPosition();
        }, 100);
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Initial calculation
        handleResize();
        
        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [path]); // Recalculate when path changes
    
    return (
        <div className="grid grid-cols-[1fr_2fr_1fr] py-8 px-4 z-10">
            <div className="flex justify-center items-center px-10">
                <Image src='/images/logo.png' alt="Hectatron" width={300} height={100} className="w-full" />
            </div>
            <div ref={navContainerRef} className="relative flex justify-around items-center bg-white/11 px-[15%] rounded-[24px]">
                {links.map((link, i) => (
                    <Link 
                        key={i} 
                        href={link.href} 
                        ref={(el: HTMLAnchorElement | null) => {
                            if (el) navRefs.current[link.href] = el;
                        }}
                        className={cn("text-sm text-white opacity-45 py-3", path === link.href && "opacity-100")}
                    >
                        {link.label}
                    </Link>
                ))}
                
                {/* Animated indicator line */}
                <div 
                    className="absolute bottom-0 h-0.5 bg-white blur-[2px] transition-all duration-300 ease-in-out"
                    style={indicatorStyle}
                />
                
                <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="absolute right-5 cursor-pointer" />
            </div>
            <div className="flex justify-center items-center px-10">
                <div className="bg-button text-center content-center font-bold text-sm text-white px-10 py-6 rounded-[24px] cursor-pointer border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]">
                    Get Started
                </div>
            </div>
        </div>
    )
}

export default Header