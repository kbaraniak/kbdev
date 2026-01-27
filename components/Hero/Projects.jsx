import { ScrollReveal } from "../AnimationUtils"
import { useLanguage } from "../../contexts/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();
    
    return (
        <section className="mt-22 grid gap-10 items-center" id="projects">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center">
                    {t.projects.title}
                </h2>
            </ScrollReveal>

        </section>
    )
} 
