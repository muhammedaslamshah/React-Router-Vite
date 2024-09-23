import React from "react";
import TodoApp from "./Components/TodoApp/TodoApp";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
