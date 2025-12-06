import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaEnvelope } from "react-icons/fa";

function Contacts(){
    return <section id="contacts" className="flex flex-wrap w-screen pt-16">
        <h2 className="flex w-full justify-center sm:text-2xl font-bold mb-4">Contacts</h2>
        <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <a href="tel:+261346058262" target="_blank"
                className="flex flex-col justify-center items-center my-2 p-4 rounded-md shadow-inner shadow-secondary
                dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-secondary
                hover:shadow-lg hover:shadow-secondary"
            >
                <button>
                    <FaPhone/>
                </button>
                <p className="text-center text-xs sm:text-sm px-2 sm:px-4">+261 34 60 582 62</p>
            </a>
            <a className="flex flex-col justify-center items-center my-2 p-4 rounded-md shadow-inner shadow-secondary
            dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-secondary
            hover:shadow-lg hover:shadow-secondary"
            href="mailto:lantosoamirindra@gmail.com" target="_blank">
                <button>
                    <FaEnvelope/>
                </button>
                <p className="block sm:hidden md:block text-center text-xs sm:text-sm px-2 sm:px-4">lantosoamirindra@gmail.com</p>
                <p className="hidden sm:block md:hidden text-center text-xs sm:text-sm px-2 sm:px-4">lantosoamirindra
                @gmail.com</p>
            </a>
            <a className="flex flex-col justify-center items-center my-2 p-4 rounded-md shadow-inner shadow-secondary
            dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-secondary
            hover:shadow-lg hover:shadow-secondary"
            href="https://wa.me/261346058262?text=Hi%20Mirindra" target="_blank">
                <button>
                    <FaWhatsapp/>
                </button>
                <p className="text-center text-xs sm:text-sm px-2 sm:px-4">WhatsApp</p>
            </a>
            <a className="flex flex-col justify-center items-center my-2 p-4 rounded-md shadow-inner shadow-secondary
            dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-secondary
            hover:shadow-lg hover:shadow-secondary"
             href="https://m.me/mih.19.11" target="_blank">
                <button>
                    <FaFacebookMessenger/>
                </button>
                <p className="text-center text-xs sm:text-sm px-2 sm:px-4">Messenger</p>
            </a>
        </div>
        <form className="flex flex-wrap w-full sm:w-1/2 px-4 sm:px-10 md:px-20">
            <label htmlFor="name" className="w-full py-2 text-sm">Your name</label>
            <input className="w-full px-5 py-2 rounded-md" type="text" placeholder="Your name" name="name" id="name"/>
            <label htmlFor="email" className="w-full py-2 text-sm">Your mail address</label>
            <input  className="w-full px-5 py-2 rounded-md" type="email" name="email" placeholder="example@dom.com" id="email"/>
            <label htmlFor="message"  className="w-full py-2 text-sm">Message</label>
            <textarea  className="w-full rounded-md" name="message" id="message"></textarea>
            <button aria-label="submit" className="w-full my-2 py-2 px-2 bg-foreground text-background border border-foreground rounded-md hover:shadow-lg hover:shadow-foreground">Submit</button>
        </form>
    </section>
}

export default Contacts;