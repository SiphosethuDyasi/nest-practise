import { Heart, Users } from "lucide-react";

export default function AboutScreen() {
    const config = [
        {
            icon: <Heart color={"#00834C"} size={60}/>,
            title: "Built for real life",
            description: "Simple and practival tools that fit into your everyday routine"
        },
        {
            icon: <Users color={"#00834C"} size={60}/>,
            title: "Your goals, your journey",
            description: "Whether its saving, budgeting or getting out of debt, Finora is here to support you." 

        },
        {
            icon: <Heart color={"#00834C"} size={60}/>,
            title: "Your data, your privacy",
            description: "We take your privacy seriously and keep your data secure."
        }
    ]
    return (
        <section id="about" className="
            p-16
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
            {
                config.map((item, index) => (
                    <div className="flex flex-row gap-8  justify-center items-center" key={index}>
                        <div className="bg-icon-green-light rounded-3xl p-4">
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-primary-text">{item.title}</p>
                            <p className="text-secondary text-xl mt-2">{item.description}</p>
                        </div>
                    </div>

                ))
            }        
            </div>
        </section>
    )
}