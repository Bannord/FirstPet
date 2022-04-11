import { useState } from "react";
import "./App.css";
import Calc from "./components/Calc/Calc";
import Header from "./components/Header";
import PostList from "./components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <Header />

      <PostList posts={posts} title="Cписок постов" />
      <Calc />
    </div>
  );
}

export default App;
