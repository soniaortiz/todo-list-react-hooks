// import react from 'react'

import { useState } from "react";

export default function List() {
  const [todo, setInputValue] = useState(() => "");
  let [todoListArray, setTodoValue] = useState(() => []);
  const [, deleteFromTodoList] = useState(() => []);

  function addItemTodoList(e) {
    setInputValue(() => e.target.value);
  }

  function pushItemToTodoList() {
    setInputValue(() => "");
    return setTodoValue((prevTodo) => [...prevTodo, todo]);
  }

  function deleteItem(e) {
    const i = e.target.getAttribute("index");
    deleteFromTodoList(() => {
      const x = todoListArray.filter((item, index) => index != i);
      setTodoValue(() => [...x]);
    });
  }

  return (
    <>
      <input type="text" value={todo} onChange={addItemTodoList} />
      <button onClick={pushItemToTodoList}>add</button>

      <ul>
        {todoListArray.map((item, index) => {
          let k = Math.floor(Math.random() * 10);
          return (
            <li key={index} index={index} onClick={deleteItem}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
