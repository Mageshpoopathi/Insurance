import React from "react";
import { Stack,Box } from "@mui/material";
import Sidebar from "../layouts/Sidebar";
import ClientForm from "../layouts/ClientForm";

const ClientCreationPage = () => {
  return (
    <div>
      <div
        style={{
          padding: "5px",
        }}
      >
        <Stack direction="row" sx={{ height: "100vh" }}>
          {/* Sidebar */}

          <Sidebar />

          {/* ClientForm Area */}
          <Box
            sx={{
              marginLeft: "20%", // push content right of sidebar
              width: "80%",
              height: "100vh",
              overflowY: "auto", // scrollable
              p: 2, // optional padding
            }}
          >
            <ClientForm />
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default ClientCreationPage;
