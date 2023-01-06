const initialState = [{
    id:1,
    todo:"Pagar seguro hogar",
    done:"false"
}]


// La funcin reducer recibe dos argumentos:
// 1: estado(initialState) y 2: las action (esta acción le dirá a mi reducer como quiero que cambie el estado)

// Siempre debe devolver un estado


const todoReducer = (state=initialState,action)=>{


    return state;

}


let todos = todoReducer();

const newTodo = {
    id:2,
    todo:"Estudiar React",
    done:false
}

const addTodoAction = {
    type:"[TODO] add todo",
    payload: newTodo

}

todos = todoReducer(todos,addTodoAction)

console.log({state: todos});