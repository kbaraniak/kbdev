export default function Support() {
    return (
        <section className="mt-22 mb-10 grid gap-10 items-center" id="support">
            <h2 className="text-4xl font-bold text-center">
                Support Me
            </h2>
            <div className="flex max-md:flex-col items-center justify-center">
                <a href="https://discord.gg/meKqTdUDDm">
                    <div className="mt-3 mx-2 w-60 h-20 bg-[#5865F2] rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                        </svg>
                        <p className="mx-2 text-2xl">Discord Server</p>
                    </div>
                </a>
                <a href="mailto:kbdev@duck.com">
                    <div className="mt-3 mx-2 w-60 h-20 bg-gray-700 rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                        </svg>
                        <p className="mx-1 text-2xl">Contact me</p>
                    </div>
                </a>
                <a href="https://patreon.com/Klubuntu">
                    <div className="mt-3 mx-2 w-60 h-20 bg-red-900 rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2z"></path>
                        </svg>
                        <p className="mx-2 text-3xl">Patreon</p>
                    </div>
                </a> 
            </div>
        </section>
    )
} 
