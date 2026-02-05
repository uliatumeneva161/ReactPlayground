function NewTask({setInputTask,inputTask, dispatch}) { 
    return (<div>
        <input value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: inputTask})}>add new task</button>
    </div>)
}
export default NewTask