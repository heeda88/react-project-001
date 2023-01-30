import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import NavBarHeader from "./components/Nav";

function App() {
  return (
    // only for git hub
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <BrowserRouter>
        <NavBarHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
          <Route path="/detail" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
