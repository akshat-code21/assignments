import Index from '.'
import './App.css'
import NavBar from './components/NavBar'
import WishList from "./components/WishList"
import AmazonCart from "./components/AmazonCart"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { RecoilRoot } from 'recoil'
function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route index element={<Index></Index>}></Route>
          <Route path='/wishlist' element={<WishList></WishList>}></Route>
          <Route path='/cart' element={<AmazonCart></AmazonCart>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
