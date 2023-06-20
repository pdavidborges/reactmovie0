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

`

