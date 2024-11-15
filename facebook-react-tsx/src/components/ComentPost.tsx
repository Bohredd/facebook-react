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

    console.log("novo comentario criado", newComent);
    console.log("Post da pagina: ", post);

    setComents((prevComents) =>
      prevComents ? [...prevComents, newComent] : [newComent]
    );

    setText("");
  };

  return (
    <div>
      {coments &&
        comentsPost
          .filter((coment) => coment.post.id === post.id)
          .map((coment) => (
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
