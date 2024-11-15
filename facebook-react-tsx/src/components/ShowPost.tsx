import { Post } from "../types/Post";
import { Like } from "../types/Like";
import { Card } from "react-bootstrap";

type ShowPostProps = {
  post: Post;
  likes: Like[];
};

export const ShowPost = ({ post, likes }: ShowPostProps) => {
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
      </Card.Body>
    </Card>

    // <div className="bg-slate-200">
    //   <h3>{post.text}</h3>
    //   <p>{post.date}</p>
    //   <p>Posted by: {post.postBy?.name}</p>
    //   {likes.length > 0 && (
    //     <>
    //       <p>Reactions:</p>
    //       <ul>
    //         {likes.map((like) => (
    //           <li key={like.id}>
    //             {like.reaction} by {like.likeBy.name} on {like.date}
    //           </li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    // </div>
  );
};
