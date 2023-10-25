import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Courses() {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    function callback2(data) {
      setCourse(data.courses);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Prevents courses from wrapping to a new line
        overflowX: "auto", // Allows horizontal scrolling if courses exceed window width
        padding: "100px", // Add padding to improve spacing
      }}
    >
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

function Course(props) {
  return (
    <Card
      style={{
        minWidth: 300, // Set the minimum width to avoid overlapping
        margin: "10px", // Add margin between each course card
      }}
    >
      <Typography variant="h6">{props.course.title}</Typography>
      <Typography variant="subtitle1">{props.course.description}</Typography>
      <img src={props.course.ImageLink} style={{ width: 300 }} />
    </Card>
  );
}

export default Courses;
