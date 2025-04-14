import { useCallback, useMemo, useReducer, useState } from "react";
import Todos from "./Todos";

const Hooks = () => {
    const initialState = { count: 0 };
    const reducer = (s, a) => {
        const { type, payload } = a
        switch (type) {
            case "INCREMENT":
                return { count: s.count + payload };
                break;
            case "DECREMENT":
                return { count: s.count - payload };
                break;
            default:
                return s.count;
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const [todos, settodos] = useState([""])
     
    const addTodo = useCallback(() => {
        settodos((t) => [...t, "NEW TODO"])
    }, [todos])

    const fact=(n)=>{
        console.log("useMemo function rendered");
        let i=n;
      
        while (n>1) {
            i=i*(n-1);
            n--
        }
        return i;
    }
    const Factorial=useMemo(()=>fact(5),[]);

    return (<>
        <h1>useReducer : {state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>INC</button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>DEC</button>
        <h1>useCallback</h1>
        <Todos todos={todos} addTodo={addTodo} />
        <h1>useMemo</h1>
        <p>Factorial: {Factorial}</p>
    </>)
}

export default Hooks