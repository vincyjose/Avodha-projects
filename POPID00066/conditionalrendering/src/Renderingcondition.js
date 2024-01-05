import React, { useState } from 'react'


function Renderingcondition() {
   const [logIn, setLogin] = useState(true)
   return (
      <>
         {
            logIn ?
               (<div><h1>WElcome</h1>
                  <button onClick={() => setLogin(!logIn)}>logIn</button></div >)
               : (<div><h1>login first</h1>
                  <button onClick={() => setLogin(!logIn)}>logIn</button></div>)
         }
      
      </>
   )
}

export default Renderingcondition
