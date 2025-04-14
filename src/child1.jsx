import React, { createContext, useEffect, useState } from "react";
import API from "axios";
import Child2 from "./child2"
export const userContext = createContext()

const Child1 = ({match}) => {
  const [data, setdata] = useState();
  const user="Umesh"
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(r => (r.json())).then(d => setdata(d))
  }, [])
  return (
    <>
      <h2>{match.params.name} Child1</h2>
      {/* {data && data.map((ele, i) => <h5 key={i}>{i}</h5>)} */}
      <userContext.Provider value={user}>
        <Child2 />
      </userContext.Provider>
    </>
  )
}
export default Child1;