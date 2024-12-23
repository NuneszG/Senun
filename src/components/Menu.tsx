
export function Menu() {
    return (
        <>
            <aside className="flex-col w-72 bg-zinc-800 h-screen">
                <article>
                    <p className="p-5 font-semibold">
                        <span>
                            Welcome to Senun
                        </span>
                    </p>  
                    <p className="p-3 hover:bg-zinc-700 hover:duration-200">
                        <span>         
                            <a href="#">
                                Registrar nova despesa
                            </a>
                        </span>
                    </p>  
                    <p className="p-3 hover:bg-zinc-700 hover:duration-200">
                        <span>
                            <a href="#">
                                Registrar uma nova meta
                            </a>
                        </span>
                    </p> 
                    <p className="p-3 hover:bg-zinc-700 hover:duration-200">
                        <span>
                            <a href="#">
                                Crie sua lista de desejos
                            </a>
                        </span>
                    </p> 
                </article>    
            </aside>
        </>
    )
}