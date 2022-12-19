import Button from "../Button/button"


export default function ProductsCard({produto, func}){
   


    return(
        <li key={produto.id} className="list-none min-w-[280px] max-h-[346px] border-solid border border-colorGrey3   rounded-lg transition hover:scale-[1.1]" >
            <div className="bg-colorGrey4 rounded-t-lg ">
                <img className="m-auto w-40 h-40" src={produto.img} alt="" />
            </div>
            <div className="p-5 flex flex-col  gap-4">
                <h2 className="font-bold text-placeholder leading-4">{produto.name}</h2>
                <span className="font-semibold text-headline leading-4 text-colorGrey2">{produto.category}</span>
                <p className="leading-6 text-headline3 font-semibold text-colorPrimary">R${produto.price.toFixed(2)}</p>
                <Button id={produto.id} click={() => func( produto)} classname={'bg-colorPrimary px-5 py-3 text-center text-white font-medium text-headline3 rounded-lg transition hover:bg-colorPrimary2  hover:text-colorGrey1'} textValue={'Adicionar'}/>
            </div>
        </li>
    )
}