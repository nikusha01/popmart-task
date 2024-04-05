import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Post.css";
import { IPost } from "../../interfaces/posts";

export default function Post() {
  const { id } = useParams<string>();
  const url = "https://jsonplaceholder.typicode.com/posts?id=" + id;
  const { data: post, isPending, error } = useFetch<IPost>(url);

  console.log(post);
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
