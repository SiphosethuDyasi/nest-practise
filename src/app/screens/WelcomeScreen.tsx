import PageContainer from "../components/pageContainer";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Target, Sprout } from "lucide-react"

export default function WelcomeScreen() {
    return (
        <PageContainer>

            {/* Navigation bar */}
            <div className="flex flex-row bg-surface rounded-lg p-4 justify-between pl-8 m-6">

                {/* Logo with text*/}
                <div className="flex items-center gap-2">
                    <Image src="/finora-mark.png" alt="Welcome" width={40} height={40}/>
                    <h1 className="text-2xl font-bold">Finora</h1>
                </div>

                {/* Menu Options */}
                <div className="flex items-center gap-10">
                    <button className="text-primary-text p-2 hover:border-b border-primary">Home</button>
                    <button className="text-primary-text p-2 hover:border-b border-primary">Features</button>
                    <button className="text-primary-text p-2 hover:border-b border-primary">About</button>
                </div>

                {/* Menu Buttons Options */}
                <div className="flex items-center gap-2">
                    <button className="bg-surface text-primary-text px-6 py-2 border border-primary  rounded-lg">Log in</button>
                    <button className="bg-primary-dark text-white px-6 py-2 rounded-lg ml-2">Get Started</button>
                </div>
            </div>

            {/* Home content */}
            <div 
                className="
                    p-16
           
                    min-h-screen

                "
            >
                <div className="flex gap-8">
                    <h2 className="text-primary-dark font-bold">SPEND SMARTER</h2>
                    <h2 className="text-primary-dark font-bold">LIVE BETTER</h2>

                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 mt-4 gap-8 flex flex-col">
                    <h1 className="text-7xl font-bold text-primary-text">Take control of your finances</h1>
                    <p className="text-lg text-secondary w-3/4">
                        Track your income, expenses and debt in one place. Build better habits for a brighter tomorrow.
                    </p>
                    <div className="flex flex-row gap-4 w-3/4">
                        <button className="bg-primary-dark text-white font-bold px-4 py-4 rounded-lg w-1/2">Get Started</button>
                        <button className="bg-surface text-primary-text font-bold px-4 py-4 border border-primary rounded-lg w-1/2">Learn More</button>
                        
                    </div> 
                    
                </div>

                <div className="flex flex-row gap-4 mt-26 w-1/2">
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-light rounded-full p-4 ">
                            <ChartNoAxesColumnIncreasing color={"#163D2C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Track your spending</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-light rounded-full p-4 ">
                            <Target color={"#163D2C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Set realistic budgets</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-light rounded-full p-4 ">
                            <Sprout color={"#163D2C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Reach your goals</p>
                    </div>
                </div>

                

            </div>


        </PageContainer>
    )
}