import myPhoto from "./sur_burea.jpg";
import mobilePhoto from "./sur_burea_mobile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image src={myPhoto} alt="Ma photo"
        fill
        className="hidden sm:block object-cover"
      />
      <Image src={mobilePhoto} alt="My photo"
        fill
        className="block sm:hidden object-cover"
      />
      <div className="absolute inset-0 w-full h-screen bg-arriere bg-opacity-80"/>
      <div className="absolute top-1/2 left1/2 w-full">
        <h2 className="text-l text-center">{"Hello, I'm Mirindra"}</h2>
        <h1 className="text-xl sm:text-3xl text-center">Fullstack web developer<br/>{"\u0026"}<br/>Electronics engineer and automation</h1>
      </div>
    </div>
  );
}
