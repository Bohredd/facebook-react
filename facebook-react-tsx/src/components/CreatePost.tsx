import { User } from "../types/User";
import { useState } from "react";

interface CreatePostProps {
  user: User;
}

export const CreatePost = ({ user }: CreatePostProps) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const getTextPost = () => {
    console.log(text);
    setText(text);
  };

  return (
    <div>
      <h3>Create Post</h3>
      <p>Posted by: {user.name}</p>
      <input
        type="text"
        placeholder="What's on your mind?"
        onChange={handleInputChange}
      />
      <button onClick={getTextPost}>Post</button>
    </div>
  );
};
