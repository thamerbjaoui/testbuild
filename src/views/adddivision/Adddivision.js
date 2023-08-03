import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, Autocomplete, useMediaQuery, TextField, Button, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'


const Adddivision = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const clients = [{ name: 'oracle', id: '1' }, { name: 'polina', id: '2' }, { name: 'hamadiabid', id: '3' }, { name: 'mg', id: '4' },] ;
    const [clientselected, setClientselected] = useState(null);
    const [name,setName] = useState('') ;
    const [address,setAddress] = useState('') ;
    const [province,setProvince] = useState('') ;
    const [postal,setPostal] = useState() ;
    const [country,setCountry] = useState('') ;
    const [groupPrd,setGroupPrd] = useState('') ;
    const [resourses,setResourses] = useState('')
    const [divisioncol,setDivisioncol] = useState('')
    const handleClientChange = (event, value) => {
        setClientselected(value);
    };
    const handelName = (event) => {
        setName(event.target.value)
    } ;
    const handelAddress = (event) => {
        setAddress(event.target.value)
    } ;
    const handelProvince = (event) => {
        setProvince(event.target.value)
    } ; 
    const handelPostal = (event) => {
        setPostal(event.target.value)
    } ;
    const handelCountry = (event) => {
        setCountry(event.target.value)
    } ;
    const handelGroupeProduit = (event) => {
        setGroupPrd(event.target.value)
    } ; 
    const handelResourses = (event) => {
        setResourses(event.target.value)
    } ; 
    const handelDivisionCol = (event) => {
        setDivisioncol(event.target.value)
    } ;

    return (
        <MainCard title="Add Division" >
            {console.log('client :', clientselected)}
            <Grid item xs={12} sm={6} >
                <form  >
                    <Grid container spacing={matchDownSM ? 0 : 2}>
                        <Grid item xs={12} sm={60}>
                            <Autocomplete
                                sx={{ width: '20%' }}
                                options={clients}
                                getOptionLabel={(option) => option.name}
                                value={clientselected}
                                onChange={handleClientChange}
                                renderInput={(params) => {

                                    return (
                                        <TextField {...params} label="Select Client" />
                                    )
                                }}
                            />
                        </Grid>

                        {clientselected ? <>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    type="text"
                                    value={name}
                                    onChange={handelName}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    margin="normal"
                                    type="text"
                                    value={address}
                                    onChange={handelAddress}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Province"
                                    margin="normal"
                                    type="text"
                                    value={province}
                                    onChange={handelProvince}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    label="Postal code"
                                    margin="normal"
                                    type="text"
                                    value={postal}
                                    onChange={handelPostal}
                                    required
                                    sx={{ ...theme.typography.customInput, marginRight: 2 }}
                                />
                                <TextField
                                    label="Country"
                                    margin="normal"
                                    type="text"
                                    value={country}
                                    onChange={handelCountry}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label=" Product Group "
                                    margin="normal"
                                    type="text"
                                    value={groupPrd}
                                    onChange={handelGroupeProduit}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Resources"
                                    margin="normal"
                                    type="text"
                                    value={resourses}
                                    onChange={handelResourses}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Division col"
                                    margin="normal"
                                    type="text"
                                    value={divisioncol}
                                    onChange={handelDivisionCol}
                                    required
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </> : null}
                    </Grid>

                    <Box sx={{ mt: 2, }}>
                        <Button disableElevation size="large" type="submit" variant="contained" color="secondary">
                            Add
                        </Button>
                    </Box>
                </form>
            </Grid>
        </MainCard>
    )
}

export default Adddivision