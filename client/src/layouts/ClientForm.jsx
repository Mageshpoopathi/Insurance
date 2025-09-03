import {
  Box,
  Typography,
  TextField,
  Paper,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

const initialState = {
  FirstName: "",
  Surname: "",
  EmailAddress: "",
  DateOfBirth: "",
  Gender: "",
  MaritalStatus: false,
  Salutation: "",
  InceptionDate: "",
  Income: 0,
  LineofBusiness: "",
  IDtype: "",
  IDNumber: "",
  AddressType: "",
  PostalCode: 0,
  BuildingName: "",
  StreetName: "",
  District: "",
  City: "",
  Country: "",
};

const ClientForm = () => {
  const [personalClient, setPersonalClient] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // ✅ Ensure correct types
    if (name === "Income" || name === "PostalCode") {
      newValue = Number(value);
    }
    if (name === "MaritalStatus") {
      newValue = value === "true"; // convert string → boolean
    }

    setPersonalClient({
      ...personalClient,
      [name]: newValue,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      console.log("form submitted", personalClient);
      await axios.post(
        "http://localhost:5000/newPersonalClient",
        personalClient
      );
    } catch (error) {
      console.log(error);
    }
    setPersonalClient(initialState);
  };

  return (
    <Box
      height={"50%"}
      width={"50%"}
      borderRadius={"2px"}
      padding={"2px"}
    >
      <form onSubmit={handleForm}>
        <Paper elevation={3} sx={{ borderRadius: 2, m: 2, p: 3 }}>
          <Typography fontFamily={"revert-layer"} variant="h6" gutterBottom>
            Client Information
          </Typography>
          <Divider variant="left"></Divider>
          <Grid container spacing={2}>
            <Grid container rowSpacing={2}>
              <Typography fontFamily={"serif"} component={"span"}>
                Users new Client number
              </Typography>
              <TextField
                label="Client No"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: "true" }}
              />
            </Grid>
            <Grid>
              <TextField
                name="FirstName"
                label="First Name"
                value={personalClient.FirstName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                name="Surname"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={personalClient.Surname}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                name="EmailAddress"
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                value={personalClient.EmailAddress}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="Date of Birth"
                type="date"
                name="DateOfBirth"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={personalClient.DateOfBirth}
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <TextField
                name="Gender"
                label="Gender"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={personalClient.Gender}
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel id="marital-status-label">
                  Marital Status
                </InputLabel>

                <Select
                  style={{ width: "190px", height: "33px" }}
                  name="MaritalStatus"
                  labelId="marital-status-label"
                  id="demo-simple-select-helper"
                  value={personalClient.MaritalStatus.toString()}
                  label="MaritalStatus"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="true">Married</MenuItem>
                  <MenuItem value="false">Single</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <TextField
                name="Salutation"
                label="Salutation"
                variant="outlined"
                fullWidth
                value={personalClient.Salutation}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Divider variant="middle" style={{ marginTop: "20px" }}></Divider>

          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "10px" }}
            fontFamily={"revert-layer"}
          >
            More Client Details
          </Typography>
          <Divider variant="left" style={{ marginBottom: "20px" }}></Divider>
          <Grid container spacing={2}>
            <Grid container rowSpacing={4}>
              <TextField
                label="Inception Date"
                type="date"
                name="InceptionDate"
                value={personalClient.InceptionDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                name="Income"
                label="Income"
                type="number"
                fullWidth
                value={personalClient.Income}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="Line of Business"
                fullWidth
                name="LineofBusiness"
                value={personalClient.LineofBusiness}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="ID Type"
                fullWidth
                name="IDtype"
                value={personalClient.IDtype}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="ID Number"
                type="text"
                fullWidth
                name="IDNumber"
                value={personalClient.IDNumber}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={3} sx={{ borderRadius: 2, m: 2, p: 3 }}>
          <Typography variant="h6" gutterBottom  fontFamily={"revert-layer"}>
            Client Address Details
          </Typography>
          <Divider variant="left" style={{ marginBottom: "20px" }}></Divider>
          <Grid container spacing={2}>
            <Grid>
              <TextField
                label="Address Type"
                fullWidth
                name="AddressType"
                value={personalClient.AddressType}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                type="number"
                label="Postal Code"
                fullWidth
                name="PostalCode"
                value={personalClient.PostalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <TextField
                label="Building Name"
                fullWidth
                name="BuildingName"
                value={personalClient.BuildingName}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="Street Name"
                fullWidth
                name="StreetName"
                value={personalClient.StreetName}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="District"
                fullWidth
                name="District"
                value={personalClient.District}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="City"
                fullWidth
                name="City"
                value={personalClient.City}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid>
              <TextField
                label="Country"
                fullWidth
                name="Country"
                value={personalClient.Country}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Submit Button */}
        <Box textAlign="center" mt={3}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            style={{borderRadius:'10px',}}
            
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;
