import React, { useState, useContext } from "react";
import writePost from "services/write-post";
import { PostsContext } from "contexts";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(PostsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    writePost(title);
    dispatch({
      type: "CREATE_POST",
      payload: {
        title: title,
      },
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PostForm;
