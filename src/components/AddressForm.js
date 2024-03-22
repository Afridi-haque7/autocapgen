import Image from "next/image";
import officePic from '../fonts/office.webp';


export default function AddressForm() {
    return (
        <>
            <div className="bg-slate-100 text-indigo-900
            flex flex-col gap-2 my-5 mx-10 sm:mx-2 px-10 py-10 rounded-2xl
            shadow-xl border-black">
                <div className="">
                    <h1 className="text-3xl font-bold mb-2 text-center">Our Office</h1>
                    <h1>2nd Floor, New York Office</h1>
                    <h1>Times Square</h1>
                    <h1>New York</h1>
                    <h1>US, 108921</h1>
                </div>
                <div className="rounded-lg mt-6">
                    <Image 
                        src={officePic}
                        alt="Office Picture"
                    />
                </div>
            </div>
        </>
    )
}