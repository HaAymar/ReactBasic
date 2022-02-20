import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

//#rafce synthaxe function pour react

function App() {
  const [tasks, setTasks] = useState ([
    //tasks : les taches a utiliser 
    //setTasks: renew the tasks
    {
        id: 1,
        text: 'Doctors Appoiontment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,   
        },
        {
        id: 2,
        text: 'Metting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
        },
        {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,   
        },
        
])
//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
 }

// Toogle reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
 }
  return (
    <div className="container">
       <AddTask />
       <Header nom="Aymar"/> 
       {tasks.length > 0 ? (
         <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : (
           'No Tasks To Show'
         )}
     </div>
  );
}








// class App extends React.Component{
//   render() {
//     return (
//     <div> 
//     <h1>Hello From Class</h1>
//     <Header/>
//     </div>
//     )  
//   }
// }

//Delete task

export default App;
