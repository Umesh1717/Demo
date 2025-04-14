import React, { useState } from "react";
import './CSS.scss'
const App=()=> {
  const obj=[{a:1,b:2},{c:2,d:0}]
  const element=document.querySelector("#demo")
  console.log("Log")
console.warn("warning")
console.error("Error")
console.table(obj)
console.dir(element)
console.group("Group")
console.log("sadas")
console.log("sadas")
console.log("sadas")
console.groupEnd()
console.time("API")
debugger;
setTimeout(() => {
  console.timeEnd("API")

}, 2000);
  return (
   <div id="src">
   <h1 className="">Umesh</h1>
   <p>ppppppppp</p>
   </div>
  )
}
export default App
