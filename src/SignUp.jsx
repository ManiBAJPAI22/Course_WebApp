import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SignUp() {
  // Giving Id is avoided in React
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: "150px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera, SignUp Below
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: "400px", padding: "20px" }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value); // similar to document.getElementById("")
            }}
            fullWidth={true}
            id="username"
            label="Email"
            variant="filled"
          />

          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            id="password"
            label="Password"
            variant="filled"
          />

          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              function callback2(data) {
                localStorage.setItem("token", data.token);
                window.location = "/"; // storing token in localStorage
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: Password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then(callback1);
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
