import styles from "../css/ToDo.module.css";
import { useState } from "react";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentarray) => {
      return [todo, ...currentarray];
    });
    setTodo("");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>To Do List</div>
      <form onSubmit={onSubmit}>
        <div className={styles.todo_input + " " + "form-group"}>
          <div></div>
          <input
            value={todo}
            onChange={onChange}
            className="form-control"
            placeholder="please here text"
          />
          <button type="submit" onSubmit={onSubmit} className="btn">
            Submit
          </button>
        </div>
      </form>

      {todos
        ? todos.map((todo, index) => {
            return (
              <div key={index} className={styles.todo_item}>
                <div className={styles.todo_item_header}></div>
                <input
                  readOnly
                  className={styles.todo_item_body + " " + "form-control"}
                  value={todo}
                />
                <button className={styles.todo_item_footer + " " + "btn"}>
                  X
                </button>
              </div>
            );
          })
        : "Not yet"}
    </div>
  );
}

export default ToDo;
