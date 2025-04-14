import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("useCallback child render");
  return (
    <>
     <button onClick={addTodo}>ADD</button>
         {todos.map((ele,i)=>
        <p key={i}>{ele}</p>
     )}
    </>
  );
};

export default memo(Todos);