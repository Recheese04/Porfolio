import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/animations/FadeIn";

export function AiWorkflow() {
    return (
        <SectionWrapper id="ai-workflow" className="py-12 md:py-16">
            <div className="flex flex-col gap-6">
                <FadeIn>
                    <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight">AI-Enabled Workflow</h2>
                </FadeIn>

                <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                    <FadeIn delay={0.1}>
                        <p>
                            Leveraging state-of-the-art AI tooling to write cleaner code, squash bugs faster, and ship scalable applications with unmatched velocity.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                            <span className="text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-sm border border-border">
                                ChatGPT
                            </span>
                            <span className="text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-sm border border-border">
                                Claude
                            </span>
                            <span className="text-sm font-medium text-foreground bg-muted px-3 py-1.5 rounded-sm border border-border">
                                GitHub Copilot
                            </span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
}
