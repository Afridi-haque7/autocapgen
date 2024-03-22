export default function ContactForm() {
    return (
        <>
            <form action="" className="bg-slate-100 text-indigo-900
            flex flex-col gap-2 my-5 mx-10 sm:mx-2 px-10 py-10 rounded-2xl
            shadow-xl border-black">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <h1 className="text-sm">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</h1>
                </div>
                <div className="">
                    <label htmlFor="name" className="text-lg font-semibold text-indigo-800/80">
                    Name </label>
                    <input type="text" id="name" placeholder="John Doe" 
                    className="border-indigo-600/50 border-2 w-full p-2 rounded-lg"
                    required />
                </div>
                <div>
                    <label htmlFor="email" className="text-lg font-semibold text-indigo-800/80">Email </label>
                    <input type="email" id="email" placeholder="johndoe@yahoo.com"
                    className="border-indigo-600/50 border-2 w-full p-2 rounded-lg" required />
                </div>
                <div>
                    <label htmlFor="message" className="text-lg font-semibold text-indigo-800/80">Message </label>
                    <textarea id="message" cols="20" rows="5"
                    className="border-indigo-600/50 border-2 w-full p-2 rounded-lg"></textarea>
                </div>
                <div className="text-center mt-2">
                    <label htmlFor="" className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
                    p-1 rounded-full cursor-pointer font-semibold text-lg">
                        <button className="bg-white text-indigo-600 rounded-full px-4 
                        hover:bg-transparent hover:text-white transition">Contact</button>
                    </label>
                </div>
            </form>
        </>
    )
}