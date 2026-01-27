import ProjectCard from "../Projects/ProjectCard"
import { ScrollReveal } from "../AnimationUtils"
import { useLanguage } from "../../contexts/LanguageContext";

export default function WebsitesFrontend() {
    const { t } = useLanguage();
    
    return (
        <section className="mt-8 grid gap-10 items-center" id="websites-frontend">
            <ScrollReveal>
                <h3 className="text-2xl text-center">
                    {t.projects.subtitle}
                </h3>
            </ScrollReveal>

            <div className="mt-3 w-full flex flex-col items-center gap-3">
                <ProjectCard 
                    id="Odliczamydo.pl" 
                    website_url="https://odliczamydo.pl" 
                    stack={["html", "css", "js"]} 
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
                <ProjectCard 
                    id="Chestdrop" 
                    website_url="https://chestdrop.online" 
                    stack={["react", "css", "js"]}
                />
                <ProjectCard 
                    id="MVList" 
                    website_url="https://archived-projects.kbdev.run/mvlist" 
                    source_url="https://github.com/klubuntu-backup1/mvlist" 
                    stack={["css", "js", "php"]} 
                />
                <ProjectCard 
                    id="OneMyList" 
                    website_url="https://archived-projects.kbdev.run/one-my-list" 
                    stack={["css", "js", "php"]} 
                />
                <ProjectCard 
                    id="Powrot RoxMb" 
                    website_url="https://archived-projects.kbdev.run/events/powrotroxmb" 
                    source_url="https://github.com/klubuntu-backup1/events-powrotroxmb" 
                    stack={["html", "css", "js"]} 
                />
                <ProjectCard 
                    id="Countdown Web" 
                    website_url="https://archived-projects.kbdev.run/events/countdown" 
                    source_url="https://github.com/klubuntu-backup1/events-odometer" 
                    stack={["html", "css", "js"]} 
                />
                <ProjectCard 
                    id="Reqqel.music" 
                    website_url="https://archived-projects.kbdev.run/orders/reqqel-music" 
                    stack={["html", "css", "js"]} 
                />
                <ProjectCard 
                    id="Clouds network" 
                    website_url="https://archived-projects.kbdev.run/puri-devs/clouds-network" 
                    source_url="https://github.com/Puri-Devs/clouds-network-site" 
                    stack={["html", "css", "js"]} 
                />
            </div>
        </section>
    )
}
