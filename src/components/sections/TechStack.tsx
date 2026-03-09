import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";

const techCategories = [
    {
        title: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "jQuery", "TypeScript", "Tailwind CSS", "ShadCN/UI"],
    },
    {
        title: "Backend",
        skills: ["PHP (Laravel)", "Node.js", "RESTful API Development", "C/C++", "Java"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "VS Code", "Figma", "Anti-Gravity"],
    },
    {
        title: "AI-Enabled Workflow",
        skills: ["ChatGPT", "Claude", "GitHub Copilot", "AI-assisted code generation", "AI debugging"],
    },
];

export function TechStack() {
    return (
        <SectionWrapper id="tech-stack" className="py-12 md:py-16">
            <div className="flex flex-col gap-8">
                <FadeIn>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight">Tech Stack</h2>
                    </div>
                </FadeIn>

                <div className="space-y-10">
                    <StaggerContainer className="flex flex-col gap-10">
                        {techCategories.map((category) => (
                            <FadeIn key={category.title} className="flex flex-col gap-4">
                                <h3 className="font-bold text-base md:text-lg text-foreground tracking-tight">{category.title}</h3>
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="text-sm font-medium text-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-sm border border-border">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </FadeIn>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </SectionWrapper>
    );
}
