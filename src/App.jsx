import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useSelector } from "react-redux";

function App() {

  const todoItem = useSelector(store => store.todoItem)

  return (
    <div className="app-container">
      <div className="todo-app">
        <AppName />
        <AddTodo  />
        {todoItem.length === 0 && <WelcomeMessage/>}
        <TodoItems></TodoItems>
      </div>
    </div>
  );
}

export default App;
