import './App.css'
import NavBar from './componentes/NavBar.jsx/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

function App() {


  return (
    <>

      <ItemListConteiner greeting={"Bienvenidos a mi shop de productos"} />
      <CartWidget />

      <NavBar />




    </>



  )
}

export default App
