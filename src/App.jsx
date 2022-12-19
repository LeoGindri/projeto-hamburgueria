import { useEffect, useState } from 'react'
import Header from './Components/Header/header'
import ProductsList from './Components/ProductsList/products'
import CartContainer from './Components/CartList/CartContainer'
import api from './Services/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const [burguerList, setBurguerList] = useState([])
  const [dataFull, setDataFull] = useState([])
  const [cartList, setCartList] = useState([])
  const [value, setValue] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [bool, setBool] = useState(false)
  const [busca, setBusca] = useState('')

  useEffect(()=>{
    api.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => {
      setBurguerList(response.data)
      setDataFull(response.data)
    })
  }, [])
  
  const toastSuccess = () => toast.success('Produto adicinado!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
   
  const toastFailed  = () => toast.error('O produto já foi adicionado.', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });  

  const toastWarning = () => toast.warn('Produto removido com sucesso.', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
  
  const toastWarning2 = () => toast.warn('Produtos removidos.', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
  });

  function AddCartItem(product){
      const novoProduto = cartList.some(produto => produto.id == product.id)
      if(novoProduto == false){
        setCartList([...cartList, {...product, contador: 1} ])
        setValue(value + product.price)
        toastSuccess()
      }else{
        toastFailed()
      }
  }

  function Deletar(product){
      const listaFiltrada = cartList.filter((obj)=> obj.id !== product.id)
      if(product.contador == 1){
        setCartList(listaFiltrada)
        setValue(value - product.price)
        toastWarning()
      }
  }

  function DeletarTudo(){
    setCartList([])
    setValue(0)
    toastWarning2()
  }

  function searchFunction(event, busca){
    event.preventDefault()
    setSearchValue(busca)

    setBurguerList(dataFull.filter(obj => obj.name.toLowerCase().includes(busca.toLowerCase()) || obj.category.toLowerCase().includes(busca.toLowerCase())))
    if(busca !== ''){
      setBool(true)
    }else(
    setBool(false)
    )
  }

  function cleanSearch (){
    setBusca('')
    setSearchValue('')
    setBool(false)
    setBurguerList(dataFull)
  }

 

  return (
    <div className="App max-h-[100vh] max-w-[100vw]">
      <Header  searchFunction={searchFunction} busca={busca} setBusca={setBusca} />
      <div className='flex flex-col lg:flex-row px-[7vw]'>
        <ProductsList bool={bool} cleanSearch={cleanSearch} AddCart={AddCartItem} searchValue={searchValue} data={burguerList}/>
        <CartContainer deletar={Deletar}  DeletarTudo={DeletarTudo} value={value} dataCart={cartList} />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
