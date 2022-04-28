import { useMemo, useState } from "react";

import PostForm from "../PostForm/PostForm";

import PostList from "../PostList/PostList";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

function Post() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "This text is full of emotions" },
    { id: 2, title: "Abobus", body: "zzz" },
    { id: 3, title: "bbb 3", body: "ccc" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }

    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const sortPost = (sort) => {
    setSelectedSort(sort);
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
        <Input
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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

      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchPosts}
          remove={removePost}
          title="Посты про Js"
        />
      ) : (
        <h1>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default Post;
