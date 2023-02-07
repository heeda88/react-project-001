import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import About from "./routes/About";
import NavBarHeader from "./components/Nav";
import GridDiv from "./routes/GridDiv";
import ToDo from "./routes/ToDo";

function App() {
  return (
    <div>
      {/* <!-- only for gh pages --> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* local  */}
        {/* <BrowserRouter> */}
        <NavBarHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
          <Route path="/search/:keyword" element={<Search />}></Route>
          <Route path="/detail" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/grid" element={<GridDiv />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
