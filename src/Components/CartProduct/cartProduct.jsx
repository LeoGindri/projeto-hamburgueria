export default function CartProduct({product, deletar}){

    return(
        <div className='flex h-24 w-full px-3 mt-4'>
            <div className='bg-colorGrey3 rounded-lg flex items-center justify-center w-[130px] h-full'>
                <img className='' src={product.img} alt="" />
            </div>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col gap-3 pl-3 pt-2'>
                    <h2 className='font-bold text-size leading-5 text-colorGrey1'>{product.name}</h2>
                    <span className="font-semibold text-headline leading-4 text-colorGrey2">{product.category}</span>
                    <span className='font-semibold text-headline leading-4 text-colorGrey2'>R${product.price.toFixed(2)}</span>
                    {
                        product.quantidade >= 1 ? <p className='font-medium text-headline1  leading-4 text-colorGrey1'>Quantidade:{product.quantidade}</p> : ''
                    }
                </div>
                <button onClick={() => deletar(product)} className='flex pt-3 text-colorGrey2 h-7 font-regular leading-3 text-headline2 transform hover:text-colorGrey1 hover:border-b-[2px] border-solid border-spacing-2 border-colorGrey1'>Remover</button>
            </div>
        </div>
    )
}