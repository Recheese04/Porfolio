import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "TAPasok Attendance Tracking",
        type: "Web Application",
        description: "The centralized Student Management System for BISU Candijay Campus — manage student attendance, events, clearances, and organizational records seamlessly with a QR Code and RFID.",
        status: "In Progress",
        image: "/TAPasok.png",
        techStack: ["React.js", "Laravel", "Tailwind CSS", "MySQL"],
    },
    {
        title: "Manga Reading Website",
        type: "Web Platform",
        description: "Content platform where users can browse and read manga or manhwa online with a clean interface.",
        status: "Active",
        link: "https://recyglen.vercel.app",
        image: "/manga-reader.png",
        techStack: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "Lakeside Campsite Booking System",
        type: "Web System",
        description: "Online booking platform for campsite reservations with real-time availability and payment integration.",
        status: "In Progress",
        image: "/lakeside.png",
        link: "https://lakeside-campsite-booking-system.vercel.app",
        techStack: ["React", "Typescript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    },
    {
        title: "BISU Accreditation",
        type: "Web System",
        description: "System for managing and evaluating accreditation workflows for external providers.",
        status: "Completed",
        image: "/EPA.jpg",
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
        title: "FundMonitor",
        type: "Dashboard System",
        description: "The all-in-one platform for student organizations to track budgets, request approvals, and generate audit-ready reports instantly.",
        status: "Completed",
        image: "/FundMonitor.png",
        techStack: ["React", "PHP", "MySQL"],
    },
    {
        title: "StepMap",
        type: "Mobile App",
        description: "Fitness and movement tracking app monitoring steps with location-aware functionality.",
        status: "Completed",
        image: "/StepMap.png",
        techStack: ["React Native", "Expo", "Firebase", "Street Map API"],
    },
    {
        title: "The Local Harvest",
        type: "E-commerce",
        description: "Agriculture-focused online marketplace designed for buying and selling local farm products.",
        status: "Active",
        image: "/TheLocalHarvest.png",
        techStack: ["Java", "Firebase", "Google Maps API"],
    },
    {
        title: "Huling Gabi",
        type: "Roblox Game",
        description: "A local-themed Roblox experience with immersive horror gameplay and Filipino folklore elements.",
        status: "In Progress",
        techStack: ["Lua", "Roblox Studio"],
    },

];

export function Projects() {
    return (
        <SectionWrapper id="projects" className="py-12 md:py-16 bg-muted/30 border-t border-border">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight">Recent Projects</h2>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border bg-border gap-px rounded-sm overflow-hidden">
                {projects.map((project, index) => {
                    const CardContent = (
                        <>
                            {project.image && (
                                <div className="aspect-video w-full rounded overflow-hidden mb-4 border border-border bg-muted relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover ${project.title === "The Local Harvest" ? "object-center" : "object-top"} hover:scale-105 transition-transform duration-500`}
                                    />
                                </div>
                            )}

                            <div className="flex justify-between items-start gap-4 mb-3">
                                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                {project.link && (
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                                )}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            {project.techStack && project.techStack.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono font-medium text-primary/80 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border">
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted px-2 py-1 rounded inline-block">
                                    {project.type}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted px-2 py-1 rounded inline-block">
                                    {project.status}
                                </span>
                            </div>
                        </>
                    );

                    return (
                        <FadeIn key={index} className="bg-card flex flex-col group hover:bg-muted/50 transition-colors h-full">
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-5 md:p-6 flex flex-col flex-grow cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                                    {CardContent}
                                </a>
                            ) : (
                                <div className="p-5 md:p-6 flex flex-col flex-grow">
                                    {CardContent}
                                </div>
                            )}
                        </FadeIn>
                    );
                })}
            </StaggerContainer>
        </SectionWrapper>
    );
}