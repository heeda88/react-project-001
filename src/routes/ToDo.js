import styles from "../css/ToDo.module.css";
import { useState } from "react";
import { string } from "prop-types";
function ToDo() {
  const todoObj = {
    id: string,
    bodytext: string,
    done: Boolean,
  };
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [scroll, setScroll] = useState(false);
  const [allCheckd, setAllChecked] = useState(false);
  const [checked, setChecked] = useState();

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentarray) => {
      console.log(todo);
      return [
        {
          id: currentarray.length + 1,
          bodytext: todo,
          done: false,
        },
        ...currentarray,
      ];
    });
    setTodo("");
  };

  const onScrollTodo = () => {
    setScroll(!scroll);
  };

  const onAllChecked = (event) => {
    const toggled = todos.map((todo) => {
      return { ...todo, done: event.target.checked };
    });
    setAllChecked(event.target.checked);
    setTodos(toggled);
  };

  const onChecked = (id) => {
    const toggled = todos.map((todo) => {
      if (todo.id == id) {
        console.log(todo.id, id);
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(toggled);
  };

  const onEdit = (event, id) => {
    const edited = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, bodytext: event.target.value };
      } else {
        return todo;
      }
    });
    setTodos(edited);
  };
  const removeTodo = (id) => {
    const removed = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removed);
  };

  function TodosFooter() {
    return (
      <div className={styles.todos_footer}>
        <div></div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            All
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Active
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Done
          </label>
        </div>
        <div></div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>To Do List</div>
      <form className={styles.todo_input_form} onSubmit={onSubmit}>
        <div className={styles.todo_input + " " + "form-group"}>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              name="scroll"
              id="scrollToDo"
              onClick={onScrollTodo}
            />
            <label className="btn btn-outline-primary" htmlFor="scrollToDo">
              {scroll ? "^" : "v"}
            </label>
            <input
              type="checkbox"
              className="btn-check"
              name="btnscroll"
              id="btnscroll1"
              onChange={onAllChecked}
              checked={allCheckd}
            />
            <label className="btn btn-outline-primary" htmlFor="btnscroll1">
              ALL
            </label>
          </div>
          <input
            value={todo}
            onChange={onChange}
            className="form-control"
            placeholder="please here write that."
            autoFocus={true}
          />
          <button type="submit" onSubmit={onSubmit} className="btn">
            Add
          </button>
        </div>
      </form>
      {todos.length !== 0 && !scroll
        ? todos.map((todo) => {
            return (
              <div key={todo.id} className={styles.todo_item}>
                <div className={styles.todo_item_header}>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      name="btncheck"
                      id={"btn-checkbox" + todo.id}
                      onChange={() => onChecked(todo.id)}
                      checked={todo.done}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor={"btn-checkbox" + todo.id}
                    >
                      Done
                    </label>
                  </div>
                </div>
                <input
                  className={styles.todo_item_body + " " + "form-control"}
                  value={todo.bodytext}
                  onChange={(event) => {
                    onEdit(event, todo.id);
                  }}
                />
                <button
                  className={styles.todo_item_footer + " " + "btn"}
                  onClick={() => removeTodo(todo.id)}
                >
                  X
                </button>
              </div>
            );
          })
        : " "}
      {todos.length !== 0 ? <TodosFooter /> : ""}
    </div>
  );
}

export default ToDo;
