import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Button, TextField } from "@mui/material";
import { atom } from "recoil";

function Course() {
  let { courseID } = useParams();
  const [courses, setCourses] = useState([]);
  
  
  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
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

  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseID) {
      course = courses[i];
      break;
    }
  }
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <CourseCard course={course} />
      </div>
      <div>
        <UpdateCard courses={courses} course={course} setCourses={setCourses} />
      </div>
    </div>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const course = props.course;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
        <Typography variant="h6">Update Course Details</Typography>
        <div>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            label="Title"
            variant="filled"
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            label="Description"
            variant="filled"
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            label="Image Link"
            variant="filled"
          />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              function callback2(data) {
                let updatedCourses = [];

                for (let i = 0; i < props.courses.length; i++) {
                  if (props.courses[i].id == course.id) {
                    updatedCourses.push({
                      id: course.id,
                      title: title,
                      description: description,
                      image: Image,
                    });
                  } else {
                    updatedCourses.push(props.courses[i]);
                  }
                }
                {
                }
                // alert("Course updated!");
                props.setCourses(updatedCourses);
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              fetch("http://localhost:3000/admin/courses/" + course.id, {
                method: "PUT",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  ImageLink: Image,
                  published: true,
                }),
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then(callback1);
            }}
          >
            Update Course
          </Button>
        </div>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "auto",
        padding: "100px",
      }}
    >
      <Card
        style={{
          minWidth: 300,
          margin: "10px",
          padding: "20px", // Add padding to the course card
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add a shadow effect
          borderRadius: "8px", // Round the corners
        }}
      >
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="subtitle1">{course.description}</Typography>
        <img
          src={course.ImageLink}
          alt={course.title}
          style={{ width: "100%", height: "auto", marginTop: "10px" }}
        />
      </Card>
    </div>
  );
}

export default Course;

const coursesState = atom({
  key: 'coursesState',
  default: [],
});