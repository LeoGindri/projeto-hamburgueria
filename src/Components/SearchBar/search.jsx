import Button from "../Button/button"

export default function SearchBar({searchFunction, busca, setBusca}){

    
    return(
        <form className="flex border-solid border-2 border-colorGrey3 rounded-lg w-full h-14 justify-between items-center px-3 md:w-96 bg-white transition focus-within:border-colorGrey2">
            <input type="text" onChange={(event) => setBusca(event.target.value)} className=" placeholder:text-colorGrey3 focus-visible:border-none" placeholder="Digitar pesquisa" />
            <Button click={(event) => searchFunction(event , busca)} classname="bg-colorPrimary px-5 py-3 text-center text-white font-medium text-headline3 rounded-lg transition hover:bg-colorPrimary2" textValue={'Pesquisar'}/>
        </form>
    )
}