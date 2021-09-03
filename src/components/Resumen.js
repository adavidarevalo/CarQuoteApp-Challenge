import React from "react"
import {primeraLetra} from "./helpers.js"
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`


const ResumenDiv = styled.div`
background: #00a09f;
color: #fff;
text-align: center;
font-size: 1rem;
padding: 15px 25px;
width: 74.5%;
margin: 0 auto;
max-width: 450px;
animation-name: ${fadeIn};
animation-duration: 1s;
animation-fill-mode: both;
h2{
  margin: 0;
  margin-bottom: 25px;
}
div{
  display: flex;
  flex-direction: column;
  align-items: baseline;
  p{
  margin: 0;
}
}
p:last-child{
  margin: 0px auto;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  span{
    font-size: 1.2rem;
  }
}
@media (max-height: 700px) {
  margin-bottom: 70px;
  background: red;
}
`



function Resumen({resumen}) {
    const {marca, plan, year, resultado} = resumen
    if(marca ===undefined|| plan ===undefined || year===undefined) return null;
    console.log(resumen)
    return(
        <ResumenDiv >
            <h2>Resumen de Cotización</h2>
            <div>
            <p>Marca: <span>{primeraLetra(marca)}</span></p>
            <p>Año: <span>{year}</span></p>
            <p>Plan: <span>{primeraLetra(plan)}</span></p>
            <p>El total es de: <span>${resultado}</span></p>
            </div>
        </ResumenDiv >
    )    
}

export default Resumen;