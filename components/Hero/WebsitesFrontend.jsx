import ProjectCard from "../Projects/ProjectCard"
import { ScrollReveal } from "../AnimationUtils"
import { useLanguage } from "../../contexts/LanguageContext";
import { useRouter } from "next/navigation";

export default function WebsitesFrontend() {
    const { t, language } = useLanguage();
    const router = useRouter();

    const handleArchive = () => {
        const url = language === 'pl_PL' ? '/archive' : '/en/archive';
        router.push(url);
    };

    return (
        <section className="mt-8 grid gap-10 items-center" id="websites-frontend">
            <ScrollReveal>
                <h3 className="text-2xl text-center">
                    {t.projects.subtitle}
                </h3>
            </ScrollReveal>

            <div className="mt-3 w-full flex flex-col items-center gap-3">
                <ProjectCard 
                    id="Ba-Car" 
                    website_url="https://ba-car.pl" 
                    stack={["html", "css", "astro"]} 
                />
                <ProjectCard 
                    id="Klubuntu | Two Sides" 
                    website_url="https://klubuntu.eu.org" 
                    source_url="https://github.com/Klubuntu/klubuntu.social" 
                    stack={["html", "css", "js"]} 
                />
                <ProjectCard 
                    id="OnerOS Web" 
                    website_url="https://oneros.in" 
                    source_url="https://github.com/orgs/OnerOS-Project/repositories" 
                    stack={["html", "css", "js", "react"]} 
                />
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={handleArchive}
                    className="text-lg text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none"
                    type="button"
                >
                    {t.projects.archiveLink}
                </button>
            </div>
        </section>
    )
}
