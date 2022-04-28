import "./PostList.scss";

import React from "react";
import Posts from "../Posts/Posts";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1> Посты не найдены</h1>;
  }
  return (
    <div>
      <h1 className="Posts_List">{title}</h1>
      {posts.map((post, index) => (
        <Posts remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
}
