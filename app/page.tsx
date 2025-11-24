import myPhoto from "./sur_burea.jpg";
import mobilePhoto from "./sur_burea_mobile.jpg";
import Image from "next/image";
import AboutMe from "./components/aboutMe";
import Contacts from './components/contact';
import Services from './components/sevices';
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen">
        <Image src={myPhoto} alt="Ma photo"
          fill
          className="hidden sm:block object-cover"
        />
        <Image src={mobilePhoto} alt="My photo"
          fill
          className="block sm:hidden object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-arriere bg-opacity-80"/>
        <div className="absolute top-1/3 w-full">
          <section>
            <h2 className="text-l text-center text-secondary">{"Hello, I'm Mirindra"}</h2>
            <h1 className="text-xl sm:text-3xl text-center">
              Fullstack web developer<br/>
              {"\u0026"}<br/>Electronics engineer and automation
            </h1>
            <div className="flex justify-center">
              <button className="block border-2 rounded-full border-secondary text-sm md:text-md shadow-md m-2 p-1 px-4 md:px-12
                hover:bg-white-700 transition text-secondary"
              >
                Hire me
              </button>
              <button className="block border-2 rounded-full  text-sm md:text-md m-2 py-1 px-4 md:px-12">
                Resume
              </button>
            </div>
          </section>
        </div>
      </main>
      <AboutMe />
      <Services/>
      <Projects/>
      <Contacts/>
    </>
  );
}
