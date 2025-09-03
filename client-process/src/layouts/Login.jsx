import { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import expleoLogo from "../assets/expleo.webp";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleTwoTone from "@mui/icons-material/AccountCircleTwoTone";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    console.log(loginData);

    try {
      await axios.post(import.meta.url + "/login", loginData);
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <Grid justifySelf={"center"} marginTop={"50px"}>
      <Box
        height={"70%"}
        width={"400px"}
        bgcolor={"white"}
        justifyItems={"center"}
        padding={"20px"}
        borderRadius={"10px"}
        boxShadow={"0 0 3px black "}
      >
        <Avatar alt="expleo logo" src={expleoLogo} />
        <p style={{fontSize:17,fontWeight:"bold"}}>Welcome back</p>
        <p>Please enter your details to login</p>

        <Stack direction={"column"} spacing={3} justifyContent={"center"}>
          <TextField
            id="outlined-start-adornment"
            label="Email"
            sx={{boxShadow:"1px 1px 1px ",
              borderRadius:"4px"
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">

                               <AccountCircleTwoTone />
                   
                  </InputAdornment>
                ),
              },
            }}
          />
          {/* <a href="#">Forgot password?</a> */}

          <TextField
            id="outlined-start-adornment"
            label="Password"
            type="password"
               sx={{boxShadow:"1px 1px 1px ",
              borderRadius:"4px"
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />

          <Button variant="outlined" bor>
            Sign in
          </Button>
        </Stack>
      </Box>
    </Grid>
    // <Stack>
    //

    //   <form onSubmit={handleLogin}>
    //     {/* <label>Email</label> */}
    //     {/* <input
    //   type="email"
    //   value={email}
    //   placeholder="example@gmail.com"
    //   onChange={(e) => setEmail(e.target.value)}
    //   required
    // /> */}

    //     <a href="#">Forgot password?</a>

    //     <div className="remember-me">
    //       <input type="checkbox" />
    //       <label>Remember me</label>
    //     </div>

    //     <button type="submit">Log in</button>
    //   </form>

    //   <div className="social-login">
    //     <button>Continue with Google</button>
    //     <button>Continue with Expleo</button>
    //   </div>

    //   <div className="signup-section">
    //     <label>Don't have account?</label>
    //     <a href="#">Sign Up</a>
    //   </div>
    // </Stack>
  );
};
export default Login;
