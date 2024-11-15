import { Post } from "../types/Post";
import { Coment } from "../types/Coment";
import { useState } from "react";
import { Card } from "react-bootstrap";

interface CommentPostProps {
  post: Post;
  setComents: React.Dispatch<React.SetStateAction<Coment[] | undefined>>;
  coments: Coment[];
}

export const ComentPost = ({ post, setComents, coments }: CommentPostProps) => {
  const comentsPost = coments;
  console.log("comentarios do post", comentsPost);

  console.log("post", post);

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
    createComent();
  };

  const createComent = () => {
    const todayString = new Date().toISOString().slice(0, 10);
    console.log(todayString);

    const newComent: Coment = {
      id: Math.random(),
      text: text,
      date: todayString,
      commentBy: {
        id: 1,
        name: "John Doe",
        avatarUrl: "https://via.placeholder.com/150",
      },
      post: post,
    };

    console.log(newComent);

    setComents((prevComents) =>
      prevComents ? [...prevComents, newComent] : [newComent]
    );

    setText("");
  };

  return (
    <div>
      {coments &&
        comentsPost.map((coment) => (
          <Card key={coment.id}>
            <p>{coment.text}</p>
            <p>{coment.date}</p>
            <p>{coment.commentBy.name}</p>
          </Card>
        ))}

      <div>
        <input
          type="text"
          placeholder="Comente"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={getTextPost}>Comentar</button>
      </div>
    </div>
  );
};
