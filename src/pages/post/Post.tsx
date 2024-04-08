import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Post.css";
import { IPost } from "../../interfaces/posts";

export default function Post() {
  const { id } = useParams<string>();
  const url = "https://jsonplaceholder.typicode.com/posts?id=" + id;
  const { data: posts, isPending, error } = useFetch<IPost[]>(url);

  const post = posts && posts[0];

  return (
    <div className="post">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {post && (
        <>
          <h2 className="page-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <Link to="/">Back to All Posts</Link>
        </>
      )}
    </div>
  );
}
