import { BrowserRouter,Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Product from "./components/Product"
import Users from "./components/Users"
import Contact from "./components/Contact"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<Product />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
