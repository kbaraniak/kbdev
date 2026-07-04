import Image from "next/legacy/image";
import { ScrollReveal } from "../AnimationUtils";
import { useLanguage } from "../../contexts/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();
  
  return (
    <section className="mt-3 min-w-[350px] flex flex-col justify-center items-center relative z-0" id="aboutme">
      <ScrollReveal>
        <h2 className="text-4xl font-bold">{t.aboutMe.title}</h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6 p-6 max-md:mx-4 rounded-lg max-w-4xl w-full relative z-0" style={{background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <div className="w-[125px] h-[125px] min-w-[125px] md:w-[175px] md:h-[175px] md:min-w-[175px] relative z-0 rounded-full overflow-hidden bg-gray-500 flex items-center justify-center hover-scale">
            {/* Next.js Image with full size and rounded */}
            <Image
              src="https://www.gravatar.com/avatar/4a7d1ed414474e4033ac29ccb8653d9b?s=200&d=identicon"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
          <div className="max-md:text-center text-xl leading-relaxed">
            <p className="animate-fade-in-left delay-300">{t.aboutMe.greeting}</p>
            <p className="animate-fade-in-left delay-400">{t.aboutMe.age}</p>
            <p className="animate-fade-in-left delay-500">{t.aboutMe.passion}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-base text-gray-400 animate-fade-in-left delay-500 max-md:text-center">
          <span className="flex items-center gap-1.5 max-md:flex-col max-md:items-center max-md:max-w-[310px]">
            <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            {t.aboutMe.stats}
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
