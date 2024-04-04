import { useRef } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const name = useRef(null);
  const dueDate = useRef(null);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (name.current.value == "" || dueDate.current.value == "") {
      alert("Please Enter Todo!");
    } else {
      dispatch({
        type: "ADDTODO",
        payload: {
          name: name.current.value,
          dueDate: dueDate.current.value,
        },
      });
      name.current.value = "";
      dueDate.current.value = "";
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-5">
          <input type="text" placeholder="Enter Todo Here" ref={name} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button type="button" className="add-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
