/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useState } from "react"
import TodoItem from "./TodoItem";


function Todo() {

  const [todoList, setToDOList] = useState([]);

  const inputRef = useRef();

  function remove(id) {
  setToDOList((prev)=> prev.filter((item)=> item.id !==id))
}

  function add() {
    const inputText = inputRef.current.value.trim();
    
    if (inputText === '') {
      return null
    }
    const newTodo = {
      id: Date.now(),
      text : inputText
    }

    setToDOList((prev) => [...prev, newTodo])
    inputRef.current.value = ''
  }


  return (
    <div>
      <input type="text" placeholder="Enter your text" ref={inputRef} />
      <button onClick={add}>Add+</button>
      {todoList.map(item => (
        <div key={item.id}>
          <TodoItem  text={item.text} onDelete={(id)=>remove(item.id)} />
        </div>
      ))}
    </div>
  );
}

export default Todo