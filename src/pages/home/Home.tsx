import PostList from "../../components/PostList";
import { useFetch } from "../../hooks/useFetch";

import "./Home.css";
import { IPost } from '../../interfaces/posts'

export default function Home() {
  const { data, isPending, error } = useFetch<IPost[]>("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {data && <PostList posts={data}/>}
    </div>
  );
}
