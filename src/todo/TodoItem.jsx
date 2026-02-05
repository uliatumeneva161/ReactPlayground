import React from "react"
const TodoItem = React.memo(({ task, dispatch}) => { 
    // const [isChecked, setIsChecked] = useState(task.completed)
    
    // console.log('todoItem render', task.text)
    return <div className={task.completed ? 'task task-done' : 'task'}>

        <p>{task.text}</p>
        <input type="checkbox" checked={task.completed ? true : false} onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: task.id })} />
        <p>{task.completed ? 'готово' : 'нужно сделать '} </p>
        <span onClick={() => dispatch({type: 'DELETE_TODO', payload: task.id})} style={{ color: 'red' }}>X</span>
    </div>
})
export default TodoItem;