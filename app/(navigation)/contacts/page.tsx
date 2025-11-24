import Card from "./card";
import { MapPin, Phone, Mail, PhoneIcon} from "lucide-react";


export default function Home() {
    return (
      <div className="w-full h-sreen justify-items-center items-center mt-20">
        <main className="flex flex-wrap justify-items-center items-center md:w-1/2">
            <Card  title="Addresses" contact1="CUR Vontovorona" contact2="Ambatolampy"
              icon={<MapPin color="red" width={50} height={50}/>}
            />
            <Card  title="Téléphones" contact1="+261 346058262" contact2="+261 339330028"
              icon={<Phone color="red" width={50} height={50}/>}
            />
            <Card  title="Email" contact1="lantosoamirindra@gmail.com"
              icon={<Mail color="red" width={50} height={50}/>}
            />
            <Card  title="Whatsapp" contact1="0346058262"
              icon={<PhoneIcon color="red" width={50} height={50}/>}
            />
        </main>
      </div>
    );
}