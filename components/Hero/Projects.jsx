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
                <Box id="Odliczamydo.pl" thumbnail="" website_url="" source_url="" stack={["react", "typescript"]} />
                <Box id="Klubuntu | Two Sides" website_url="" source_url="" stack={["css"]} />
                <Box id="OnerOS Web" website_url="" source_url="" stack={["python"]} />
                <Box id="Chestdrop" website_url="" source_url="" />
                <Box id="MVList" website_url="" source_url="" />
                <Box id="MyOneList" website_url="" source_url="" />
                <Box id="Powrot RoxMb" website_url="" source_url="" />
                <Box id="Countdown Web" website_url="" source_url="" />
                <Box id="Reqqel.music" website_url="" source_url="" />
                <Box id="Clouds network" website_url="" source_url="" />
            </div>

        </section>
    )
} 
