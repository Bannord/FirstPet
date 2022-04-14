import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Post from "./components/Pages/Post";
import Calc from "./components/Calc/Calc";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/post" element={<Post />}></Route>

        <Route path="/calc" element={<Calc />}></Route>
      </Routes>
    </div>
  );
}

export default App;
