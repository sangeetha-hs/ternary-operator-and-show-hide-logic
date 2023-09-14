import React, {  useState } from 'react';



function App() {
    //ternary operator
    //something ?true? false
    
    const [text,setText]=useState("");
    const [showModal,setShowMadal]=useState(false)
  function handleClick(){
    setShowMadal(!showModal)
      
    
    

  }
   return <> {text? <h1>very good</h1>: <h1>very bad</h1>}
   <button onClick={handleClick}>clickMe</button>
   {showModal &&<h1>my modal is here guys!</h1>}
    </>
   
}

export default App;
