import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import { Mail, MapPin, Phone, Facebook, Github, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <SectionWrapper id="contact" className="py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <FadeIn>
                        <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight mb-4">Speaking & Contact</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
                            Open to junior full stack developer roles, internships, freelance work, and collaborative software projects.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="flex flex-col gap-0 border border-border rounded-sm overflow-hidden bg-card">
                    <FadeIn>
                        <a href="mailto:rechiejames.postanes@bisu.edu.ph" className="flex items-center justify-between p-4 md:p-5 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer outline-none">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-sm text-foreground">Email</span>
                            </div>
                            <span className="text-sm text-muted-foreground">rechiejames.postanes@bisu.edu.ph</span>
                        </a>
                    </FadeIn>

                    <FadeIn>
                        <a href="tel:+639561702750" className="flex items-center justify-between p-4 md:p-5 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer outline-none">
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-sm text-foreground">Phone</span>
                            </div>
                            <span className="text-sm text-muted-foreground">+63 9561702750</span>
                        </a>
                    </FadeIn>

                    <FadeIn>
                        <a href="https://www.facebook.com/rechiejames.postanes.9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 md:p-5 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer outline-none">
                            <div className="flex items-center gap-3">
                                <Facebook className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-sm text-foreground">Facebook</span>
                            </div>
                            <span className="text-sm text-muted-foreground">Rechie James Postanes</span>
                        </a>
                    </FadeIn>

                    <FadeIn>
                        <a href="https://github.com/Recheese04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 md:p-5 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer outline-none">
                            <div className="flex items-center gap-3">
                                <Github className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-sm text-foreground">GitHub</span>
                            </div>
                            <span className="text-sm text-muted-foreground">@Recheese04</span>
                        </a>
                    </FadeIn>

                    <FadeIn>
                        <a href="https://linkedin.com/in/rechie-james-postanes" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 md:p-5 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer outline-none">
                            <div className="flex items-center gap-3">
                                <Linkedin className="w-4 h-4 text-muted-foreground" />
                                <span className="font-bold text-sm text-foreground">LinkedIn</span>
                            </div>
                            <span className="text-sm text-muted-foreground">Rechie James Postanes</span>
                        </a>
                    </FadeIn>

                    <FadeIn className="flex items-center justify-between p-4 md:p-5 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="font-bold text-sm text-foreground">Location</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Bohol, PH</span>
                    </FadeIn>
                </StaggerContainer>
            </div>
        </SectionWrapper>
    );
}
