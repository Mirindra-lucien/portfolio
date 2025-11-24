export default function Projects(){
    return <section id="skills" className="container w-screen pt-16 mx-auto">
        <h2 className="flex w-full justify-center mb-16">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col p-4">
            <div>
                <h3>Technical skills</h3>
            </div>
            <div>
                <ul>
                    <li>
                        <span>Frontend : </span>
                        HTML5, CSS3, JavaScript ES6+, TypeScript, React, Vue, Next, Redux, Bootstrap,
                        Tailwind CSS, Material UI
                    </li>
                    <li>
                        <span>Backend : </span>
                        Node, Express, Adonis, PHP, Laravel, PHP
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
                </ul>
            </div>
        </div>
        <div className="flex flex-col p-4">
            <div>
                <h3>Development skills</h3>
            </div>
            <div>
                <ul>
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
                <h3>Tools {"\u0026"} Technologies</h3>
            </div>
            <div>
                <ul>
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
                <h3>Soft Skills</h3>
            </div>
            <div>
                <ul>
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