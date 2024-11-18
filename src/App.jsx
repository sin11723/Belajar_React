import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/Product/ProductPage"
import { UserProvider } from "./context/UserContext"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import { Children } from "react"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/"  element={<ProductPage />}/>
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOTHING GAS BEEN ADDED TO CART YET.</h1>} />
          </Routes>  
        </UserProvider>      
      </BrowserRouter>
    </>
  )
}

export default App

/*const ParentComponent = () => {
  const data = 'Celerates';
    return 
      <>
        <MyCard>
          <MyPhoto data={data} />
        </MyCard>
    </>
  

  const MyCard = ({Children}) => {
    return <>
    <p>{data}</p>
    {Children}
    </>
  }

  const MyPhoto = ({photo}) => {
    return <>

    </>
  }
}*/
