
export function Home() {
    return (
        <>
            <div className="bg-zinc-900 text-white w-full min-h-screen text-center">
                <header className="p-6">
                    <h3 className="text-3xl font-semibold mb-2">
                        Gerenciamento de despesas
                    </h3>
                    <p>
                        Aqui você poderá registrar novas despesas e metas, e gerencia-las como quiser.
                    </p>
                </header>
                
                <div className="flex justify-center">
                    <div className="p-6 text-red-600 font-semibold">
                        Register new expense <br />

                        <a href="" className="text-white font-normal">Register</a>
                    </div>
                    <div className="p-6 text-green-500 font-semibold">
                        Register new meta <br />

                        <a href="" className="text-white font-normal">Register</a>
                    </div> 
                
                </div>

                <p className="p-10">
                    Lembre-se de sempre verificar quantas metas você tem registradas. <br />
                    E tente ao maximo siga-as para conseguir conquistar suas metas!
                </p>
    
            </div>
        </>
    )
};