import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../forms/SignUpForm";

export default function SignUp() {
    return (
        <main className="
            grid grid-cols-2 justify-between
            min-h-screen
            bg-[url('/illustrations/hero-leaves.svg')]
            bg-no-repeat

            md:bg-[length:350px_auto]
            md:bg-[position:-100px_center]

            lg:bg-[length:700px_auto]
            lg:bg-[position:-100px_400px]"
        >


                <div className="flex flex-col items-center px-8 gap-6 mt-10">
                    <Image
                        src="/finora-stacked.png"
                        alt="Finora logo"
                        width={300}
                        height={300}
                        className="h-auto max-w-full"
                    />

                    <h1 className="text-center text-5xl font-bold text-primary-text">
                        Take control of your finances
                    </h1>

                    <p className="text-center text-lg text-secondary mt-2">
                        Track your income, expenses and debts in one place.
                        Build better habits for a brighter tomorrow.
                    </p>
                </div>
            <div className="bg-surface m-10 rounded-2xl p-8 px-12">
                <Link href="/" className="flex flex-row gap-3 items-center mb-10"> 
                    <ArrowLeft color={"#00834C"} size={20}/>
                    <p className="text-m text-secondary">Back to home</p>
                </Link>

                <h1 className="text-3xl font-bold text-primary-text mb-1">
                    Create your account
                </h1>
                <p className="text-m text-secondary">Start your journey to smarter finances.</p>

                <SignUpForm/>

                <p className="text-center text-m text-secondary py-6">Already have an account? <Link href="/login" className="text-primary-dark font-bold pl-2">Log in</Link></p>



            </div>



        </main>
    )
}