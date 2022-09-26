import { Route, Routes } from "react-router-dom";
import Todo from "./Todo/Todo";
import Home from "./Home/Home";
import Nav from "./Nav/HeadingNav";
import "./index.css";
function App() {
  console.log("Render!!");
  return (
    <div className="container">
      <div className="nav">
        <Nav />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
