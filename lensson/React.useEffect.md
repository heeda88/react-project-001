# React.useEffect

렌더링이 최초 실행시에만 진행됨

```jsx
React.useEffect(function,[])
```

# 전문

```jsx
import Button from "./Button";
import styles from "./App.module.css";
import React from "react";
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  };
  const MemoBtn = React.memo(Button);
  const iRunOnlyOne = () => {
    console.log("only One?");
  };
  console.log("allTime : call an api");
  React.useEffect(iRunOnlyOne, []);

  return (
    <div>
      <h1 className={styles.title}> {counter}</h1>
      <button onClick={onClick}> Click me! </button>
      <MemoBtn text="Click me" eventFunchtion={onClick} />
    </div>
  );
}

export default App;
```

```jsx
const [keyword, setKeyword] = React.useState("");
const [counter, setCounter] = React.useState(0);

React.useEffect(함수, [state, state]);
React.useEffect(onlyOnChage, [keyword]);
React.useEffect(onClick, [keyword]);
```

```jsx
import Button from "./Button";
import styles from "./App.module.css";
import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [keyword, setKeyword] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((current) => current + 1);
  };
  const onlyOnChage = () => {
    console.log("SEARCH FOR ", keyword);
  };

  React.useEffect(onlyOnChage, [keyword]);
  React.useEffect(onClick, [keyword]);

  const MemoBtn = React.memo(Button);

  console.log("allTime");

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search herer..."
      />
      <br />
      <h1 className={styles.title}> {counter}</h1>
      <button onClick={onClick}> Click me! </button>
      <br />
      <MemoBtn text="Click me" eventFunchtion={onClick} />
      <br />
      <MemoBtn text="Only one Button" eventFunchtion={onClick} />
    </div>
  );
}
export default App;
```

```jsx
import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }

  function hiFn() {
    console.log("creadtd :)");
    return byeFn;
  }

  useEffect(hiFn, []);
  // useEffect(() => {
  //   console.log("Created :)");
  //   return () =>
  //     console.log(
  //       "destroyed :( [ H1 ]   Why?  What the Fuck played this place"
  //     );
  // }, []);
  return <h1> Hello </h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}
export default App;
```


Hello 함수 내에서 
useEffect는 첫 실행, 그리고 dependancy 의존하여 동작함

그래서 첫 실행시 hiFn이 실행되고 