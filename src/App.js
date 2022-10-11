import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/posts/Posts";
import StorySection from "./components/StorySection";

function App() {
  return (
    <div className="App">
      <Header />
      <StorySection />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
