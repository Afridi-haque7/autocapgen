import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";


const pricingArr = [
    {
        color: "bg-gradient-to-t from-slate-600 to-cyan-900 bg-clip-text text-transparent",
        plan: "Basic",
        caption: "Best for Beginners",
        price: 5,
        features: [
            "30 minutes of caption generating",
            "Max 720p video quality",
            "Max size of 50MB",
        ]
    },
    {
        color: "bg-gradient-to-t from-amber-600 to-stone-500 bg-clip-text text-transparent",
        plan: "Standard",
        caption: "Best for Developers",
        price: 10,
        features: [
            "50 minutes of caption generating",
            "Max 1080p video quality",
            "Max size of 100MB"
        ]
    },
    {
        color: "bg-gradient-to-t from-violet-800 to-teal-500 bg-clip-text text-transparent",
        plan: "Premium",
        caption: "Best for Creators",
        price: 18,
        features: [
            "90 minutes of caption generating",
            "Max 2K video quality",
            "Max size of 250MB",
            "Customer support assistance"
        ]
    }
];

export default function Pricing(){
    
    return(
        <>
        <div className="text-center mb-2 mt-10">
            <h1 className="font-semibold text-2xl">Pricing</h1>
            <h1>Choose the best plan for your need</h1>
        </div>
        <div className="min-h-[450px] flex justify-evenly mb-20 mt-10
        sm:flex-col sm:gap-10 sm:m-4 sm:mb-20">
            {pricingArr.map((pricingItem, index) => (
                <PricingCard
                    key={index} // Assuming each pricing item is unique, you can use index as the key
                    color={pricingItem.color}
                    plan={pricingItem.plan}
                    caption={pricingItem.caption}
                    price={pricingItem.price}
                    features={pricingItem.features}
                />
            ))}
        </div>
        </>
    )
}