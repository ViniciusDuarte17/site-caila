import styled, { keyframes } from "styled-components";

import Img4 from "../../assets/about.jpg";


const slideSection = keyframes`
    0% {
        transform: translateY(-100%);
    }
    75% {
        transform: translate(0);
    }
    75% {
        transform: translateY(5%);
    }
    100% {
        transform: translate(0);
    }
`

export const Container = styled.main`
    transition: all 0.3s ease;
    animation: ${slideSection} 1.5s ease;
    width: 100%;
`

export const SectionOne = styled.section`
    width: 100%;
    height: calc(45vh);
    background-image: url(${Img4});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 769px) {
        width:100%;
        height: calc(30vh);
        background-image: url(${Img4});
  }

`

export const H1  = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: #333;
`
export const P  = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #883a32;
    margin-top: 2%;
`


export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  background-color: hsl(350, 100%, 95%);
  

  @media screen and (max-width: 920px) {
      
        display: grid;
        grid-template-columns: 80%;
        
  }
`

export const H2  = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 500;
    color: #333;
    margin-top: 3%;
    margin-left: 6%;
    padding-bottom: 2%;
`

export const DivOneColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1%;

    p{ 
        font-family: Arial, sans-serif; 
        font-size: 18px; 
        line-height: 1.5; 
        color: #333; 
        text-align: justify;
        margin: 2%;
    }
`