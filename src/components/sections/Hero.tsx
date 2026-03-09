import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Calendar, Mail, FileText, Github, Linkedin, Facebook } from "lucide-react";

export function Hero() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <SectionWrapper id="hero" className="py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

                {/* Profile Image (Static, no floating animation or glow) */}
                <FadeIn delay={0.1} className="shrink-0 flex-none">
                    <div className="w-32 h-32 md:w-48 md:h-48 overflow-hidden bg-muted rounded-sm">
                        <img
                            src="/profile.png"
                            alt="Rechie James Postanes"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=R+J&size=512&background=random`;
                            }}
                        />
                    </div>
                </FadeIn>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                    <FadeIn delay={0.2} className="flex items-center gap-2">
                        <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
                            Rechie James Postanes
                        </h1>
                        <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-500 fill-blue-50 mt-1" />
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm md:text-base text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground"><path d="M7.49991 0.876892C4.14223 0.876892 1.42084 3.59828 1.42084 6.95596C1.42084 10.9705 5.25303 14.1231 7.4999 14.1231C9.74677 14.1231 13.579 10.9705 13.579 6.95596C13.579 3.59828 10.8576 0.876892 7.49991 0.876892ZM7.49991 9.4883C6.10116 9.4883 4.96766 8.3548 4.96766 6.95605C4.96766 5.5573 6.10116 4.4238 7.49991 4.4238C8.89866 4.4238 10.0322 5.5573 10.0322 6.95605C10.0322 8.3548 8.89866 9.4883 7.49991 9.4883Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                Tangkigan, Mabini, Bohol
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} className="mt-1">
                        <p className="text-base md:text-lg text-foreground font-medium tracking-tight">
                            Junior Full Stack Web Developer \ AI-Enabled
                        </p>
                    </FadeIn>

                    {/* Action Buttons */}
                    <FadeIn delay={0.5} className="flex flex-wrap items-center gap-3 mt-4">
                        <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm font-medium px-5 h-10 shadow-sm"
                            onClick={() => scrollTo("#contact")}
                        >
                            <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-sm font-medium px-5 h-10 border-border text-foreground hover:bg-muted hover:text-foreground"
                            onClick={() => window.location.href = "mailto:rechiejames.postanes@bisu.edu.ph"}
                        >
                            <Mail className="mr-2 h-4 w-4" /> Send Email
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-sm font-medium px-5 h-10 text-muted-foreground hover:bg-muted hover:text-foreground"
                            onClick={() => scrollTo("#projects")}
                        >
                            <FileText className="mr-2 h-4 w-4" /> View Projects
                        </Button>
                    </FadeIn>

                    {/* Social Links */}
                    <FadeIn delay={0.6} className="flex items-center gap-4 mt-4">
                        <a href="https://github.com/Recheese04" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 rounded-full hover:bg-muted" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/rechie-james-postanes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/rechiejames.postanes.9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
}
