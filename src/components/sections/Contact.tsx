import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import { Mail, MapPin, Phone, Facebook, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setErrorMsg("Web3Forms access key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.");
            setIsSubmitting(false);
            return;
        }

        formData.append("access_key", accessKey);
        // Optional: you can add a subject or from_name here
        formData.append("subject", "New Contact from Rechie Portfolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setErrorMsg(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setErrorMsg("Failed to send message. Please check your network connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    
                    <FadeIn delay={0.2} className="hidden md:block">
                        <div className="bg-card border border-border rounded-sm p-6 text-sm text-muted-foreground">
                            <h3 className="font-bold text-foreground mb-2 text-base">Let's build something together</h3>
                            <p className="leading-relaxed mb-4">
                                Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-foreground" />
                                    <span>rechiejames.postanes@bisu.edu.ph</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-foreground" />
                                    <span>+63 9561702750</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-foreground" />
                                    <span>Tangkigan, Mabini, Bohol, PH</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col gap-8">
                    {/* The Contact Form */}
                    <FadeIn delay={0.1}>
                        <div className="bg-card border border-border rounded-sm p-6 md:p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
                            
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                                    <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground text-lg">Message Sent!</p>
                                        <p className="text-sm text-muted-foreground mt-1">Thanks for reaching out. I'll get back to you soon.</p>
                                    </div>
                                    <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                        <input 
                                            id="name" 
                                            name="name" 
                                            required 
                                            placeholder="Your name"
                                            className="w-full h-10 px-3 py-2 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                        <input 
                                            id="email" 
                                            type="email" 
                                            name="email" 
                                            required 
                                            placeholder="you@example.com"
                                            className="w-full h-10 px-3 py-2 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            required 
                                            placeholder="What's on your mind?"
                                            rows={4}
                                            className="w-full px-3 py-2 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                                        />
                                    </div>
                                    
                                    {errorMsg && (
                                        <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-sm border border-destructive/20">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-10"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    {/* Social Links Container (Smaller) */}
                    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <FadeIn>
                            <a href="https://github.com/Recheese04" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 border border-border bg-card rounded-sm hover:bg-muted/50 transition-colors gap-2 cursor-pointer">
                                <Github className="w-5 h-5 text-muted-foreground" />
                                <span className="text-xs font-medium text-foreground">GitHub</span>
                            </a>
                        </FadeIn>

                        <FadeIn>
                            <a href="https://linkedin.com/in/rechie-james-postanes" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 border border-border bg-card rounded-sm hover:bg-muted/50 transition-colors gap-2 cursor-pointer">
                                <Linkedin className="w-5 h-5 text-muted-foreground" />
                                <span className="text-xs font-medium text-foreground">LinkedIn</span>
                            </a>
                        </FadeIn>
                        
                        <FadeIn>
                            <a href="https://www.facebook.com/rechiejames.postanes.9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 border border-border bg-card rounded-sm hover:bg-muted/50 transition-colors gap-2 cursor-pointer">
                                <Facebook className="w-5 h-5 text-muted-foreground" />
                                <span className="text-xs font-medium text-foreground">Facebook</span>
                            </a>
                        </FadeIn>

                        <FadeIn>
                            <a href="mailto:rechiejames.postanes@bisu.edu.ph" className="flex flex-col items-center justify-center p-4 border border-border bg-card rounded-sm hover:bg-muted/50 transition-colors gap-2 cursor-pointer">
                                <Mail className="w-5 h-5 text-muted-foreground" />
                                <span className="text-xs font-medium text-foreground">Email</span>
                            </a>
                        </FadeIn>
                    </StaggerContainer>
                </div>
            </div>
        </SectionWrapper>
    );
}
