import { useMemo, useState } from "react";

import PostForm from "../PostForm/PostForm";

import PostList from "../PostList/PostList";

import PostFilter from "../PostFilter/PostFilter";
import Modal from "../UI/Modal/Modal";
import MyButton from "../UI/button/MyButton";

function Post() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "This text is full of emotions" },
    { id: 2, title: "Abobus", body: "zzz" },
    { id: 3, title: "bbb 3", body: "ccc" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}> Создать пост </MyButton>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedAndSearchPosts}
        remove={removePost}
        title="Посты про Js"
      />
    </div>
  );
}

export default Post;
