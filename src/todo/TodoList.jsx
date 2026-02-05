import TodoItem from "./TodoItem"

function TodoList({ tasks, dispatch }) {
    // console.log('todolist render')
    return <div className="task__list">
        {tasks.map(task => (
            <div key={task.id} >
                <TodoItem task={task} dispatch={dispatch}  />
            </div>
        ))}
    </div>
}
export default TodoList



