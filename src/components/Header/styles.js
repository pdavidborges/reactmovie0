import styled from "styled-components";

export const HeaderApp = styled.header`

background-color: #000715;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px; 

  nav{
    display: flex;
    column-gap: 80px;

    a{
      color: white;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }

    }

  }

`
