import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

function SignIn() {
  return (
    <div>
      
        <div style={{ paddingTop: "150px", marginBottom: "10px", display: "flex", justifyContent:"center" }}>
          <Typography variant={"h6"}>
            Welcome back. SignIn Below 
          </Typography>
        </div>
       
      <div style={{display:"flex", justifyContent: "center"}}>
        <Card variant={"outlined"} style={{ width: "400px", padding: "20px" }}>
          <TextField
            fullWidth={true}
            id="filled-basic"
            label="Email"
            variant="filled"
          />

          <br />
          <br />
          <TextField
            fullWidth={true}
            id="filled-basic"
            label="Password"
            variant="filled"
          />

          <br />
          <br />
          <Button variant="contained">Sign Up</Button>
        </Card>
      </div> 
    </div>
  );
}

export default SignIn;
