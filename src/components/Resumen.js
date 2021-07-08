import React from "react"
import {primeraLetra} from "./helpers.js"
import styled from '@emotion/styled';

const ResumenDiv = styled.div`
background: #00a09f;
color: #fff;
text-align: center;
font-size: 1rem;
padding: 15px 25px;
width: 74.5%;
margin: 0 auto;
max-width: 450px;
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
`


function Resumen({resumen}) {
    const {marca, plan, year} = resumen
    if(marca ===undefined|| plan ===undefined || year===undefined) return null;
    console.log(resumen)
    return(
        <ResumenDiv >
            <h2>Resumen de Cotización</h2>
            <div>
            <p>Marca: <span>{primeraLetra(marca)}</span></p>
            <p>Año: <span>{year}</span></p>
            <p>Plan: <span>{primeraLetra(plan)}</span></p>
            </div>
        </ResumenDiv >
    )    
}

export default Resumen;