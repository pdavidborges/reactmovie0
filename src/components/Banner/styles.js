import styled from "styled-components";
import background from '../../img/background.jpg';

export const BannerApp = styled.div `

background-image: url(${background});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding: 135px 0;

  h1{
    font-size: 48px;
    margin-bottom:16px;
  }

  p{
    font-size: 18px;
    max-width: 460px;
  }

  input{
    width: 200px;    
    margin-top: 20px;
    border-radius: 5px;
    background-color: #000715;
    border-color: #00B1E9;
    color: white;
    padding: 10px;
  }

  @media (max-width: 640px){
    padding: 75px 0;

    h1{
      font-size: 36px;
    }

    p{
      font-size: 14px;
    }

  }

`

