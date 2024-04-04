import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useSelector } from "react-redux";

const TodoItems = () => {

  const todoItem = useSelector(store => store.todoItem)

  return (
    <div className={styles.itemsContainer}>
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
