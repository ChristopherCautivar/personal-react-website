import Todo from './Todo';
// note, the tutorial I'm using used a different line to import uuid, but I suspect this is due to
// changes in the packet over time. I just looked at the npm page to get the import to work
import { v4 as uuidv4 } from 'uuid';
// use the useState hook to update the page anytime its state changes
// use the useRef hook to allow access to document elements that have references
import React, { useState, useRef, useEffect } from 'react';

const LOCAL_STORAGE_KEY='todoApp.todos'

export default function TodoList() {
  // use object destructuring to store the todos retrieved and the function to run anytime the todos 
  // change. By using a key, only the changed todo will be rerendered
  // it seems the code runs pretty much real time thanks mostly to managing state
  const [todos, setTodos] = useState([])
  // esssentially a variable that is linked to an element that has ref={todoNameRef}
  const todoNameRef = useRef()

  // retrieve todos from local storage on page load, runs only once because the array of variables
  // that it is connected to is empty
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // when todos is changed,the anonymous function provided will run, storing the todo JSON objects
  // as strings in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    // state variables should never be directly changed. instead create copies of the state variable
    // then update the state variable
    const newTodos = [...todos]
    // note that the find method exists within the Array class, and is an alternative to writing
    // an iterative loop yourself
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    // pass an arrow function to the setTodos update function. the arrow function takes a the previous
    // value of todos (prevTodos)  as a parameter, and returns/sets todos equal to the previous value
    // with the todo being submit at the end 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    // removes all completed todos
    const newTodos = todos.filter( todo => !todo.complete)
    setTodos(newTodos)
  }

  // return an array of Todo components corresponding to each todo in todoProp
  return (
    <>
      {/* react functional component will be rendered here and passed the todos as a prop. We also
          pass the toggleTodo function as a prop, through TodoList, down to Todo, in order to access
          the specific todo id, rather than querying for the id, or storing it in html */}
      {todos.map(todo => <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>)}
      {/* create an input element that has a ref that will correspond to a variable */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      {/* notice how you can insert the results of code into divs and it will render them in real
          time due to state control, probably */}
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}
