import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html{
      &::-webkit-scrollbar{
          width: 0.5rem;

      }
      &::-webkit-scrollbar-thumb{
          background-color: darkgray;
      }
      &::-webkit-scrollbar-track {
    background: white;
      }
  }
  body{
      font-family: "Montserrat", san-serif;
      width: 100%;
      h2{
          font-size: 2rem;
          font-family: "Abril Fatface",cursive;
          font-weight: lighter;
          color: #333; 
      }
      h3{
          font-size: 1.3rem;
          color: #333;
          padding: 1rem 0 0.5rem 0;
      }
      p{
          font-size: 1rem;
          color: #696969;
          padding: 0.5rem 0;
      }
      img{
          display: block;
      }
      input{
        font-weight: bold;
        font-family: "Montserrat", san-serif;

      }
  }
   
`;

export default GlobalStyled;
