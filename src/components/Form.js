import React, {useState} from "react";
import {obtenerDiferencial, calcularMarca, obtenerPlan} from "./helpers.js"
import styled from '@emotion/styled'
const ContainerDiv = styled.div`
  background: #fff;
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
  h2{
    text-align: center;
    background: #53c5c3;
    padding-block:15px;
    color:#fff;
  }
`

const ContainerForm = styled.div`
  width: 80%;
  max-width: 400px;
  margin:0 auto;
  padding: 20px;
  form{
    div{
      margin-bottom:25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      label{
      font-size: 1rem;
      font-weight: 400;
    }
    select{
      background: rgb(235, 233, 233);
      width: 80%;
      max-width: 500px;
      border:none;
      height: 35px;
      padding-inline: 20px;
      cursor: pointer;
    }
    }
  }
`
const FormButton= styled.button`
  background: #00aeac;
  color: #fff;
  border:none;
  font-size: 1rem;
  padding: 10px 50px;
  width: 100%;
  max-width:300px;
  margin: 0 auto;
  &:hover,
  &:active{
    background: #139b98;
    cursor: pointer;
  }
`
const FormRadio= styled.div`
  margin: 0px !important;
  input{
    margin-left: 20px;
  }
`
const FormButtonDiv= styled.div`
  display: flex;
  justify-content: center;
`
const FormError= styled.p`
  text-align: center;
  background: red;
  padding: 15px 50px;
  color:#fff;
`

function Form({guardarResumen, guardarSpinner}) {
    const [ datos, guardarDatos ] = useState({
        marca: "",
        year: "",
        plan:""
    })
    const [ error, guardarError ] = useState(false) 
    const obtenerDatos = e=>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })        
    }
    const cotizar = e =>{
        if(datos.marca === "" || datos.year === "" || datos.plan ===""){
            guardarError(true)
            return
        }
        guardarError(false)
        const diferencia = obtenerDiferencial(datos.year)
        let ValorInicial = 2000;
        ValorInicial -= ((diferencia * 0.3) * ValorInicial)/100;
        //Marca
        const diferenciaMarca = calcularMarca(datos.marca) * ValorInicial
        //Plan
        const diferenciaPlan = (obtenerPlan(datos.plan) * diferenciaMarca).toFixed(2)
        guardarSpinner(true)
        setTimeout(() => {
            guardarSpinner(false)
            guardarResumen({
                resultado: diferenciaPlan,
                ...datos
            })
        }, 3000);
    }

    return(
      <ContainerDiv>
        <h2>Cotizador de Seguros</h2>
        <ContainerForm>
            {error? <FormError>Complete todos los datos porfavor</FormError> : null}
            <form>
              <div>
                  <label>Marca</label>
                  <select onChange={obtenerDatos} name="marca">
                      <option value="">-- Seleccione --</option>
                      <option value="americano">Americano</option>
                      <option value="europeo">Europeo</option>
                      <option value="asiatico">Asiatico</option>
                  </select>
              </div>
              <div>
                  <label>Año</label>
                  <select onChange={obtenerDatos} name="year">
                      <option value="">-- Seleccione --</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                  </select>
              </div>
              <div>
                  <label>Plan</label>
                  <FormRadio>
                    <input type="radio" name="plan" value="basico" onChange={obtenerDatos}/> Basico
                    <input type="radio" name="plan" value="completo" onChange={obtenerDatos}/> Completo
                  </FormRadio>
              </div> 
              <FormButtonDiv>
                <FormButton type="button" onClick={cotizar}>Cotizar</FormButton>
              </FormButtonDiv>
            </form>
        </ContainerForm>
        </ContainerDiv>
    )
}

export default Form;