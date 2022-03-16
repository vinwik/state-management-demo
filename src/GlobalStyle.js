import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #965b5f;
    --secondary-color: #e9c9ca;
    --white: #FFFAFF;
    --light-grey: #f2f2f2;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    font-family: Arial, Helvetica, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media only screen and (max-width: 480px) {
    html {
      font-size: 0.9rem;
    }
  }
`;
