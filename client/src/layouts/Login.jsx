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
import Button from "@mui/material/Button";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import BusinessIcon from "@mui/icons-material/Business";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log("Login attempt:", loginData);

    try {
      await axios.post("http://localhost:5000/login", loginData);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <Grid container justifyContent="center" marginTop="60px">
      <Box
        width="450px"
        height={"500px"}
        bgcolor="white"
        paddingTop={"20px"}
        borderRadius="16px"
        boxShadow="0 4px 15px rgba(0,0,0,0.6)"
      >
        <Avatar
          alt="expleo logo"
          src={expleoLogo}
          sx={{ margin: "auto", width: 64, height: 64 }}
        />
        <p
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            color: "#1976d2",
            letterSpacing: "0.5px",
          }}
        >
          Welcome Back
        </p>

        <p
          style={{
            textAlign: "center",
            color: "gray",
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          Please enter your details to login
        </p>

        <form onSubmit={handleLogin}>
          <Stack direction="column" spacing={3} paddingLeft={"60px"}>
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleTwoTone color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "12px",
                width: "300px",
                height: "50px",
                backgroundColor: "#f9f9f9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": { borderColor: "#1976d2" },
                  "&:hover fieldset": { borderColor: "#1565c0" },
                  "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
                },
              }}
              required
            />

            <TextField
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOutlined color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                margin: 0,
                borderRadius: "12px",
                width: "300px",
                height: "50px",
                backgroundColor: "#f9f9f9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": { borderColor: "#1976d2" },
                  "&:hover fieldset": { borderColor: "#1565c0" },
                  "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
                },
              }}
              required
            />

 
            <Stack paddingLeft={"60px"} spacing={1}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  width: "200px",
                }}
              >
                Sign In
              </Button>
              <p style={{ color: "gray", paddingTop: "2px" }}>
                ─── or continue with ───
              </p>

              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: "bold",
                  width: "200px",
                }}
              >
                Continue with Google
              </Button>

              <Button
                variant="outlined"
                startIcon={<BusinessIcon />}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: "bold",
                  width: "200px",
                }}
              >
                Continue with Expleo
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
