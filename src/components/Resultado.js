import React from "react"
import styled from '@emotion/styled'
const ResultadoDiv= styled.div`
padding-bottom: 120px;
max-width: 470px;
margin: 0 auto;
background: #03a09e;
margin-top:25px;
padding: 15px;
width: 80.5%;
p{
color: #fff;
text-align: center;
width: 80.5%;
margin: 0 auto;
}
`

function Resultado({valor}) {
    if(valor ===undefined) return null;
    return(
      <ResultadoDiv>
        <p>El total es de: <span>${valor}</span></p>
      </ResultadoDiv>
    )
}

export default Resultado;