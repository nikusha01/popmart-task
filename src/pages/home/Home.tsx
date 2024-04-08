import { useState, useEffect } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { useSearch } from "../../context/Appcontext";
import { IPost } from '../../interfaces/posts';

import PostList from "../../components/PostList";
import "./Home.css";


export default function Home() {
  const { searchTerm } = useSearch();
  const [start, setStart] = useState<number>(0);
  const limit: number = 10;

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loadingMore, setLoadingMore] = useState<Boolean>(false);

  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
  const { data, isPending, error } = useFetch<IPost[]>(url);

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setLoadingMore(false);
    }
  }, [data]);


  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom && !loadingMore) {
      setStart((prevStart) => prevStart + limit);
      setLoadingMore(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && posts.length === 0 && <p className="loading">Loading...</p>}
      <PostList posts={filteredPosts} />
      {loadingMore && <p>Loading more...</p>}
    </div>
  );
}