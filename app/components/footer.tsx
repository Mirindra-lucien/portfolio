import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa"

export default function footer(){
    return <footer className="container w-screen py-10">
        <div className="w-screen flex justify-center my-3">
            <a href="https://www.linkedin.com/in/mirindra-3b9149276" target="_blank">
                <FaLinkedin className="sm:w-5 sm:h-5"/>
            </a>
            <a href="https://github.com/Mirindra-Lucien" target="_blank">
                <FaGithubSquare className="sm:w-5 sm:h-5"/>
            </a>
            <a href="https://www.facebook.com/mih.19.11" target="_blank">
                <FaFacebookSquare className="sm:w-5 sm:h-5"/>
            </a>
            <a href="https://www.instagram.com/lan.mirindra" target="_blank">
                <FaInstagramSquare className="sm:w-5 sm:h-5"/>
            </a>
        </div>
        <div className="w-screen flex justify-center">
            <p className="text-xs px-4 text-center">
                Copyright &copy; 2025 LANTOSOA Mirindra Lucien. All rights reserved.
            </p>
        </div>
    </footer>
}