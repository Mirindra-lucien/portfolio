function AboutMe(){
    return <section id="aboutMe" className="w-screen sm:h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="text-center">About me</h2>
        <p className="text-center px-4 sm:px-10 md:px-20">
            I am Mirindra L., a passionate Full Stack develper with a background in Electronics
            and Automation. I specialize in PHP frameworks like Symfony and Laravel, and JavaScript
            technologies including the MERN stack, Vue.js, and Adonis.js. I have experience with databases
            such as MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB, and I build secure and efficient
            APIs using REST and GraphQL. I enjoy creating modern, responsive web applications with clean,
            efficient code, and I use modern tools like Git, Docker and NPM to deliver high-quality projects.
            Always eager to learn and explore nex technologies, I strive to make a meaningful impact through my work.
        </p>
        <button className="border-2 rounded-full m-2 p-1 px-12">
            Resume
        </button>
    </section>
}

export default AboutMe;