import CartProduct from "../CartProduct/cartProduct"
import TotalValue from "../CartTotal/total"


export default function CartContainer({dataCart, DeletarTudo , value ,deletar}){

    return (
        <div className="m-auto max-h-96 max-w-[384px] w-full bg-colorGrey4 lg:mt-4">
            <div className="flex justify-start items-center pl-4 bg-colorPrimary h-16 w-full rounded-t-lg">
                <h2 className="font-bold text-size leading-6 text-white">Carrinho de compras</h2>
            </div>
            {
                (dataCart.length == 0 )&&(
                    <div className="h-full w-full border border-solid border-colorGrey3">
                        <div className="flex flex-col items-center justify-center w-full gap-3 h-48">
                            <h2 className="font-bold text-size leading-6 text-colorGrey1">Sua sacola está vazia</h2>
                            <span className="font-regular text-headline3 leading-6 text-colorGrey2">Adicione itens</span>
                        </div>
                    </div>
                )
            }
            {
                (dataCart.length > 0)&&(
                    <>
                        <ul className=" max-h-72 w-full overflow-auto">
                            {
                                dataCart.map(product =>  <CartProduct product={product} dataCart={dataCart} deletar={deletar} func={deletar} /> )
                            }
                        </ul>
                        <TotalValue value={value} DeletarTudo={DeletarTudo} dataCart={dataCart}/>
                    </>
                )
               
            }
            
        </div>
    )
}