import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaEnvelope } from "react-icons/fa";

function Contacts(){
    return <section id="contacts" className="flex flex-wrap w-screen pt-16">
        <h2 className="flex w-full justify-center mb-4">Contacts</h2>
        <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2">
            <a href="tel:+261346058262" target="_blank" className="flex flex-col justify-center items-center my-3">
                <button>
                    <FaPhone/>
                </button>
                <p>+261 34 60 582 62</p>
            </a>
            <a className="flex flex-col justify-center items-center my-3" href="mailto:lantosoamirindra@gmail.com" target="_blank">
                <button>
                    <FaEnvelope/>
                </button>
                lantosoamirindra@gmail.com
            </a>
            <a className="flex flex-col justify-center items-center my-3" href="https://wa.me/261346058262?text=Hi%20Mirindra" target="_blank">
                <button>
                    <FaWhatsapp/>
                </button>
                WhatsApp
            </a>
            <a className="flex flex-col justify-center items-center my-3" href="https://m.me/mih.19.11" target="_blank">
                <button>
                    <FaFacebookMessenger/>
                </button>
                Messenger
            </a>
        </div>
        <form className="flex flex-wrap w-full sm:w-1/2 px-4 sm:px-10 md:px-20">
            <label htmlFor="name" className="w-full py-2">Your name</label>
            <input  className="w-full px-5 py-2" type="text" placeholder="Your name" name="name" id="name"/>
            <label  className="w-full py-2" htmlFor="email">Your mail address</label>
            <input  className="w-full px-5 py-2" type="email" name="email" placeholder="example@dom.com" id="email"/>
            <label  className="w-full py-2" htmlFor="message">Message</label>
            <textarea  className="w-full" name="message" id="msg"></textarea>
            <button className="w-full py-4 px-2 border-white-200">Submit</button>
        </form>
    </section>
}

export default Contacts;