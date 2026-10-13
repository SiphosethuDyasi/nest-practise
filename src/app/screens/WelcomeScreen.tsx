import PageContainer from "../components/pageContainer";
import Image from "next/image";

export default function WelcomeScreen() {
    return (
        <PageContainer>

            {/* Navigation bar */}
            <div className="flex flex-row bg-surface rounded-lg p-4 justify-between pl-8">

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
                    <button className="bg-surface text-primary-text px-4 py-2 border border-primary  rounded-lg">Log in</button>
                    <button className="bg-primary-dark text-white px-4 py-2 rounded-lg ml-2">Get Started</button>
                </div>
            </div>

            <div>
                
            </div>


        </PageContainer>
    )
}