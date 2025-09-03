import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";

const Sidebar = () => {
  return (
    <Box
      margin={0}
      padding={0}
      bgcolor={"white"}
      height={"100vh"}
      width={"20%"}
      boxShadow={2}
      position={'fixed'}
    >
      <Stack direction={"row"} spacing={1} padding={2} alignItems="center">
        <Avatar
          variant="rounded"
          alt="expleoLogo"
          src="./src/assets/expleo.webp"
        />
        <Typography variant="h6" fontWeight="bold" color="primary">
          ExpleoInsurance
        </Typography>
      </Stack>

      <Divider variant="middle" sx={{ my: 1 }} />

      <Accordion disableGutters sx={{ m: 0, p: 0, boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            Client Maintenance
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            pl: 4,
            py: 0.5,
            m: 0,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Client Dashboard
          </Typography>
        </AccordionDetails>
        <AccordionDetails sx={{ textAlign: "start" }}>
          <Accordion disableGutters sx={{ m: 0, p: 0, boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ pl: 2, py: 0.5 }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                New Client Creation
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ textAlign: "right" }}>
              <Typography variant="body2" color="text.secondary">
                New Personal Client
              </Typography>
            </AccordionDetails>

            <AccordionDetails sx={{ textAlign: "right" }}>
              <Typography variant="body2" color="text.secondary">
                New Corporate Client
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

    <Divider variant="fullWidth" sx={{ my: 1 }} />

<Stack direction="column" spacing={1} alignItems="center">
  <Typography variant="subtitle2" fontStyle="italic">
    Messages
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Client Number : 12345
  </Typography>
</Stack>

    </Box>
  );
};

export default Sidebar;
