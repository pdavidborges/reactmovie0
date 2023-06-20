import styled from "styled-components";

export const CardsList = styled.div`

  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 60px;

`


export const CardItem = styled.section`

  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);

   img{
    filter: brightness(150%);
   }
   

  }

  img{
    border-radius: 10px;
    opacity: 0.7;
    
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