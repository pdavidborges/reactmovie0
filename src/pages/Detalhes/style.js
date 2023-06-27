import styled from "styled-components";



export const BannerDetail = styled.div `
  height: 500px;
  background-image: url(${(props) => props.url});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  // filter:blur(3px);

`

export const Content = styled.div `
background-color: rgba(0,0,0,0.5);
backdrop-filter: blur(5px);
padding: 20px;
border-radius: 10px;
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  /* top: -200px; */
  margin-top: -300px;
  margin-bottom: 50px;
  
  display: flex;
  align-items: center;
  column-gap: 30px;
  
  h1{
    font-size: 24px;
  }

  h2{
    font-size: 18px;
    font-style: italic;
  }

  ul{
    list-style: inside;
    margin: 20px 0;
  }

  p{
    line-height: 140%;
  }

  button{
    padding: 10px 20px;
    background-color: #000715;
    border: solid 1px white;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }


`