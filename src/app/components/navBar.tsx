import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex flex-row bg-surface rounded-lg p-4 justify-between pl-8 m-6">
            {/* Logo with text*/}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/finora-mark.png"
                    alt=""
                    width={40}
                    height={40}
                />
                <span className="text-2xl font-bold text-primary-text">
                    Finora
                </span>
            </Link>

            
            {/* Menu Options */}
            <div className="flex items-center gap-10">
                <Link
                    href="/"
                    className="border-b-2 border-transparent p-2 text-primary-text transition-colors hover:border-primary"
                >
                    Home
                </Link>
                <Link 
                    href="/#features"
                    className="border-b-2 border-transparent p-2 text-primary-text transition-colors hover:border-primary"
                >
                    Features
                </Link>
                <Link 
                    href="/#about"
                    className="border-b-2 border-transparent p-2 text-primary-text transition-colors hover:border-primary"
                >
                    About
                </Link>
            </div>

            {/* Menu Buttons Options */}
            <div className="flex items-center gap-2">
                <Link
                    href="/login"
                    className="rounded-lg border border-primary px-6 py-2 text-primary-text transition-colors hover:bg-light"
                >
                    Log in
                </Link>

                <Link
                    href="/signup"
                    className="rounded-lg bg-primary-dark px-6 py-2 text-white transition-colors hover:opacity-90"
                >
                    Get Started
                </Link>
            </div>

        </nav>
        

    )
}