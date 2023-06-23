// import { Routes, Route} from 'react-router-dom'

import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Filmes from "./pages/Filmes/Index";
import Series from "./pages/Series/Index";
import Detalhes from "./pages/Detalhes";
import Erro from "./pages/Erro";



export function Router(){

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/filmes" element={<Filmes/>} />
      <Route path="/series" element={<Series/>} />
      <Route path="/detalhes/:category/:id" element={<Detalhes/>} />
      
      <Route path="*" element={<Erro/>} />
    </Routes>

  )

}