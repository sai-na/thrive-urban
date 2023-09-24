import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import PostPage from "./components/PostPage";
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StepsComponent from "./components/T";
import { ToastContainer } from "react-toastify";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <ToastContainer limit={2} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/updatePost/:id" element={<Update />} />
            <Route
              path="/createPost"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
