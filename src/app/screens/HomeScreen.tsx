import { ChartNoAxesColumnIncreasing, Target, Sprout } from "lucide-react"
import Link from "next/link";

export default function HomeScreen() {

    const config = [
        {
            icon: <ChartNoAxesColumnIncreasing color={"#00834C"} size={30}/>,
            text: "Track your spending"
        },
        {
            icon: <Target color={"#00834C"} size={30}/>,
            text: "Set realistic budgets"
        },
        {
            icon: <Sprout color={"#00834C"} size={30}/>,
            text: "Reach your goals"
        }
    ]

    return (
        <div className="p-16 min-h-screen">
            <div className="flex gap-8">
                <h2 className="text-primary-dark font-bold">SPEND SMARTER</h2>
                <h2 className="text-primary-dark font-bold">LIVE BETTER</h2>

            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 mt-4 gap-8 flex flex-col">
                <h1 className="text-7xl font-bold text-primary-text">Take control of your finances</h1>
                <p className="text-2xl text-secondary w-3/4">
                    Track your income, expenses and debt in one place. Build better habits for a brighter tomorrow.
                </p>
                <div className="flex flex-row gap-4 w-3/4 ">
                    <Link
                        href="/signup"
                        className="bg-primary-dark text-white font-bold px-4 py-4 rounded-lg w-1/2 text-center"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/#features"
                        className="bg-surface text-primary-text font-bold px-4 py-4 border border-primary rounded-lg w-1/2 text-center"
                    >
                        Learn More
                    </Link>
                </div> 
                    
            </div>

            <div className="flex flex-row gap-4 mt-26 w-1/2">
                {
                    config.map((item, index) => (
                        <div className="flex flex-row gap-4 items-center w-1/3" key={index}>
                            <div className="bg-icon-green-light rounded-full p-4 ">
                                {item.icon}
                            </div>
                            <p className="text-primary-text text-lg">{item.text}</p>
                        </div>

                    ))
                }
            </div>

        </div>
        
    )
}