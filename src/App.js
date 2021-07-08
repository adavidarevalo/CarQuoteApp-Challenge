import React, { useState} from "react"
import Form from "./components/Form"
import Resumen from "./components/Resumen.js"
import Resultado from "./components/Resultado"
import Spiner from "./components/Spiner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"
function App() {
  const [ resumen, guardarResumen ] = useState({})
  const [ spinner, guardarSpinner ] = useState(false)
  return (
    <div className="containerApp">
      <Header/>
      <Form guardarResumen={guardarResumen} guardarSpinner={guardarSpinner}/>
      {spinner? <Spiner/> 
      :<div>
        <Resumen resumen={resumen}/>
        <Resultado valor={resumen.resultado}/>
      </div> }
      <Footer/>
    </div>
  );
}

export default App;
 