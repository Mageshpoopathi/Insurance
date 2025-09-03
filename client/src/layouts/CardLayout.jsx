import { Stack, Paper, Typography, Avatar } from "@mui/material";
import React from "react";

const CardLayout = () => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      height={"20%"}
      padding={1}
      marginBottom={1}
      width={"100%"}
    
      borderRadius={2}
      boxShadow="inset 0px 4px 10px rgpa(0,0,0,0.6)"
    >
      <Paper
        elevation={0}
        sx={{
          p: 1,
          boxShadow: " 0px 2px 12px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        }}
        style={{ height: "100px", width: "200px" }}
      >
        <Typography fontSize={10}>personal client's</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ height: 25, width: 25, bgcolor: "primary.main" }}
          ></Avatar>
          <Typography
            component={"h6"}
            sx={{
              fontFamily: "serif",
            }}
          >
            Total number of clients
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "cursive",
            ml: "30px",
            color: "text.primary",
          }}
        >
          10
        </Typography>
      </Paper>
       <Paper
        elevation={0}
        sx={{
          p: 1,
          boxShadow: " 0px 2px 12px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        }}
        style={{ height: "100px", width: "200px" }}
      >
        <Typography fontSize={10}>personal client's</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ height: 25, width: 25, bgcolor: "primary.main" }}
          ></Avatar>
          <Typography
            component={"h6"}
            sx={{
              fontFamily: "serif",
            }}
          >
            Total number of clients
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "cursive",
            ml: "30px",
            color: "text.primary",
          }}
        >
          10
        </Typography>
      </Paper>
       <Paper
        elevation={0}
        sx={{
          p: 1,
          boxShadow: " 0px 2px 12px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        }}
        style={{ height: "100px", width: "200px" }}
      >
        <Typography fontSize={10}>personal client's</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ height: 25, width: 25, bgcolor: "primary.main" }}
          ></Avatar>
          <Typography
            component={"h6"}
            sx={{
              fontFamily: "serif",
            }}
          >
            Total number of clients
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "cursive",
            ml: "30px",
            color: "text.primary",
          }}
        >
          10
        </Typography>
      </Paper>
        <Paper
        elevation={0}
        sx={{
          p: 1,
          boxShadow: " 0px 2px 12px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        }}
        style={{ height: "100px", width: "200px" }}
      >
        <Typography fontSize={10}>personal client's</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{ height: 25, width: 25, bgcolor: "primary.main" }}
          ></Avatar>
          <Typography
            component={"h6"}
            sx={{
              fontFamily: "serif",
            }}
          >
            Total number of clients
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "cursive",
            ml: "30px",
            color: "text.primary",
          }}
        >
          10
        </Typography>
      </Paper>
 
    </Stack>
  );
};

export default CardLayout;
