import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";

const education = [
    {
        degree: "BS Computer Science",
        school: "Bohol Island State University",
        year: "Expected 2027",
    },
    {
        degree: "Senior High School – Humanities and Social Sciences",
        school: "Tangkigan Integrated School",
        year: "2023",
    },
];

export function Education() {
    return (
        <SectionWrapper id="education" className="py-12 md:py-16">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight">Education</h2>
            </div>

            <StaggerContainer className="flex flex-col gap-0 border border-border border-b-0 rounded-sm overflow-hidden text-sm md:text-base">
                {education.map((edu, index) => (
                    <FadeIn key={index} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 p-4 md:p-5 border-b border-border bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-foreground tracking-tight">
                                {edu.degree}
                            </h3>
                            <span className="text-muted-foreground mt-0.5">{edu.school}</span>
                        </div>

                        <div className="flex items-start text-muted-foreground font-medium whitespace-nowrap mt-2 sm:mt-0">
                            {edu.year}
                        </div>
                    </FadeIn>
                ))}
            </StaggerContainer>
        </SectionWrapper>
    );
}
