// import { Routes, Route} from 'react-router-dom'

import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Filmes from "./pages/Filmes/Index";
import Series from "./pages/Series/Index";



export function Router(){

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/filmes" element={<Filmes/>} />
      <Route path="/series" element={<Series/>} />
    </Routes>

  )

}