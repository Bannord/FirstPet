import { useState } from "react";

import PostForm from "../PostForm/PostForm";

import PostList from "../PostList/PostList";
import Select from "../UI/select/Select";

function Post() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "This text is full of emotions" },
    { id: 2, title: "Abobus", body: "zzz" },
    { id: 3, title: "bbb 3", body: "ccc" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <div>
        <Select
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList posts={posts} remove={removePost} title="Посты про Js" />
      ) : (
        <h1>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default Post;
