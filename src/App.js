import React, { useState, useRef, useEffect } from "react"

import Form from './components/Form'
import List from './components/List'
import ExtraButtons from './components/ExtraButtons'

import './styles/App.scss'

const App = () => {
  const [todos, setTodos] = useState([])
  const formInput = useRef(null)

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('@todo-app/tasks'))
    
    if (tasks) { // if tasks exists in the local storage (in the initial rendering)
      setTodos(tasks)
    }

    formInput.current.focus()
  }, [])

  useEffect(() => {
    localStorage.setItem('@todo-app/tasks', JSON.stringify(todos))
  }, [todos])
  
  const addTodo = todo => {
    setTodos([{todo, completed: false}, ...todos])
  }

  const deleteTodo = todoIndex => {
    const copy = [...todos]
    const newTodos = copy.filter((todo, index) => index !== todoIndex)
    setTodos(newTodos)
  }

  const deleteCompleted = () => {
    const copy = [...todos]
    const newTodos = copy.filter(todo => todo.completed === false)
    setTodos(newTodos)
  }

  const deleteAll = () => {
    setTodos([])
  }

  const toggleCompleted = todoIndex => {
    setTodos(todos.map((todo, index) => index === todoIndex ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>React Todo</h1>
        <Form addTodo={addTodo} formInput={formInput}/>
        {!todos.length ? null : <ExtraButtons deleteCompleted={deleteCompleted} deleteAll={deleteAll}/>}
        <List todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
};

export default App
