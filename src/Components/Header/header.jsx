import LogoImage from "../Logo/logo"
import SearchBar from "../SearchBar/search"
export default function Header({ searchFunction, busca, setBusca}){
    return(
        <header className="max-w-[100vw] h-32 flex bg-colorGrey4 items-center justify-center pt-4">
            <div className="flex flex-col items-center justify-center lg:flex-row w-full  lg:px-[7vw] lg:justify-between">
            <LogoImage/>
            <SearchBar searchFunction={searchFunction} busca={busca} setBusca={setBusca}/>
            </div>
        </header>
    )
}