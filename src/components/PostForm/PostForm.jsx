import Input from "../UI/input/Input";
import MyButton from "../UI/button/MyButton";

import React from "react";
import { useState } from "react";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      ></Input>
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      ></Input>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
