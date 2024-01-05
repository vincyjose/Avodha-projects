 


 
 import React, { useState } from 'react'
 
 function HigherOrderFunctions(money, increase) {
  const[money,setMoney] = useState(10)
  const increase = () => {
    setMoney(money * 2)
  }
   return (
     <div>
     <h2>Jovin is offering ${money}</h2>
     <button onClick={increase}>Increase Money</button>  
     </div>
   )
 }
 
 export default HigherOrderFunctions 
 