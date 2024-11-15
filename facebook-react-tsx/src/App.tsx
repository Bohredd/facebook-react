import "./App.css";
import { useState, useEffect } from "react";
import { Post } from "./types/Post";
import { ShowPost } from "./components/ShowPost";
import { CreatePost } from "./components/CreatePost";
import { User } from "./types/User";
import { Like } from "./types/Like";
import { Reaction } from "./types/Reaction";
import { Coment } from "./types/Coment";

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const [users, setUsers] = useState<User[]>();
  const [likes, setLikes] = useState<Like[]>();
  const [reactions, setReactions] = useState<Reaction[]>();
  const [coments, setComents] = useState<Coment[]>();

  useEffect(() => {
    setReactions([
      { reaction: "Like", svg: "👍" },
      { reaction: "Dislike", svg: "👎" },
    ]);
  }, []);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "John Doe",
        avatarUrl: "https://via.placeholder.com/150",
        friends: [],
      },
      {
        id: 2,
        name: "Jane Doe",
        avatarUrl: "https://via.placeholder.com/150",
        friends: [],
      },
    ]);
  }, []);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        text: "Hello, World!",
        date: "2021-09-01",
        postBy: users?.[0],
      },
      {
        id: 2,
        text: "This is my first post.",
        date: "2021-09-02",
        postBy: users?.[0],
      },
    ]);
  }, [users]);

  useEffect(() => {
    setLikes([
      {
        id: 1,
        reaction: reactions?.[0] as Reaction,
        date: "2021-09-01",
        likeBy: users?.[1] as User,
        post: posts?.[0] as Post,
      },
      {
        id: 2,
        reaction: reactions?.[0] as Reaction,
        date: "2021-09-02",
        likeBy: users?.[1] as User,
        post: posts?.[1] as Post,
      },
      {
        id: 3,
        reaction: reactions?.[1] as Reaction,
        date: "2021-09-03",
        likeBy: users?.[0] as User,
        post: posts?.[1] as Post,
      },
      {
        id: 4,
        reaction: reactions?.[1] as Reaction,
        date: "2021-09-04",
        likeBy: users?.[0] as User,
        post: posts?.[1] as Post,
      },
    ]);
  }, [users, posts, reactions]);

  return (
    <>
      {users && users.length > 0 && (
        <CreatePost user={users[0] as User} setPosts={setPosts} />
      )}{" "}
      {posts?.map((post) => (
        <ShowPost
          key={post.id}
          post={post}
          likes={likes?.filter((like) => like.post == post) || []}
          setLikes={setLikes}
          reactions={reactions || []}
          setComents={setComents}
          coments={coments}
        />
      ))}
    </>
  );
}

export default App;
