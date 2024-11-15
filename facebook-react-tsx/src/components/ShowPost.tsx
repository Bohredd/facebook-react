import { Post } from "../types/Post";
import { Like } from "../types/Like";

type ShowPostProps = {
  post: Post;
  likes: Like[];
};

export const ShowPost = ({ post, likes }: ShowPostProps) => {
  return (
    <div>
      <h3>{post.text}</h3>
      <p>{post.date}</p>
      <p>Posted by: {post.postBy?.name}</p>
      {likes.length > 0 && (
        <>
          <p>Reactions:</p>
          <ul>
            {likes.map((like) => (
              <li key={like.id}>
                {like.reaction} by {like.likeBy.name} on {like.date}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
