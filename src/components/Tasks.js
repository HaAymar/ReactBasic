 // map() is used to create a list
import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task ={task} onDelete={onDelete} onToggle = {onToggle}/>
      ))}
    </>
    //{tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
  )
}

export default Tasks
