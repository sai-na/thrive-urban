import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import PostPage from "./components/PostPage";
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StepsComponent from "./components/T";
import { ToastContainer } from "react-toastify";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <ToastContainer limit={2} />
          <Routes>
            <Route path="/" element={<StepsComponent />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
