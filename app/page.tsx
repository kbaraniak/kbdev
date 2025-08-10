import NavMenu from "../components/NavMenu";
import AboutMe from "../components/Hero/AboutMe";
import Projects from '../components/Hero/Projects';
import Collaboration from "../components/Hero/Collaboration";
import Support from "../components/Hero/Support";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="flex gap-[32px] row-start-2 items-center py-5 px-4">
        <h2 className="text-4xl text-bold">kbdev</h2>
        <NavMenu />
        <p className="text-3xl">...</p>
      </div>
      <main className="mt-10">
        <AboutMe />
        <Projects />
        <Collaboration />
        <Support />
      </main>
    </div>
  );
}
