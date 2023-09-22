import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
