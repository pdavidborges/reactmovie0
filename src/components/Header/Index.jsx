import { Link } from "react-router-dom";
import logo from '../../img/logo.svg';
import { HeaderApp } from "./styles";

export default function Header() {

  return (
    <HeaderApp>

      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <nav>
        {/* <a href="/">Início</a>
            <a href="/filmes">Filmes</a>
            <a href="/series">Séries</a> */}

        <Link to='/'>Início</Link>
        <Link to='/filmes'>Filmes</Link>
        <Link to='/series'>Series</Link>

      </nav>


    </HeaderApp>

  )

}