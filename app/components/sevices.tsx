import { FaLaptopCode, FaPalette, FaTools} from "react-icons/fa";
import {BsLightningChargeFill} from "react-icons/bs";
import {CgWebsite} from "react-icons/cg";
import {TbApi} from "react-icons/tb";
import {GiCircuitry} from "react-icons/gi";
import {VscDatabase} from "react-icons/vsc";
import {PiBrainDuotone} from "react-icons/pi";

export default function Services(){
    return <section id="services" className="flex flex-col justify-center w-full pt-16">
        <h2 className="text-center sm:text-2xl font-bold mb-4">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 justify-items-center gap-4">
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4"><FaLaptopCode className="text-red-500 w-7 h-7"/> Web Application Development</h3>
            </div>
            <div id="card-body">
                <p>
                    I build modern, fast, and scalable web applications using JavaScript technologies
                    . From frontend interfaces to backend APIs, I design complete solutions that deliver
                    great user experiences and reliable performances.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <FaPalette className="text-red-500 w-7 h-7"/>
                    Web Design {"\u0026"} Development</h3>
            </div>
            <div id="card-body">
                <p>
                    I create clean, responsive, and user-friendly websites tailored to yout needs.
                    Whether it{`'`}s a business site, personal porfolio, or landing page, I focus on simplicity,
                    clarity, and performance.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <BsLightningChargeFill className="text-red-500 w-7 h-7"/>
                    Real-Time Applications
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I develop real-time features such as live chat, notifications, dashboards and
                    WebSocket-based systems, ensuring smooth communication between users and servers.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <CgWebsite className="text-red-500 w-7 h-7"/>
                    Portfolio {"\u0026"} Personal Websites Creation
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I build modern and visually appealing portfolios to help individuals showcase
                    their skills, projects, and achievements in a professional way.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <TbApi className="text-red-500 w-7 h-7"/>
                    API Development {"\u0026"} Intergration
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I design secure and scalable REST or GraphQL APIs, and integrate third-party
                    services to extend the functionality of your applications.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <GiCircuitry className="text-red-500 w-7 h-7"/>
                    Electronic Systems Design
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I design, prototype and build electronic systems combining sensors, microcontrollers
                    and embedded programming for automation and IoT applications.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <FaTools className="text-red-500 w-7 h-7"/>
                    Technical Maintenace {"\u0026"} Optimization
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I improve existing websites or applications by fixing bugs, optimizing performances,
                    refactoring code, and enhancing secutity and SEO.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <VscDatabase className="text-red-500 w-7 h-7"/>
                    Database Management {"\u0026"} Optimization
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I design, optimize, and maintain databases to ensure reliability, performance,
                    and data integrity.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        <div className="flex flex-col rounded-lg divide-y 
        divide-gray-300 p-4 shadow-inner shadow-blue-900 hover:shadow-lg hover:shadow-blue-900
        bg-gradient-to-b from-arriere via-arriere via-arriere to-blue-900">
            <div id="card-header" className="w-full mx-auto">
                <h3 className="flex items-center gap-4">
                    <PiBrainDuotone className="text-red-500 w-7 h-7"/>
                    AI API Integration
                </h3>
            </div>
            <div id="card-body">
                <p>
                    I integrate AI-powered features using modern AI APIs to enhance your applications
                    with intelligent capabilities.
                </p>
            </div>
            <div id="card-footer">
                <button>learn more...</button>
            </div>
        </div>
        </div>
    </section>
}