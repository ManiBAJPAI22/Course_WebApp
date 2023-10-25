import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {useHistory} from 'react-router-dom';

import React from "react";
import SignUp from "./SignUp.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AddCourse.jsx";
import SignIn from "./SignIn.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";

function App() {
  return (
    <div
      style={{ width: "100hw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseID" element={<Course />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
