import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import Header from "./components/Header/Index"
import Footer from "./components/Footer/Index"
import './global.css';


function App() {


  return (
    <BrowserRouter>     
      <Header/>
      <Router />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
