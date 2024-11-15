import { Like } from "../types/Like";
import { Post } from "../types/Post";
import { Reaction } from "../types/Reaction";
import { Button } from "react-bootstrap";

interface PostProps {
  post: Post;
  reactions: Reaction[];
  setLikes: React.Dispatch<React.SetStateAction<Like[] | undefined>>;
}

export const ReactPost = ({ post, reactions, setLikes }: PostProps) => {
  const createReaction = (reaction: Reaction) => {
    console.log(reaction);

    console.log(post);

    const newLike: Like = {
      id: Math.random(),
      reaction: reaction,
      date: new Date().toISOString().slice(0, 10),
      likeBy: {
        id: 1,
        name: "John Doe",
        avatarUrl: "https://via.placeholder.com/150",
      },
      post: post,
    };

    console.log(newLike);

    setLikes((prevLikes) => (prevLikes ? [...prevLikes, newLike] : [newLike]));
  };

  return (
    <div>
      <p>{post.text}</p>
      {reactions.map((reaction) => (
        <Button
          key={reaction.reaction}
          onClick={() => createReaction(reaction)}
        >
          <span key={reaction.reaction}>{reaction.svg}</span>
        </Button>
      ))}
    </div>
  );
};
