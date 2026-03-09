import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
    return (
        <SectionWrapper id="about" className="py-12 md:py-16">
            <div className="flex flex-col gap-6">
                <FadeIn>
                    <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight">About</h2>
                </FadeIn>

                <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                    <FadeIn delay={0.1}>
                        <p>
                            I'm a full-stack software engineer specializing in developing solutions with React.js, Laravel, Node.js, and PostgreSQL. I am a Computer Science student passionate about building highly scalable web systems, intuitive interfaces, and real-world products.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p>
                            Lately, I've been diving deeper into artificial intelligence workflows, focusing on integrating AI tools like ChatGPT, Claude, and GitHub Copilot into modern applications. My work now includes leveraging generative AI to optimize development workflows, ensure cleaner code, and rapidly prototype new ideas.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p>
                            I am currently open to junior developer opportunities, internships, and collaborative software projects where I can contribute and continue to grow as an engineer.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
}
