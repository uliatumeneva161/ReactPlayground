import {
  // useState,
  useReducer,
  useState
} from "react"
import TodoList from "./todo/TodoList"
import NewTask from "./todo/NewTask"
// import { useCallback } from "react"

function App() {
  // console.log('todoApp render')
  const [inputTask, setInputTask] = useState('default')

  const initTasks = [
      { id: 1, text: 'Выучить React', completed: false},
      { id: 2, text: 'Выучить React2', completed: true},
  ]
    const reducerFunc = (tasks, action) => { 
    switch (action.type) { 
      case 'TOGGLE_TODO':
        return tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
      case 'DELETE_TODO':
        return tasks.filter(task => task.id !== action.payload);
      case 'ADD_TODO':
        return [...tasks, { id: new Date(), text: inputTask, completed: false } ] ;
      
        default:
          return tasks   
        
    }

    }
  
    const [tasks, dispatch] = useReducer(reducerFunc, initTasks)
  
    return (
      <div>
        <NewTask setInputTask={setInputTask} inputTask={inputTask} dispatch={dispatch} />
        <TodoList tasks={tasks} dispatch={dispatch} />
  </div>)
}
  
export default App