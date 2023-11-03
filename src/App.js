import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
