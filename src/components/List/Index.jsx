import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Index";
import { ListCards, CardItem, Loading } from "./style";
import { Link } from "react-router-dom";
import star from '../../img/star.svg';
import noImage from '../../img/no-image.jpg';
import axios from "axios";

export function List({category, title}) {

  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeList, setTypeList] = useState('top_rated');
  const [search, setSearch] = useState('');
  const [listStart, setListStart] = useState(true);

  // if(sessionStorage.getItem('search')){
  //   setListStart(false);
  //   setSearch(sessionStorage.getItem('search'))
  // }

  const handleSearch = (arg) => {
    if(arg !== ''){
      setListStart(false);
      setSearch(arg);        
      sessionStorage.setItem('search',arg);   
    }else{
      setSearch(''); 
      setListStart(true);       
    }
  }

 useEffect(() => {
    console.log("componente renderizado busca");
    axios.get(`https://api.themoviedb.org/3/search/${category}`, {
      params: {
        query: search,
        api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
        language: 'pt-BR',                
      }
    })

    .then(response => {
      //console.log(response.data.total_pages);      
      setItens(response.data.results);
      setLoading(false);
    })

    .catch(error => {
      console.log(error.message);
    })    

  }, [search])

 
  useEffect(() => {
    console.log("componente renderizado lista");
    axios.get(`https://api.themoviedb.org/3/${category}/popular`, {
      params: {
        page: 1,
        api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
        language: 'pt-BR',                
      }
    })

    .then(response => {
      //console.log(response.data.total_pages);
      //console.log(search);
      setItens(response.data.results);
      setLoading(false);      
    })

    .catch(error => {
      console.log(error.message);
    })    
    
  },[])


  if(loading){
    return(
      <Loading>
        <h3 style={{color:'white'}}>Carregando...</h3>
      </Loading>
    )
  }

  return (
    <>
      <Banner title={title}>   
      <input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder="Digite para pesquisar"/>       
      </Banner>
      <div className="container">      
       
        <ListCards>          
          {console.log(listStart)}
        {/* <select value={typeList} onChange={(e) => setTypeList(e.target.value)}>
            <option value="top_rated">Tops</option>
            <option value="popular">Populares</option>
            {category === 'movie' ? <option value="now_playing">Do Momento</option> : '' }            
        </select> */}

        

          <main>

          {
            itens.map((item) => (
              
              <CardItem key={item.id}>             

                {/* {console.log(JSON.stringify(item.first_air_date).substring(1,5))} */}


                <Link to={`../detalhes/${category}/${item.id}`}>
                  
                  
                  {
                    (item.backdrop_path ? 
                    <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} title={item.title} width={360}  />
                    :
                    <img src={noImage} alt="" width={360}  />
                    )
                    
                  }
            
                  

                  <div className="content-card">
                    <h2>{ category === 'tv' ? item.name : item.title}</h2>

                    <h3>Ano: {JSON.stringify((category === 'tv' ? item.first_air_date : item.release_date)).substring(1,5)}</h3>
                    
                    <span> <img src={star} alt="" /> {item.vote_average}</span>
                  </div>
                </Link>
              </CardItem>


            ))
          }
          </main>
        </ListCards>

      </div>
    </>

  )

}