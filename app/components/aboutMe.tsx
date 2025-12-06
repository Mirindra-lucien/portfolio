import {SiReact, SiNodedotjs, SiWebpack, SiRedux, SiMaterialdesignicons, 
SiNextdotjs, SiVuedotjs, SiPhp, SiSymfony, SiLaravel, SiHtml5, SiCss3, SiTailwindcss,
SiBootstrap, SiMysql, SiMongodb, SiMongoose, SiPostgresql, SiJavascript, SiExpress} from "react-icons/si"

function AboutMe(){
    return <section id="aboutMe"
        className="w-screen sm:w-full h-screen flex flex-col items-center justify-center pt-10">
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:gap-3 w-full h-1/4">
            <SiHtml5 className="w-10 h-10"/>
            <SiCss3 className="w-10 h-10"/>
            <SiJavascript className="w-10 h-10"/>
            <SiReact className="w-10 h-10"/>
            <SiVuedotjs className="w-10 h-10"/>
            <SiWebpack className="w-10 h-10"/>
            <SiRedux className="w-10 h-10"/>
            <SiTailwindcss className="w-10 h-10"/>
            <SiBootstrap className="w-10 h-10"/>
            <SiNodedotjs className="w-10 h-10"/>
            <SiMongodb className="w-10 h-10"/>
            <SiMongoose className="w-10 h-10"/>
            <SiMysql className="w-10 h-10"/>
            <SiPostgresql className="w-10 h-10"/>
            <SiSymfony className="w-10 h-10"/>
            <SiLaravel className="w-10 h-10"/>
            <SiPhp className="w-10 h-10"/>
            <SiMaterialdesignicons className="w-10 h-10"/>
            <SiNextdotjs className="w-10 h-10"/>
            <SiExpress className="w-10 h-10"/>
        </div>
        <h2 className="text-center sm:text-2xl font-bold mb-4">About me</h2>
        <div className="flex">
            <div className="flex flex-col sm:hidden pl-2 gap-2">
                <SiJavascript className="w-5 h-5"/>
                <SiReact className="w-5 h-5"/>
                <SiVuedotjs className="w-5 h-5"/>
                <SiTailwindcss className="w-5 h-5"/>
                <SiBootstrap className="w-5 h-5"/>
                <SiNodedotjs className="w-5 h-5"/>
                <SiMongodb className="w-5 h-5"/>
                <SiMysql className="w-5 h-5"/>
                <SiPostgresql className="w-5 h-5"/>
                <SiSymfony className="w-5 h-5"/>
                <SiLaravel className="w-5 h-5"/>
                <SiPhp className="w-5 h-5"/>
                <SiNextdotjs className="w-5 h-5"/>
            </div>
            <p className="text-sm sm:text-base sm:text-justify px-4 sm:px-10 md:px-20">
                I am Mirindra L., a passionate Full Stack develper with a background in Electronics
                and Automation. I specialize in PHP frameworks like Symfony and Laravel, and JavaScript
                technologies including the MERN stack, Vue.js, and Adonis.js. I have experience with databases
                such as MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB, and I build secure and efficient
                APIs using REST and GraphQL. I enjoy creating modern, responsive web applications with clean,
                efficient code, and I use modern tools like Git, Docker and NPM to deliver high-quality projects.
                Always eager to learn and explore nex technologies, I strive to make a meaningful impact through my work.
                </p>
        </div>
        <a href="/Mirindra_cv.pdf" download="Mirindra's CV"
        className="border-2 rounded-full border-foreground m-2 p-1 px-12 hover:bg-foreground hover:shadow-lg hover:shadow-foreground hover:text-background">
            Resume
        </a>
    </section>
}

export default AboutMe;