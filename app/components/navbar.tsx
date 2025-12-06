"use client"
import Link from "next/link";
import { Menu , X} from "lucide-react";
import {useState} from "react";
import { FaServicestack, FaUser } from "react-icons/fa";
import {GiSkills} from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
export default function Navbar(){
    const [openDrawer, handleDrawer] = useState<boolean>(false);
    const handleClick = (): void => {
        handleDrawer(!openDrawer);
    }
    const navigationLinks = [
        {href: "/#aboutMe", content: "About me", icon: <FaUser/>},
        {href: "/#services", content: "Services", icon: <FaServicestack/>},
        {href: "/#skills", content: "Skills", icon: <GiSkills/>},
        {href: "/#contacts", content: "Contacts", icon: <RiContactsBookLine/>},
    ]
    return (
        <nav className="relative p-0 w-full">
        {
          openDrawer ? <div className="sm:hidden flex flex-col fixed top-0 left-0 w-screen h-auto z-50 m-0 pt-16 pb-5 bg-background">
            {
              navigationLinks.map((value, index) => (
                <a key={index} href={value.href}
                  className="flex items-center gap-3 w-screen m-1 py-2 px-4 shadow-inner shadow-secondary
                  rounded-md dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-secondary"
                  onClick={handleClick}
                >
                  {value.icon}
                  {value.content}
                </a>
              ))
            }
          </div> : <></>
        }
          
          <div className="fixed top-0 left-0 w-screen bg-third text-white py-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center pl-4 sm:pl-0">
                <Link href="/" className="text-sm sm:text-lg font-bold hover:text-gray-300">Mirindra</Link>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                {
                  navigationLinks.map((value, index) => (
                    <Link key={index} href={value.href} className="active:text-gray-300 hover:text-gray-300">
                      {value.content}
                    </Link>
                  ))
                }
              </div>
              <div className="sm:hidden flex items-center">
                <button className="text-white hover:text-gray-300  pr-4 focus:outline-none">
                  {
                      openDrawer? <X onClick={handleClick}/> : <Menu onClick={handleClick}/>
                  }
                </button>
              </div>
            </div>
          </div>
        </nav>
    )
}