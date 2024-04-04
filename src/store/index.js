import { useEffect } from "react";
import { createStore } from "redux";

let INITIAL_VALUE = {
  todoItem: [],
};



const todoReducer = (store = INITIAL_VALUE, action) => {
  let newTodList = store;
  
  

  if (action.type === "ADDTODO") {
    localStorage.setItem('todo', JSON.stringify([...store.todoItem, action.payload]))
    return { ...store, todoItem: [...store.todoItem, action.payload] };

  } else if (action.type === "DELETETODO") {
    newTodList = store.todoItem.filter((todo) => todo.name != action.payload);
    return { ...store, todoItem: newTodList };
  }
  return store;
};

const todoStore = createStore(todoReducer);

export default todoStore;
