import CardLayout from "../layouts/CardLayout";
import ClientDashboard from "../layouts/ClientDashboard";
import DashboardCmp from "../layouts/ClientDashboard";
import Sidebar from "../layouts/Sidebar";
import { Box, Paper, Stack } from "@mui/material";

const DashboardPage = () => {
  return (
    <Stack direction="row" sx={{ height: "100vh"}}>
      <Sidebar />
      <Stack style={{marginLeft:'256px',width:'100%',height:'100vh'}}>
        <CardLayout />
        <ClientDashboard />
      </Stack>
    </Stack>
  );
};

export default DashboardPage;
