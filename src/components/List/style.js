import styled from "styled-components";

import backgroundImage from '../../img/no-image.jpg';

export const ListCards = styled.div`



  select, input{
    width: 200px;
    
    margin-top: 20px;
    border-radius: 5px;
    background-color: #000715;
    border-color: #00B1E9;
    color: white;
    padding: 10px;

  }

  main{
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 60px;
  }

`


export const CardItem = styled.section`

  
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  height: 200px;

  &:hover{
    transform: scale(1.05);

   img{
    filter: brightness(150%);
   }
   

  }

  img{
    border-radius: 10px;
    opacity: 0.5;
    
  }

  .content-card{
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    
    h2{
      font-size: 24px;
    }

    h3{
      font-size: 16px;
      margin: 5px 0;
    }

    span{
      color: #FAFF00;
      font-weight: bold;
    }

  }

`



export const Loading = styled.div`

  width: 100%;
  height: 100%;
  //background-color: black;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1000;

`