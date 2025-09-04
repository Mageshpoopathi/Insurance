import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material"
import { useState } from "react";
const ClientModel=()=>{
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    return(
        <Paper>
            <Button onClick={handleOpen}> hello</Button>
        <Modal
        open={open}
       
        >
            <Box bgcolor={"white"} borderRadius={3} padding={'20px'} height={'40%'} width={'40%'} >
                <Typography>User needs to select the type of client</Typography>
                <Stack direction={'row'}>
                    <Paper elevation={2}>
                        <Typography>Personal Client</Typography>
                    </Paper>
                    <Paper elevation={2}>
                        <Typography>Corporate client</Typography>
                    </Paper>
                </Stack>
            </Box>
        </Modal>
        </Paper>
    )
}
export default ClientModel;