import React, { useEffect, useRef, useState } from "react";
const UnControlled = () => {
  const [inputValue, setinputValue] = useState()
  const inputRef = useRef();
  const handleClick = () => {
    //  alert( inputRef.current.value)
    //  alert(inputValue)
    inputRef.current.focus()
  }
  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
      <h1>{inputValue}</h1>
    </>
  )
}
export default UnControlled;