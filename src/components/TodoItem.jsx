import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate }) {

  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch({
      type: 'DELETETODO',
      payload: (
        todoName
      ),
    })
  }
  return (
    <div className="container">
      <div className={styles.itemsContainer}>
        <div className={styles.row}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button 
              type="button"
              className={styles.btn}
              onClick={handleDeleteTodo}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
