import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ClientModel = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Paper>
      <Button onClick={handleOpen}> hello</Button>
      <Modal open={open}>
        <Stack
          bgcolor={"white"}
          borderRadius={2}
          height={"50%"}
          width={"50%"}
          alignItems={"center"}
          spacing={1}
          padding={"2%"}
        >
          <Typography component={"h6"} fontFamily={"serif"} fontSize={20}>
            {" "}
            Create a new Client
          </Typography>
          <Typography component={"h6"} fontFamily={"serif"}>
            Start creating your client by selecting the most relevant type
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Paper
              elevation={2}
              style={{
                height: "110px",
                width: "200px",
                alignContent: "center",
              }}
            >
              <Stack direction={"column"} spacing={1} alignItems={"center"}>
                <Avatar style={{ height: "20px", width: "20px" }}></Avatar>
                <Typography component={"h6"} fontFamily={"serif"}>
                  Personal Client
                </Typography>
                <Typography component={"span"} fontFamily={"serif"}>
                  used to create new Client
                </Typography>
              </Stack>
            </Paper>
            <Paper
              elevation={2}
              style={{
                height: "110px",
                width: "200px",
                alignContent: "center",
              }}
            >
              <Stack direction={"column"} spacing={1} alignItems={"center"}>
                <Avatar style={{ height: "20px", width: "20px" }}></Avatar>
                <Typography component={"h6"} fontFamily={"serif"}>
                  Corporate Client
                </Typography>
                <Typography component={"span"} fontFamily={"serif"}>
                  used to create new Client
                </Typography>
              </Stack>
            </Paper>
          </Stack>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  width: "100px",
                }}
              >
                Submit
              </Button>
        </Stack>
      </Modal>
    </Paper>
  );
};
export default ClientModel;
