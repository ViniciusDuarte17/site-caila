import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    box-sizing:  border-box;
}
 
body {
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #F2B6C3;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`;
