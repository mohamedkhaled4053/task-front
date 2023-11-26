import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";
import Schedule from "./pages/Dashboard/Schedule/Schedule";
import { Courses } from "./pages/Dashboard/Courses/Courses";
import { Main } from "./pages/Dashboard/Main/Main";
import { Error } from "./pages/Error/Error";
import { Gradebook } from "./pages/Dashboard/Gradebook/Gradebook";
import { Performance } from "./pages/Dashboard/Performance/Performance";
import { Announcements } from "./pages/Dashboard/Announcements/Announcements";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gradebook" element={<Gradebook />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/announcements" element={<Announcements />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
