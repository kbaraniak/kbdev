'use client'

export default function ProjectCard({ id, website_url, source_url = "", stack=[] }) {
    const getStackColor = (tech) => {
        const colors = {
            'html': 'bg-orange-700',
            'css': 'bg-blue-500',
            'js': 'bg-yellow-600',
            'typescript': 'bg-blue-600',
            'react': 'bg-cyan-500',
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
            'php': 'PHP',
            'python': 'Python',
            'rust': 'Rust'
        };
        return labels[tech] || tech.toUpperCase();
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mb-4 stagger-item">
            <div 
                className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 rounded-lg smooth-transition hover-lift"
                style={{background: 'rgba(38, 38, 38, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)'}}
            >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center text-gray-400 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                </div>

                {/* Project Name */}
                <div className="flex-grow min-w-[200px]">
                    <h3 className="text-xl font-semibold text-white">{id}</h3>
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
                            <span className="hidden sm:inline">WEBSITE</span>
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
                            <span className="hidden sm:inline">GITHUB</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
