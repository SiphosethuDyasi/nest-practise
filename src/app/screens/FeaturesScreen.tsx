import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Target, Wallet, HandCoins, Bell, Users } from "lucide-react"

export default function FeaturesScreen() {
    const features = [
        {
            icon: <Wallet color={"#00834C"} size={30}/>,
            title: "Track income and expenses",
            description: "Keep a clear record of where your money comes from and where it goes",
            backgroundColor: "bg-icon-green-light"
        },
        {
            icon: <Target color={"#E60023"} size={30}/>,
            title: "Set budgets",
            description: "Create category budgets and stay on track each month.", 
            backgroundColor: "bg-icon-red-light"        
        },
        {
            icon: <HandCoins color={"#E87900"} size={30}/>,
            title: "Manage debts",
            description: "Track balances, interest rates, and repayment process.",
            backgroundColor: "bg-icon-orange-light"        
        },
        {
            icon: <ChartNoAxesColumnIncreasing color={"#304DE0"} size={30}/>,
            title: "Visualise your progress",
            description: "Easy-to-read charts and summaries to see the bigger picture.", 
            backgroundColor: "bg-icon-blue-light"        
        }, 
        {
            icon: <Bell color={"#E87900"} size={30}/>,
            title: "Get insights",
            description: "Understand your spending habits and make smarter choices.",
            backgroundColor: "bg-icon-orange-light"
        },
        {
            icon: <Users color={"#8128D6"} size={30}/>,
            title: "Build for your goals",
            description: "Whether its paying off debt or saving more, Finora grows with you.",
            backgroundColor: "bg-icon-purple-light"
        }
    ]
    return (
        <section id="features"className="p-16">
            <div className="flex flex-row gap-2 justify-between items-center">
                <Image src="/illustrations/smallSteps.png" alt="Small Steps" width={400} height={300}/>
                <div className="flex flex-col items-end gap-4">
                    <h2 className="text-2xl font-bold text-icon-green bg-light rounded-full py-3 px-6">FEATURES</h2>
                    <h1 className="text-7xl font-bold text-primary-text text-right">Everything you need to manage your finances</h1>
                    <p className="text-2xl text-right text-secondary w-3/4">Simple tools to help you understand your money, make better decisions and work towards your goals</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 justify-between mt-16 ">
                {
                    features.map((feature, index) => (
                        <div className="flex flex-col bg-surface p-6 rounded-2xl" key={index}>
                            <div className={feature.backgroundColor + " rounded-xl p-3  self-start"}>
                                {feature.icon}
                            </div>
                            <p className="text-lg font-bold text-primary-text mt-4">{feature.title}</p>
                            <p className="text-secondary text-lg mt-2">{feature.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>

    )

}