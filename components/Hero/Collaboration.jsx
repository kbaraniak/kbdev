export default function Collaboration() {
    return (
        <section className="mt-22 grid gap-10 items-center" id="collaboration">
            <h2 className="text-4xl font-bold text-center">
                Collaboration
            </h2>
            <div className="flex items-center justify-center">
                <a href="https://github.com/klubuntu">
                    <div className="mt-3 mx-2 w-60 h-20 bg-red-700 rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <p className="text-xl">Klubuntu (Projects)</p>
                    </div>
                </a>
                <a href="https://github.com/Puri-Devs">
                    <div className="mt-3 mx-2 w-60 h-20 bg-blue-700 rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <p className="text-2xl">Puri Devs</p>
                    </div>
                </a>
                <a href="https://itvt.xyz">
                    <div className="mt-3 mx-2 w-60 h-20 bg-lime-900 rounded-md text-center flex items-center justify-center hover:opacity-70 transition-opacity">
                        <p className="text-3xl">iTVT</p>
                    </div>
                </a> 
            </div>
        </section>
    )
} 
