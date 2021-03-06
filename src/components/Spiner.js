import React from "react"
import "./styles/Spiner.css"
import styled from '@emotion/styled';
const SpinnerDiv = styled.div`
position: absolute;
background: #fff;
color: #fff;
display: flex;
justify-content:center;
align-items: center;
width: 90%;
max-width: 500px;
height: 105px;
max-height: 300px;
z-index: 1000;
position: relative;
margin:0 auto;
margin-bottom:25px;
@media (max-height: 700px) {
  margin-bottom: 70px;
}
`

function Spiner() {
    return(
      <SpinnerDiv >
          <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          </div>
        </SpinnerDiv>
    )
}
export default Spiner;