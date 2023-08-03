import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { InputLabel, Grid, Autocomplete, useMediaQuery, TextField, Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'


const Addcontact = ({toggle}) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const clients = [{ name: 'oracle', id: '1' }, { name: 'polina', id: '2' }, { name: 'hamadiabid', id: '3' }, { name: 'mg', id: '4' },];
    const Division = [{ name: 'soukra', client: 'oracle' }, { name: 'ariana', client: 'polina' }, { name: 'carthage', client: 'hamadiabid' }];

    const [clientSelected, setClientSelected] = useState(null);
    const [divisionFiltred, setDivisionFiltred] = useState([]);
    const [divisionSelected, setDivisionselected] = useState(null);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [description, setDescription] = useState()

    const handelClient = (event, value) => {
        var Divisfiltred = []
        setClientSelected(value)

        if (clientSelected) {
            Divisfiltred = Division.filter((divis) => {
                return divis.client === clientSelected.name
            })
        }
        (Divisfiltred) ? setDivisionFiltred(Divisfiltred) : null
    }
    const handelDivisionSelected = (event, value) => {

        setDivisionselected(value)

    }

    const handelFirstName = (event) => {
        setFirstName(event.target.value)
    };
    const handellastName = (event) => {
        setLastName(event.target.value)
    };
    const handelEmail = (event) => {
        setEmail(event.target.value)
    };
    const handelPhone = (event) => {
        setPhone(event.target.value)
    }
    const handeldescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = () => {
        toggle(false)
    
    }

    return (
        <MainCard title="Add Contact" >
            <Grid item xs={12} sm={6} >
                <form onSubmit={handleSubmit}  >
                    <Grid container spacing={matchDownSM ? 0 : 2}>
                        <Grid item xs={12} sm={60}>
                            <Autocomplete
                                sx={{ width: '40%', marginBottom: 2 }}
                                options={clients}
                                getOptionLabel={(option) => option.name}
                                value={clientSelected}
                                onChange={handelClient}
                                renderInput={(params) => {

                                    return (
                                        <TextField {...params} label="Select Client" />
                                    )
                                }}
                            />
                            {clientSelected ? <>
                                <Grid item xs={12} sm={60}>
                                    <Autocomplete
                                        sx={{ width: '40%' }}
                                        options={divisionFiltred}
                                        getOptionLabel={(option) => option.name}
                                        value={divisionSelected}
                                        onChange={handelDivisionSelected}
                                        renderInput={(params) => {

                                            return (
                                                <TextField {...params} label="Select Division" />
                                            )
                                        }}
                                    />
                                </Grid>
                            </> : null}
                        </Grid>
                        {clientSelected && divisionSelected ? <>
                            <Grid item xs={12} sm={60}>
                                <TextField

                                    label=" First Name"
                                    margin="normal"
                                    type="text"
                                    value={firstName}
                                    onChange={handelFirstName}
                                    required
                                    sx={{ ...theme.typography.customInput, width: '40%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={60}>
                                <TextField

                                    label=" Last Name"
                                    margin="normal"
                                    type="text"
                                    value={lastName}
                                    onChange={handellastName}
                                    required
                                    sx={{ ...theme.typography.customInput, width: '40%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={60}>
                                <TextField

                                    label=" Email"
                                    margin="normal"
                                    type="text"
                                    value={email}
                                    onChange={handelEmail}
                                    required
                                    sx={{ ...theme.typography.customInput, width: '40%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={60}>
                                <TextField

                                    label=" Phone"
                                    margin="normal"
                                    type="number"
                                    value={phone}
                                    onChange={handelPhone}
                                    required
                                    sx={{ ...theme.typography.customInput, width: '40%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={60}>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <TextField


                                    margin="normal"
                                    type="text"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    value={description}
                                    onChange={handeldescription}
                                    required
                                    sx={{ ...theme.typography.customInput, width: '60%' }}
                                />
                            </Grid>

                        
                    
                    <Box sx={{ mt: 2, }}>
                        <Button disableElevation size="large" type="submit" variant="contained" color="secondary">
                            Add
                        </Button>
                    </Box>
                    </> : null}
                    </Grid>
                </form>
            </Grid>




        </MainCard>
    )
}

export default Addcontact