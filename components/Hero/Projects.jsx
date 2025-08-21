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
                <Box id="Odliczamydo.pl" thumbnail="odliczamydo-pl" website_url="https://odliczamydo.pl" stack={["html", "css", "js"]} />
                <Box id="Klubuntu | Two Sides" thumbnail="klubuntu-eu-org" website_url="https://klubuntu.eu.org" source_url="https://github.com/Klubuntu/klubuntu.social" stack={["html", "css", "js"]} />
                <Box id="OnerOS Web" thumbnail="oneros-web" website_url="https://oneros.in" source_url="https://github.com/orgs/OnerOS-Project/repositories" stack={["html", "css", "js", "react"]} />
                <Box id="Chestdrop" thumbnail="chestdrop" website_url="https://chestdrop.online" stack={["react", "css", "js"]}/>
                <Box id="MVList" thumbnail="mvlist" website_url="https://archived-projects.kbdev.run/mvlist" source_url="https://github.com/klubuntu-backup1/mvlist" stack={["css", "js", "php"]} />
                <Box id="OneMyList" thumbnail="one-my-list" website_url="https://archived-projects.kbdev.run/one-my-list" source_url="" stack={["css", "js", "php"]} />
                <Box id="Powrot RoxMb" thumbnail="powrot-roxmb" website_url="https://archived-projects.kbdev.run/events/powrotroxmb" source_url="https://github.com/klubuntu-backup1/events-powrotroxmb" stack={["html", "css", "js"]} />
                <Box id="Countdown Web" thumbnail="countdown-web" website_url="https://archived-projects.kbdev.run/events/countdown" source_url="https://github.com/klubuntu-backup1/events-odometer" stack={["html", "css", "js"]} />
                <Box id="Reqqel.music" thumbnail="reqqel-music" website_url="https://archived-projects.kbdev.run/orders/reqqel-music" stack={["html", "css", "js"]} />
                <Box id="Clouds network" thumbnail="clouds-network" website_url="https://archived-projects.kbdev.run/puri-devs/clouds-network" source_url="https://github.com/Puri-Devs/clouds-network-site" stack={["html", "css", "js"]} />
            </div>

        </section>
    )
} 
