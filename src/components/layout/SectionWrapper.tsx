import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-12 md:py-20 scroll-mt-16 w-full h-full", className)}>
            <div className="px-6 md:px-10 h-full">
                {children}
            </div>
        </section>
    );
}
