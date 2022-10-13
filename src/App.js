import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Posts from "./components/posts/Posts";
import ProfilePage from "./components/profilepage/ProfilePage";
function App() {
  return (
    <div className="App">
      <Footer />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
