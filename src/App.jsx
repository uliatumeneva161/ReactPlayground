import {
  // useState,
  useReducer,
  useState
} from "react"
import TodoList from "./todo/TodoList"
import NewTask from "./todo/NewTask"
import RegForm from "./RegForm"
// import { useCallback } from "react"

function App() {
  // console.log('todoApp render')
  const [inputTask, setInputTask] = useState('')

  const initTasks = [
    { id: 1, text: 'Выучить React', completed: false },
    { id: 2, text: 'Выучить React2', completed: true },
  ]
  const reducerFunc = (tasks, action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
        return tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
      case 'DELETE_TODO':
        return tasks.filter(task => task.id !== action.payload);
      case 'ADD_TODO':
        return [...tasks, { id: new Date(), text: inputTask, completed: false }];
      
      default:
        return tasks
        
    }

  }
  
  const [tasks, dispatch] = useReducer(reducerFunc, initTasks)
  
  const initRegData = {
    values: { name: '', email: '', password: '' },
    errors: { name: '', email: '', password: '' },
    submitStatus: 'no'
  }
  const validateForm = (field, value) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'enter name';
      case 'email': {
        if (!value.trim()) {
          return 'enter email'; 
        }
        if (!value.includes('@')) {
          return 'enter @';      
        }
        return '';            
      }
    }
  }
    const handleSendForm = () => { 
      dispReg({ type: 'SUBMIT_START' });

      setTimeout(() => { 
        dispReg({type: "SUBMIT_SUCCESS"})
      }, 2000)

      setTimeout(() => { 
        dispReg({type: 'RESET_FORM'})
      }, 4000)
    }
    const reducerRegFormHand = (state, action) => {
      switch (action.type) {
        case 'SUBMIT_START': {
          console.log('SUBMIT_Sефкеcalled');
          return { ...state, submitStatus: 'active' }
        }
        case 'SUBMIT_SUCCESS':
          console.log('SUBMIT_SUCCESS called');
          return {...state, submitStatus: 'send'};
      
        case 'CHANGE_FIELD': {
          const { field, value } = action.payload;
          const newValues = { ...state.values, [field]: value }
          const errValues = { ...state.errors, [field]: validateForm(field, value) }
          return {
            ...state, values: newValues, errors: errValues
          };
        }
          
        case "RESET_FORM": {
          return initRegData 
        }
          
        default:
          return state;
      }
    }

    const [regFormData, dispReg] = useReducer(reducerRegFormHand, initRegData)
  
    return (
      <div>
        <RegForm regFormData={regFormData} dispReg={dispReg} handleSendForm={handleSendForm} />
        <NewTask setInputTask={setInputTask} inputTask={inputTask} dispatch={dispatch} />
        <TodoList tasks={tasks} dispatch={dispatch} />
      </div>)
  }

export default App