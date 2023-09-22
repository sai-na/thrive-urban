import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import PostPage from "./components/PostPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
