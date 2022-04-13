import { useState } from "react";

import "./App.css";

import Calc from "./components/Calc/Calc";
import Header from "./components/Header";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Header />
      <PostForm create={createPost} />

      {posts.length !== 0 ? (
        <PostList posts={posts} remove={removePost} title="Посты про Js" />
      ) : (
        <h1>Посты не найдены!</h1>
      )}

      <Calc />
    </div>
  );
}

export default App;
