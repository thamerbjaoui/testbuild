import MainCard from 'ui-component/cards/MainCard';
import React, { useState } from 'react';
//import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { TextField, Grid, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import AnimateButton from 'ui-component/extended/AnimateButton'
const Addclient = () => {
    const theme = useTheme();
    const [client, setClient] = useState('')
    const handelclient = (event) => {
      setClient(event.target.value)
    }
    const handelsubmit = (e) => {
      e.preventDefault()
        console.log(client)
    }
    //const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <MainCard title="Add Client" >
            
            <form onSubmit={handelsubmit}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Name"
                        margin="normal"
                        type="text"
                        value={client}
                        onChange={handelclient}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
                <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button  size="large" type="submit" variant="contained" color="secondary">
                               Add
                            </Button>
                        </AnimateButton>
                    </Box>
            </form>
        </MainCard>
    )
}

export default Addclient