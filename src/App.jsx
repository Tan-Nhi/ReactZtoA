import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodolist] = useState([
    { id: 1, name: "learn React" },
    { id: 2, name: "Watching youtube" }

  ])

  const hoidanit = "Crocodile Renekton";
  const age = 25;
  const data = {
    address: "CanTho",
    country: "Vietnam",
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  //{key: value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
