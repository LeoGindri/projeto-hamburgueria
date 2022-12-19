import { useState } from "react"

export default function TotalValue({value, DeletarTudo}){

    return(
        <div className="w-full m-auto  px-4 mt-5 pt-5 border-t-2 border-solid flex flex-col gap-4 pb-3 border-colorGrey2">
            <div className="flex justify-between">
                <h2 className="font-semibold text-headline2 leading-6 ">Total</h2>
                <h2 className="text-headline2 font-semibold leading-6 text-colorGrey2">R$ {value.toFixed(2)} </h2>
            </div>
            <div className="w-full rounded-lg flex items-center justify-center h-[50px] bg-colorGrey3 ">
                <button onClick={DeletarTudo} className="font-semibold text-headline2 leading-5 w-full h-full rounded-lg text-colorGrey1  transition hover:bg-colorGrey2  ">Remover Todos</button>
            </div>
        </div>
    )
}