import { Post } from "../types/Post";
import { Like } from "../types/Like";
import { Card } from "react-bootstrap";
import { ReactPost } from "./ReactPost";
import { Reaction } from "../types/Reaction";
import { ComentPost } from "./ComentPost";
import { Coment } from "../types/Coment";

type ShowPostProps = {
  post: Post;
  likes: Like[];
  setLikes: React.Dispatch<React.SetStateAction<Like[] | undefined>>;
  reactions: Reaction[];
  setComents: React.Dispatch<React.SetStateAction<Coment[] | undefined>>;
  coments: Coment[];
};

export const ShowPost = ({
  post,
  likes,
  setLikes,
  reactions,
  setComents,
  coments,
}: ShowPostProps) => {
  const likeCount = likes.filter(
    (like) => like.post.id === post.id && like.reaction.reaction === "Like"
  ).length;
  const dislikeCount = likes.filter(
    (like) => like.post.id === post.id && like.reaction.reaction === "Dislike"
  ).length;

  const reactionCount = likes.length;

  const reactionSvgs = likes
    .map((like) => like.reaction.svg)
    .filter((svg, index, self) => index === self.indexOf(svg));

  console.log("Like count:", likeCount);
  console.log("Dislike count:", dislikeCount);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{post.text}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
        <Card.Text>quem postou: {post.postBy?.name}</Card.Text>
        {likes.length > 0 && (
          <>
            <Card.Text>
              reacoes {reactionCount} {reactionSvgs}
            </Card.Text>
          </>
        )}
        <ReactPost post={post} reactions={reactions} setLikes={setLikes} />
        <ComentPost post={post} setComents={setComents} coments={coments} />
      </Card.Body>
    </Card>
  );
};
