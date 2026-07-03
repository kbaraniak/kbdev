'use client'
import { useRouter } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";

const caseStudySlugs = {
    'Ba-Car': 'bacar',
    'Klubuntu | Two Sides': 'klubuntu',
    'OnerOS Web': 'oneros',
    'iTVT (Poland)': 'itvt',
    'Odliczamydo.pl': 'odliczamydo',
    'Chestdrop': 'chestdrop',
    'MVList': 'mvlist',
    'OneMyList': 'onemylist',
    'Powrot RoxMb': 'powrot-roxmb',
    'Countdown Web': 'countdown-web',
    'Reqqel.music': 'reqqel-music',
    'Clouds network': 'clouds-network',
};

export default function ProjectCard({ id, website_url, source_url = "", stack=[] }) {
    const { t, language } = useLanguage();
    const router = useRouter();

    const getStackColor = (tech) => {
        const colors = {
            'html': 'bg-orange-700',
            'css': 'bg-blue-500',
            'js': 'bg-yellow-600',
            'typescript': 'bg-blue-600',
            'react': 'bg-cyan-500',
            'astro': 'bg-pink-800',
            'vue': 'bg-emerald-700',
            'php': 'bg-purple-600',
            'python': 'bg-yellow-600',
            'rust': 'bg-orange-700'
        };
        return colors[tech] || 'bg-gray-500';
    };

    const getStackLabel = (tech) => {
        const labels = {
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JS',
            'typescript': 'TS',
            'react': 'React',
            'astro': 'Astro',
            'vue': 'Vue',
            'php': 'PHP',
            'python': 'Python',
            'rust': 'Rust'
        };
        return labels[tech] || tech.toUpperCase();
    };

    const ProjectIcon = ({ id: projectId }) => {
        const icons = {
            'Ba-Car': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 17h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" />
                    <path d="M19 17h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1" />
                    <rect x="3" y="10" width="14" height="7" rx="1" />
                    <circle cx="7" cy="16" r="1.5" />
                    <circle cx="13" cy="16" r="1.5" />
                    <path d="M17 10V7a2 2 0 0 0-2-2H5" />
                </svg>
            ),
            'iTVT (Poland)': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="12" rx="2" />
                    <path d="M12 19v4" />
                    <path d="M8 23h8" />
                    <polygon points="10,11 10,16 15,13.5" />
                </svg>
            ),
            'OnerOS Web': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
                </svg>
            ),
            'Clouds network': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    <path d="M8 12h4" />
                    <path d="M10 10v4" />
                </svg>
            ),
            'Reqqel.music': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                </svg>
            ),
            'Countdown Web': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            ),
            'OneMyList': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 3h16v18H4V3z" />
                    <line x1="8" y1="7" x2="16" y2="7" />
                    <line x1="8" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="12" y2="15" />
                </svg>
            ),
            'MVList': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 5h4v14h-4z" />
                    <path d="M3 8h7v9H3z" />
                    <path d="M14 8h7v9h-7z" />
                    <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
            ),
            'Chestdrop': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M12 12l4-4" />
                    <path d="M12 12l-2 5" />
                </svg>
            ),
            'Odliczamydo.pl': (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <circle cx="12" cy="16" r="3" />
                    <path d="M12 14v2l1 1" />
                </svg>
            ),
        };
        return (
            <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center text-gray-400 font-bold">
                {icons[projectId] || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                )}
            </div>
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mb-4 stagger-item">
            <div 
                className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 rounded-lg smooth-transition hover-lift"
                style={{background: 'rgba(38, 38, 38, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
                <ProjectIcon id={id} />

                {/* Project Name */}
                <div className="flex-grow min-w-[200px]">
                    {caseStudySlugs[id] ? (
                        <button
                            onClick={() => {
                                const prefix = language === 'pl_PL' ? '' : '/en';
                                router.push(`${prefix}/project/${caseStudySlugs[id]}`);
                            }}
                            className="text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer bg-none border-none text-left"
                            type="button"
                        >
                            {id}
                        </button>
                    ) : (
                        <h3 className="text-xl font-semibold text-white">{id}</h3>
                    )}
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 min-w-[200px]">
                    {stack.map((tech, index) => (
                        <span 
                            key={index}
                            className={`${getStackColor(tech)} px-3 py-1 rounded text-white text-sm font-medium`}
                        >
                            {getStackLabel(tech)}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 flex-shrink-0">
                    {website_url && (
                        <button
                            onClick={() => window.open(website_url, '_blank')}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md smooth-transition flex items-center gap-2 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <span className="hidden sm:inline">{t.projects.viewWebsite}</span>
                        </button>
                    )}
                    {source_url && (
                        <button
                            onClick={() => window.open(source_url, '_blank')}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md smooth-transition flex items-center gap-2 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="hidden sm:inline">{t.projects.viewGithub}</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
