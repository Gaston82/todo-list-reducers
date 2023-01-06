import { useReducer} from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { todoReducer } from "./todoReducer";



// const initialState = [{
//   id:1,
//   todo:"Pagar seguro hogar",
//   done:"false"
// }]


// La funcin reducer recibe dos argumentos:
// 1: estado(initialState) y 2: las action (esta acción le dirá a mi reducer como quiero que cambie el estado)

// Siempre debe devolver un estado





// La funcin reducer recibe dos argumentos:
// 1: estado(initialState) y 2: las action (esta acción le dirá a mi reducer como quiero que cambie el estado)

// Siempre debe devolver un estado


// const todoReducer = (state=initialState,action={})=>{

//   if (action.type==="[TODO] add todo") {
//     return [...state,action.payload]
//   }


//   return state;

// }


// let todos = todoReducer();

// const newTodo = {
//   id:2,
//   todo:"Estudiar React",
//   done:false
// }

// const addTodoAction = {
//   type:"[TODO] add todo",
//   payload: newTodo

// }

// todos = todoReducer(todos,addTodoAction)

// console.log({state: todos});


const initialState = [
  { id: 1, name: "Pagar seguro" },
  { id: 2, name: "Estudiar React" },
]

function App() {


  const[tasks,dispatch]=useReducer(todoReducer,initialState);

  const createTask = (newTask) => {

    const action ={
      type:"[TODO] add todo",
      payload: newTask
    }
    dispatch(action)
  };

  const deleteTaskById = (id) => {

    const action={
      type:"[TODO] remove todo",
      payload:id
    }
    dispatch(action)
  };

  const editTaskById = (id, newTaskName) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newTaskName };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {tasks.length === 0 ? (
        <h2>Aún no tienes tareas!!</h2>
      ) : (
        <TodoList tasks={tasks} onDelete={deleteTaskById} onEdit={editTaskById} />
      )}

      <TodoCreate onCreate={createTask} />
    </div>
  );
}

export default App;
