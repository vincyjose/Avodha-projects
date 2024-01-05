// import React, { useState } from 'react'

// const Usestate = () => {
//     const [num, setNum]= useState(0)
//   return (
//     <div>
//       <h1>Good morning {num}</h1>
//       <button onClick={()=>setNum(num+1)}>Increment</button>
//       <button onClick={()=>setNum(num-1)}>Decrement</button>
//     </div>
//   )
// }

// export default Usestate

import React,{useState} from 'react'

const Usestate = () => {
    const [count, setCount]=useState(1)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+2)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      
    </div>
  )
}

export default Usestate

