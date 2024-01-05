import React from 'react'

function Conditional() {
    let number=1;
  return (
    <div>
      {number > 0 ?(
        <h1>Positive</h1>
      ): number<0 ? (
        <h1>Negative </h1>
      ):(
        <h1>Zero</h1>
      )}
    </div>
  )
}

export default Conditional

