import React from "react";
import { useRef } from "react";

import "./NewTodo.css"


type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}


const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = textInputRef.current!.value
    props.onAddTodo(enteredText)
}

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Insert Text: </label>
        <input type="text" name="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
