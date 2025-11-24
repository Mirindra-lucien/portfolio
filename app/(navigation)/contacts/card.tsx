interface CardProps {
    title?: string;
    contact1?: string;
    contact2?: string;
    icon?: JSX.Element;
}
export default function Card({title, contact1, contact2, icon}: CardProps){
    return <div className="w-full sm:w-1/2 md:w-1/2 bg-gray-100 flex flex-col justify-center shadow-5">
        <div className="text-blue-500 w-full flex flex-col justify-center p-4">
            <div className="w-full flex justify-center">
                {icon}
            </div>
            <h2 className="text-center">{title}</h2>
        </div>
        <div className="text-green-500 w-full flex flex-col justify-center">
            <h2 className="text-center">{contact1}</h2>
            <h2 className="text-center">{contact2}</h2>
        </div>
    </div>
}