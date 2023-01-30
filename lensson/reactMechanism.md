# reactjs 구동원리

아래의 App 함수를 export하여 <br>
index.js 에서 렌더링

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
  console.log("call an api");
  return (
    <div>
      <h1 className={styles.title}> {counter}</h1>
      <button onClick={onClick}> Click me! </button>
      <p></p>
      <MemoBtn text="Click me" eventFunchtion={onClick} />
    </div>
  );
}

export default App;
```
