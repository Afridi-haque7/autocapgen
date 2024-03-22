


export default function PricingCard({color, plan, caption, price, features }) {
  
    // const router = useRouter();

    // const handleCheckout = () => {
    //   router.push({
    //     pathname: '/checkout',
    //     query: { plan, price }
    //   });
    // };
  
    return (
    <>
      <div
        className="px-4 py-3 shadow-lg shadow-black/80
            sm:px-2 sm:py-2 
             rounded-xl bg-gradient-to-tr from-neutral-50 to-cyan-100"
      >
        <div className={`text-center mb-5 ${color}`}>
          <h1 className="text-3xl font-semibold">{plan}</h1>
          <h3>{caption}</h3>
        </div>

        <div className={`text-center mb-5 ${color}`}>
          <h1 className="text-3xl font-semibold">${price}</h1>
          <p>/mo</p>
        </div>

        <div className="text-center border-b border-black sm:border-none">
        <button 
        className="px-5 py-2 mb-5 text-lg
        rounded-xl bg-blue-800"
        // onClick={handleCheckout}
        >
        Choose</button>
        </div>
        
        <div className={`space-y-1 ${color} sm:hidden`}>
            <h3 className="font-semibold mb-1">All features:</h3>
          {features.map((feature) => (
            <h3 key={feature} className="gap-1">
            <span className="bg-green text-white">&#9989;</span>{feature}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}


// bg-gradient-to-r from-indigo-500 to-blue-500