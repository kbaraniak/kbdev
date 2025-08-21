import Box from "../Projects/Box"

export default function Projects() {
    return (
        <section className="mt-22 grid gap-10 items-center" id="projects">
        {/* Left column: vertical heading */}
            <h2 className="text-4xl font-bold text-center">
                My Projects
            </h2>

        {/* Right column: projects flex */}
            <div className="mt-3 flex flex-wrap gap-x-[3px] gap-y-[11px] justify-center">
                <Box id="1" website_url="" source_url="" stack={["react", "typescript"]} />
                <Box id="2" website_url="" source_url="" stack={["css"]} />
                <Box id="3" website_url="" source_url="" stack={["python"]} />
                <Box id="4" website_url="" source_url="" />
                <Box id="5" website_url="" source_url="" />
                <Box id="6" website_url="" source_url="" />
                <Box id="7" website_url="" source_url="" />
                <Box id="8" website_url="" source_url="" />
                <Box id="9" website_url="" source_url="" />
            </div>

        </section>
    )
} 
