import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// page components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import { SearchProvider } from "./context/Appcontext";

function App() {
  return (
    <SearchProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
    </SearchProvider>
  );
}

export default App;
