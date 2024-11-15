import { User } from "../types/User";
import { useState } from "react";
import { Post } from "../types/Post";

interface CreatePostProps {
  user: User;
  setPosts: React.Dispatch<React.SetStateAction<Post[] | undefined>>;
}

export const CreatePost = ({ user, setPosts }: CreatePostProps) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const getTextPost = () => {
    if (!text) {
      return;
    }

    console.log(text);

    setText(text);
    createPost();
  };

  const createPost = () => {
    const todayString = new Date().toISOString().slice(0, 10);
    console.log(todayString);

    const newPost: Post = {
      id: Math.random(),
      text: text,
      date: todayString,
      postBy: user,
    };

    console.log(newPost);

    setPosts((prevPosts) => (prevPosts ? [...prevPosts, newPost] : [newPost]));

    setText("");
  };

  return (
    <div>
      <h3>Create Post</h3>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleInputChange}
      />

      <button onClick={getTextPost}>Post</button>
    </div>
  );
};
