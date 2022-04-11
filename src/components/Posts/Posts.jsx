import "./Posts.scss";

import React from "react";

export default function Posts(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>

      <div className="post_btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}
