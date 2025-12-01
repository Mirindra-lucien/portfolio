import { FaTools, FaCode, FaCogs, FaUsers } from "react-icons/fa"

export default function Projects(){
    return <section id="skills" className="container w-screen pt-16 mx-auto">
        <h2 className="flex w-full justify-center sm:text-2xl font-bold">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col p-4">
            <div>
                <h3 className="flex gap-2 text-lg sm:text-xl font-bold">
                    <FaCogs className="text-blue-600 w-7 h-7"/>
                    Technical skills
                </h3>
            </div>
            <div>
                <ul className="text-sm sm:text-base list-disc ml-6">
                    <li>
                        <span>Frontend : </span>
                        HTML5, CSS3, JavaScript ES6+, TypeScript, React, Vue, Next, Redux, Bootstrap,
                        Tailwind CSS, Material UI
                    </li>
                    <li>
                        <span>Backend : </span>
                        Node, Express, Adonis, PHP, Laravel, Symfony
                    </li>
                    <li>
                        <span>Databases : </span>
                        MongoDB, MySQL, PostgreSQL, SQL Server, Mongoose
                    </li>
                    <li>
                        <span>APIs : </span>
                        REST API, GraphQL, Websockets, Socket.io
                    </li>
                    <li>
                        <span>AI Integration : </span>
                        OpenAI API, Google Gemini, Hugging Face APIs
                    </li>
                    <li>
                        <span>IoT {"\u0026"} Embedded Systems : </span>
                        ESP32, PLD, PIC, Arduino, Proteus, Kicad, MATLAB
                    </li>
                    <li>
                        <span>Energy {"\u0026"} Simulation : </span>
                        PVsyst, MATLAB
                    </li>
                    <li>
                        <span>Devops tools : </span>
                        GCP, AWS, Git, GitHub, Docker, Kubernetes
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col p-4">
            <div>
                <h3 className="flex gap-2 sm:text-xl text-lg font-bold">
                    <FaCode className="text-blue-600 w-7 h-7"/>
                    Development skills
                </h3>
            </div>
            <div>
                <ul className="text-sm sm:text-base list-disc ml-6">
                    <li>Fullstack JavaScript and PHP development</li>
                    <li>Building real-time applications</li>
                    <li>API development and third-party integration</li>
                    <li>Database modeling, optimization and maintenance</li>
                    <li>Authentication and security(JWT, sessions)</li>
                    <li>MVC architecture(PHP/Node.js/Java)</li>
                    <li>Responsive and mobile-first design</li>
                    <li>SEO optimization and performance tuning</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col p-4">
            <div>
                <h3 className="flex gap-2 text-lg sm:text-xl font-bold">
                    <FaTools className="text-blue-600 w-7 h-7"/>
                    Tools {"\u0026"} Technologies
                </h3>
            </div>
            <div>
                <ul className="text-sm sm:text-base list-disc ml-6">
                    <li>Git, Github</li>
                    <li>Webpack, NPM</li>
                    <li>Linux(CentOS, Ubuntu, Debian, Kali)</li>
                    <li>Postman, VS Code</li>
                    <li>Figma, Photoshop, Adobe Illustrator, Adobe xd</li>
                    <li>Apache, Nginx</li>
                    <li>BIRT Eclipse, Excel, Power BI</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col p-4">
            <div>
                <h3 className="flex gap-2 text-lg sm:text-xl font-bold">
                    <FaUsers className="text-blue-600 w-7 h-7"/>
                    Soft Skills
                </h3>
            </div>
            <div>
                <ul className="text-sm sm:text-base list-disc ml-6">
                    <li>Problem-solving and analytical thinking</li>
                    <li>Adaptability and quick learning</li>
                    <li>Clear Communication</li>
                    <li>Teamwork and Collaboration</li>
                    <li>Project organization and time management</li>
                    <li>Client-focused mindset</li>
                </ul>
            </div>
        </div>
    </div>
    </section>
}