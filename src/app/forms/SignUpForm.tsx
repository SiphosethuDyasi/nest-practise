
export default function SignUpForm() {
    return (
        <form
            className="flex w-full flex-col gap-5 mt-5"
        >
            <div className="flex flex-col gap-2">
                <label className="font-small text-secondary">
                    First Name
                </label>

                <input
                    id="firstName"
                    type="firstName"
                    autoComplete="firstName"
                    placeholder="Enter your first name"
                    className="rounded-xl border border-border-grey bg-surface px-4 py-3 outline-none focus:border-primary-dark"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-small text-secondary">
                    Last Name
                </label>

                <input
                    id="lastName"
                    type="lastName"
                    autoComplete="lastName"
                    placeholder="Enter your last name"
                    className="rounded-xl border border-border-grey bg-surface px-4 py-3 outline-none focus:border-primary-dark"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-small text-secondary">
                    Email address
                </label>

                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="rounded-xl border border-border-grey bg-surface px-4 py-3 outline-none focus:border-primary-dark"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-small text-secondary">
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="rounded-xl border border-border-grey bg-surface px-4 py-3 outline-none focus:border-primary-dark"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-small text-secondary">
                    Confirm Password
                </label>

                <input
                    id="confirmPassword"
                    type="confirmPassword"
                    autoComplete="confirmPassword"
                    placeholder="Re-enter your password"
                    className="rounded-xl border border-border-grey bg-surface px-4 py-3 outline-none focus:border-primary-dark"
                />
            </div>

            <button
                type="submit"
                className="rounded-xl bg-primary-dark px-6 py-3 font-semibold text-white mt-5 disabled:opacity-50"
            >
                Log in
            </button>
        </form>
    )
}