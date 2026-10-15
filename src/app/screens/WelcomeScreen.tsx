import PageContainer from "../components/pageContainer";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Target, Sprout, Wallet, HandCoins, Bell, Users, Heart } from "lucide-react"

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
                    <p className="text-2xl text-secondary w-3/4">
                        Track your income, expenses and debt in one place. Build better habits for a brighter tomorrow.
                    </p>
                    <div className="flex flex-row gap-4 w-3/4">
                        <button className="bg-primary-dark text-white font-bold px-4 py-4 rounded-lg w-1/2">Get Started</button>
                        <button className="bg-surface text-primary-text font-bold px-4 py-4 border border-primary rounded-lg w-1/2">Learn More</button>
                        
                    </div> 
                    
                </div>

                <div className="flex flex-row gap-4 mt-26 w-1/2">
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-icon-green-light rounded-full p-4 ">
                            <ChartNoAxesColumnIncreasing color={"#00834C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Track your spending</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-icon-green-light rounded-full p-4 ">
                            <Target color={"#00834C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Set realistic budgets</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center w-1/3">
                        <div className="bg-icon-green-light rounded-full p-4 ">
                            <Sprout color={"#00834C"} size={30}/>
                        </div>
                        <p className="text-primary-text text-lg">Reach your goals</p>
                    </div>
                </div>

                

            </div>

            {/* Features content */}
            <div className="p-16">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <Image src="/illustrations/smallSteps.png" alt="Small Steps" width={400} height={300}/>
                    <div className="flex flex-col items-end gap-4">
                        <h2 className="text-2xl font-bold text-icon-green bg-light rounded-full py-3 px-6">FEATURES</h2>
                        <h1 className="text-7xl font-bold text-primary-text text-right">Everything you need to manage your finances</h1>
                        <p className="text-2xl text-right text-secondary w-3/4">Simple tools to help you understand your money, make better decisions and work towards your goals</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 justify-between mt-16 ">
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-green-light rounded-xl p-3  self-start">
                            <Wallet color={"#00834C"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Track income and expenses</p>
                        <p className="text-secondary text-lg mt-2">Keep a clear record of where your money comes from and where it goes</p>

                    </div>
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-red-light rounded-xl p-3 self-start">
                            <Target color={"#E60023"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Set budgets</p>
                        <p className="text-secondary text-lg mt-2">Create category budgets and stay on track each month.</p>

                    </div>
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-orange-light rounded-xl p-3 self-start">
                            <HandCoins color={"#E87900"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Manage debts</p>
                        <p className="text-secondary text-lg mt-2">Track balances, interest rates, and repayment process.</p>

                    </div>
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-blue-light rounded-xl p-3 self-start">
                            <ChartNoAxesColumnIncreasing color={"#304DE0"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Visualise your progress</p>
                        <p className="text-secondary text-lg mt-2">Easy-to-read charts and summaries to see the bigger picture.</p>

                    </div>
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-orange-light rounded-xl p-3 self-start">
                            <Bell color={"#E87900"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Get insights</p>
                        <p className="text-secondary text-lg mt-2">Understand your spending habits and make smarter choices.</p>

                    </div>
                    <div className="flex flex-col bg-surface p-6 rounded-2xl">
                        <div className="bg-icon-purple-light rounded-xl p-3 self-start">
                            <Users color={"#8128D6"} size={30}/>
                        </div>
                        <p className="text-lg font-bold text-primary-text mt-4">Build for your goals</p>
                        <p className="text-secondary text-lg mt-2">Whether its paying off debt or saving more, Finora grows with you.</p>

                    </div>
                    



                </div>
                    

                    
       
                

            </div>

            {/* About content */}
            <div className="p-16
                    grid grid-cols-2 gap-32 justify-between items-end
                    min-h-screen
                    bg-[url('/illustrations/hero-leaves.svg')]
                    bg-no-repeat

                    md:bg-[length:350px_auto]
                    md:bg-[position:-100px_center]

                    lg:bg-[length:1200px_auto]
                    lg:bg-[position:300px_150px]"
            >
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-bold text-icon-green bg-light rounded-full py-3 px-6">ABOUT FINORA</h2>
                    <h1 className="text-7xl font-bold text-primary-text ">A simpler, more intentional way to manage your money</h1>
                    <p className="text-2xl text-secondary w-3/4">Finora was built to help you take control of your finances. Whether you are looking to budget better, pay off debt or simply understand your spending, Finora gives you the tools to make it happen.</p>
                </div>
                <div className="flex flex-col bg-surface p-14 justify-between rounded-2xl h-5/6">
                    <div className="flex flex-row gap-8  justify-center items-center">
                        <div className="bg-icon-green-light rounded-3xl p-4">
                            <Heart color={"#00834C"} size={60}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-primary-text">Built for real life</p>
                            <p className="text-secondary text-xl mt-2">Simple and practival tools that fit into your everyday routine</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 justify-center items-center">
                        <div className="bg-icon-green-light rounded-3xl p-4">
                            <Users color={"#00834C"} size={60}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-primary-text">Your goals, your journey</p>
                            <p className="text-secondary text-xl mt-2">Whether its saving, budgeting or getting out of debt, Finora is here to support you.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8  justify-center items-center">
                        <div className="bg-icon-green-light rounded-3xl p-4">
                            <Heart color={"#00834C"} size={60}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-primary-text">Your data, your privacy</p>
                            <p className="text-secondary text-xl mt-2">We take your privacy seriously and keep your data secure.</p>
                        </div>
                    </div>
                        
                </div>


            </div>



        </PageContainer>
    )
}