
import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./component/Buttons.jsx";
import Display from "./component/Display.jsx"

function App() {
  const [calval , setcalval]= useState("12")
  const Buttonclick=(buttonText)=>{
    if (buttonText==="C"){
      setcalval("")
    }
    else if(buttonText==="="){
      const result= eval(calval)
      setcalval(result)
    }
    else{
    const newdisplay= calval+ buttonText;
  setcalval(newdisplay)}

  }
  

  return (
    
    <div className={styles.calculator}>
    <h1 style={{margin:"80px"}}>Calculator</h1>
    <Display displayValue={calval}></Display>
    <Buttons click={Buttonclick}></Buttons>
    </div>
    
  )
}

export default App
