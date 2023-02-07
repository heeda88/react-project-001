import styles from "../css/ToDo.module.css";
import { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [allCheckd, setAllChecked] = useState(false);
  const [statRadio, setStatRadio] = useState("All");

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentarray) => {
      return [
        {
          id: new Date().getTime(),
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
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(toggled);
  };

  const editTodo = (event, id) => {
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

  const setStat = (stat) => {
    switch (stat) {
      case "":
        return true;
      case "All":
        setStatRadio("All");
        return true;
      case "Active":
        setStatRadio("Active");
        return todo.done == false;
      case "Done":
        setStatRadio("Done");
        return todo.done == true;
      default:
        return true;
    }
  };
  const clearDone = () => {
    const cleaned = todos.filter((todo) => {
      return todo.done !== true;
    });
    setTodos(cleaned);
  };
  function TodosFooter() {
    return (
      <div className={styles.todos_footer}>
        <div className={styles.todos_footer_header + " " + "btn disabled"}>
          {todos.length} Items
        </div>
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
            onChange={() => setStat("All")}
            checked={statRadio == "All" ? true : false}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            All
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            onChange={() => setStat("Active")}
            checked={statRadio == "Active" ? true : false}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Active
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            onChange={() => setStat("Done")}
            checked={statRadio == "Done" ? true : false}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Done
          </label>
        </div>
        <div
          className={styles.todos_footer_footer + " " + "btn"}
          onClick={clearDone}
        >
          Clear Done
        </div>
      </div>
    );
  }
  console.log("render");
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
        ? todos
            .filter((todo) => {
              switch (statRadio) {
                case "":
                  return true;
                case "All":
                  return true;
                case "Active":
                  return todo.done == false;
                case "Done":
                  return todo.done == true;
                default:
                  return true;
              }
            })
            .map((todo) => {
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
                    onDoubleClick={() => {
                      console.log("Double Click");
                    }}
                    onChange={(event) => {
                      editTodo(event, todo.id);
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
        : ""}
      <TodosFooter />
    </div>
  );
}

export default ToDo;

// todos 필터링을 하게도면 삭제됨. 그러니까 위의 todos가 라디오 값에 종속 될 필요가 있음.
//
