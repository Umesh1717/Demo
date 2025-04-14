import React, { useEffect, useState } from "react";
import API from "axios";
import Child3 from "./child3"
const Child2=(prop)=>{
    const [data,setdata]=useState();
console.log("Child2 rendered")
return(
  <>
    <h2>Child2</h2>
   <Child3/>
  </>
)
}
export default Child2;