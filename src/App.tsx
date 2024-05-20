import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import AddUser from "./pages/AddUser";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="user/:id" element={<UserInfo />} />
          <Route path="posts/new/:id" element={<AddPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
