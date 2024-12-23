
export function Welcome() {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center text-white">
                <div className="text-3xl">
                    <h2 className="font-semibold">Welcome to Expense management</h2>
                </div>
                <p>
                    Manage and controll your <a className="text-red-600 font-semibold">expenses</a> and <a className="text-sky-600 font-semibold">metas</a>.
                </p>

                <a href="/home" className="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-4 font-semibold">Get started</a>

                <footer className="sticky top-[100vh] my-4 tex-white">
                    website developed by <a href="https://www.linkedin.com/in/guilherme-nunes-dos-santos-a89827274/" target="_blank" className="hover:underline hover:text-blue-500">
                        Guilherme Nunes
                    </a>
                </footer>
            </div>
        </>
    )
}