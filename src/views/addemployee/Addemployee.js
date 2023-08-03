
import React, { useState } from 'react';
import { Grid, TextField, useMediaQuery, MenuItem, Select, InputLabel, Button, Box } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
import { useTheme } from '@mui/material/styles'
//import AnimateButton from 'ui-component/extended/AnimateButton';
const Addemployee = () => {
    const theme = useTheme();
    const rolee = [{ role: 'ing', rate: 80 }, { role: 'tec', rate: 30 }, { role: "ing proc", rate: 100 }, { role: 'des', rate: 40 }]
    const [name, setName] = useState('');
    const [nickName, setNikname] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [access, setAccess] = useState('select');
    const [role, setRole] = useState('select') ;
    const [rate, setRate] = useState(0) ;
    const [password, setPassword] = useState() ;
    const [hiring,setHiring] = useState(new Date().toLocaleDateString('en-GB'))

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleHiring = (event) => {
        setHiring(event.target.value)
    }

    const handelNiknamchange = (event) => {
        setNikname(event.target.value)
    }

    const handelphonechange = (event) => {
        setPhone(event.target.value)
    }

    const handelEmailchange = (event) => {
        setEmail(event.target.value)
    }

    const handelAccesschange = (event) => {
        setAccess(event.target.value)
    }

    const handelRolechange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
        const selectedRoleObj = rolee.find((r) => r.role === selectedRole);
        if (selectedRoleObj) {
            setRate(selectedRoleObj.rate);
        } else {
            setRate(0)
        }
    };
    const handelPassword = (event) => {
        setPassword(event.target.value)
    } ;

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <MainCard title="Add Employee" >
            <Grid item xs={12} sm={6}>
                <form onSubmit={handelSubmit} >
                    <Grid container spacing={matchDownSM ? 0 : 2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                margin="normal"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nickname"
                                margin="normal"
                                type="text"
                                value={nickName}
                                onChange={handelNiknamchange}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="role">Role :</InputLabel>
                            <Select sx={{ width: '100%' }} onChange={handelRolechange} value={role}>
                                <MenuItem value='select'>Select...</MenuItem>
                                {rolee.map((rol, i) => {
                                    return (
                                        <MenuItem key={i} value={rol.role}>{rol.role}</MenuItem>
                                    )
                                })}
                            </Select>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Rate"
                                margin="normal"
                                type="text"
                                value={rate}
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Phone"
                                margin="normal"
                                type="number"
                                value={phone}
                                onChange={handelphonechange}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                type="text"
                                value={email}
                                onChange={handelEmailchange}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Hiring date"
                                margin="normal"
                                type="text"
                                value={hiring}
                                onChange={handleHiring}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="role">Access :</InputLabel>
                            <Select required sx={{ width: '100%' }} onChange={handelAccesschange} value={access}>
                                <MenuItem value='select'>Select...</MenuItem>
                                <MenuItem value='admin'>Admin</MenuItem>
                                <MenuItem value='superuser'>Superuser</MenuItem>
                                <MenuItem value='user'>User</MenuItem>
                            </Select>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                type="text"
                                value={password}
                                onChange={handelPassword}
                                required
                                sx={{ ...theme.typography.customInput }}
                            />

                        </Grid>
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

export default Addemployee