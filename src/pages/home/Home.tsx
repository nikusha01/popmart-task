import PostList from "../../components/PostList";
import { useFetch } from "../../hooks/useFetch";

import "./Home.css";
import { IPost } from '../../interfaces/posts'
import { useSearch } from "../../context/Appcontext";

export default function Home() {
  const { searchTerm } = useSearch();
  const { data, isPending, error } = useFetch<IPost[]>("https://jsonplaceholder.typicode.com/posts");

  const filteredPosts = data ? data.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {data && <PostList posts={filteredPosts}/>}
    </div>
  );
}
