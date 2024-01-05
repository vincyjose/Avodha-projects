// import React, {useState} from 'react'

// const useState = () => {
//     const [square, setSquare]= useState(2)
//   return (
//     <div>
//       <p>{square}</p>
//      <button onClick={() => setSquare(square+1)}>Click me</button>
//     </div>
//   )
// }

// export default UseEffect


import React,{ useState, useEffect} from 'react'

const Hook2 = () => {
  const [num, setNum]=useState(0)

 useEffect (() => {
  console.log("sideEffects")
 }, [num]);
  return (
    <div>
      <p>number:{num}</p>
      <button onClick={()=>setNum(num+1)}> Click me</button>
    </div>
  )
}

export default Hook2
