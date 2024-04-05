import { Link } from "react-router-dom";

import "./PostList.css";
import { IPost } from "../interfaces/posts";

type Props = {
  posts: IPost[];
};

export default function PostList({ posts }: Props) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  );
}
