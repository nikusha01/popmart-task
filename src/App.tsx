import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Post from "./pages/post/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
