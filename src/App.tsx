import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/Main/Main";
import Schedule from "./pages/Dashboard/Schedule/Schedule";
import { Courses } from "./pages/Dashboard/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
