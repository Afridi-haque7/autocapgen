import AddressForm from "@/components/AddressForm";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import contactPic from '../../fonts/Contact-Us.webp';



export default function Contact(){
    return(
        <>
        <div className="">
        <Image
            src={contactPic}
            alt="Contact pic"
        />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 md:px-10 mt-10 mb-32
        sm:">
            <div className="">
                <ContactForm/>
            </div>
            <div>
                <AddressForm/>
            </div>
        </div>
        </>
    )
}