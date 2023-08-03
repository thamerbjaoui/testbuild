import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import {
    Grid, TextField, useMediaQuery, Autocomplete, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    MenuItem,
    Select,
    Box,
    Button,
    InputLabel
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Addcontact from 'views/addcontact/Addcontact';


const Addproject = () => {

    const listproject = [{ id: 1, numero: '2023-00000' }, { id: 2, numero: '2023-00001' }, { id: 2, numero: '2023-00002' }, { id: 3, numero: '2023-00003' }]
    const contact = [{ name: 'mastouri', id: 1 }, { name: 'pascal', id: 2 }]
    const rolee = [{ role: 'ing', rate: 80 }, { role: 'tec', rate: 30 }, { role: "ing proc", rate: 100 }, { role: 'des', rate: 40 }]
    const Taskss = [{ task: 'conseption' }, { task: 'baney' }, { task: "installation" }]
    const tables = [{ name: 'General arrangement plan', id: 1 }, { name: 'Detailed engineering plan', id: 2 }, { name: 'Production plan', id: 3 }, { name: 'Feasibility study report', id: 4 }, { name: 'Analysis report', id: 5 }]
    const frais = [{name:"Km"},{name:"Allocation"},{name:"Transport"},{name:"Hébergement"},{name:"Formation"}]

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [title, setTitle] = useState();
    const [numero, setNumero] = useState();
    //const [po, setPo] = useState();
    const [contactselected, setContactselected] = useState(null);
    const [manager, setManager] = useState(null);
    const [rows, setRows] = useState([{ task: "", role: "", timeEstimate: '', description: '' }]);
    const [costrows, setCostrows] = useState([{ cost: "", estimate: "" }]);
    const [timeestimated, setTimeestimated] = useState();
    const [costestimated, setCostestimated] = useState(null);
    const [description, setDescription] = useState();
    //const [filteredResourse, setFilteredResourse] = useState([]);
    const [toggle, setTogle] = useState(false);
    const [typeProject, setTypeproject] = useState('select');
    const [projectSelected, setProjectSelected] = useState();
    const [livrable, setLivrable] = useState();
    const [exclusion, setExclusion] = useState();
    const [accesslivrable, setAccesslivrable] = useState(tables);
    const [accessexclusion, setAccessexclusion] = useState(tables)


    const handleTitle = (event) => {
        setTitle(event.target.value)
    };

    const handleNumero = (event) => {
        setNumero(event.target.value)
    };

    // const handlePo = (event) => {
    //     let powrited = event.target.value
    //     setPo(powrited)
    //     if (powrited) {
    //         setStatus('octroyé')
    //     } else if (!powrited) {
    //         setStatus('en soumission')
    //     }
    // };
    const handleProjectSelect = (event, value) => {
        setProjectSelected(value)
    };

    const handleTypeproject = (event) => {
        setTypeproject(event.target.value)
    };

    const handleManager = (event, value) => {
        setManager(value)
    };

    const handleContact = (event, value) => {
        setContactselected(value)
    };
    const handeldescription = (event) => {
        setDescription(event.target.value)
    };

    const handleAddRow = () => {
        setRows([...rows, { task: "", role: "", timeEstimate: '', description: '' }]);
        setFilteredResourse([])
    };

    const handleCostrow = () => {
        setCostrows([...costrows, { cost: '', estimate: '' }])
    }

    const handleLivrable = (event, value) => {
        setLivrable(value);
        const filteredExclusions = tables.filter((liv) => !value.find((item) => item.name === liv.name));
        setAccessexclusion(filteredExclusions);
        console.log(value);
    };

    const handleExclusion = (event, value) => {
        setExclusion(value);
        const filteredLivrables = tables.filter((liv) => !value.find((item) => item.name === liv.name));
        setAccesslivrable(filteredLivrables);
    };

    // const filtreddata = (val) => {
    //     const filtred = mockDataTeam.filter((e) => e.role === val)
    //     setFilteredResourse(filtred);
    // }

    const handleRowChange = (id, key, value) => {
        let addCost = 0
        let addtime = 0
        let newRows = [...rows];
        newRows[id][key] = value;
        setRows(newRows);

        // let rowfiltred = rows[id].role
        // if (rowfiltred) {
        //     filtreddata(rowfiltred)
        // }

        for (var i = 0; i < rows.length; i++) {
            addtime = addtime + Number(rows[i].timeEstimate)
            const ratecheked = rolee.find((r) => r.role === rows[i].role)
            addCost += ratecheked.rate * Number(rows[i].timeEstimate)
        }
        setTimeestimated(addtime)
        setCostestimated(addCost)
        console.log(addCost);
    }

    const handleDelete = (id) => {

        let newRow = [...rows]
        let rowDeleted = newRow[id].timeEstimate
        let roleDeleted = newRow[id].role
        newRow.splice(id, 1)
        const roledeletedobj = rolee.find((r) => r.role === roleDeleted)
        setRows(newRow);
        setTimeestimated(Number(timeestimated) - Number(rowDeleted))
        setCostestimated(Number(costestimated) - (Number(roledeletedobj.rate) * rowDeleted))


    }

    const handleCostrowchange = (id,key,value) => {
        let newcostrow = [...costrows]
        newcostrow[id][key]=value
        setCostrows(newcostrow)
    }
        
    const handleCostrowdelete = (id) => {
        let costrow = [...costrows]
        costrow.splice(id,1)
        setCostrows(costrow)
    }

    return (

        <MainCard title="Add Project" >

            {toggle ? <Addcontact toggle={setTogle} /> :
                <Grid item xs={12} sm={6} >
                    <form  >
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={60}>
                                <InputLabel htmlFor="role">Type project </InputLabel>
                                <Select required sx={{ width: '10%' }} onChange={handleTypeproject} value={typeProject}>
                                    <MenuItem value='select'>Select...</MenuItem>
                                    <MenuItem value='project'>Project</MenuItem>
                                    <MenuItem value='underproject'>subProject</MenuItem>

                                </Select>
                            </Grid>
                            {typeProject !== 'select' ?
                                <>
                                    <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                                        {typeProject === 'project' ?
                                            <>
                                                <TextField
                                                    label="N°Projet"
                                                    margin="normal"
                                                    type="text"
                                                    required
                                                    value={numero}
                                                    onChange={handleNumero}
                                                    sx={{ ...theme.typography.customInput, marginRight: 5 }}
                                                />
                                            </>
                                            : <>
                                                <Autocomplete
                                                    sx={{ width: '40%', marginRight: 2 }}
                                                    options={listproject}
                                                    getOptionLabel={(option) => option.numero}
                                                    value={projectSelected}
                                                    onChange={handleProjectSelect}
                                                    freeSolo

                                                    renderInput={(params) => {
                                                        return (
                                                            <TextField required {...params} label="Select N°Project " />
                                                        )
                                                    }}
                                                />
                                            </>}
                                        <TextField
                                            label="Status"
                                            margin="normal"
                                            type="text"
                                            required
                                            value='en soumission'

                                            sx={{ ...theme.typography.customInput }}
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Title"
                                            margin="normal"
                                            type="text"
                                            value={title}
                                            onChange={handleTitle}
                                            required
                                            sx={{ ...theme.typography.customInput, width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={100} justifyContent="center" >
                                        <InputLabel htmlFor="description" >Description</InputLabel >
                                        <TextField
                                            margin="normal"
                                            type="text"
                                            multiline
                                            fullWidth
                                            rows={3}
                                            value={description}
                                            onChange={handeldescription}
                                            required
                                            sx={{ ...theme.typography.customInput, width: '100%' }}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="PO"
                                    margin="normal"
                                    type="text"
                                    value={po}
                                    onChange={handlePo}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid> */}

                                    <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            sx={{ width: '50%' }}
                                            options={contact}
                                            getOptionLabel={(option) => option.name}
                                            value={manager}
                                            onChange={handleManager}
                                            renderInput={(params) => {

                                                return (
                                                    <TextField required {...params} label="Select Project Manager" />
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                                        <Autocomplete
                                            sx={{ width: '50%', marginRight: 1 }}
                                            required
                                            options={contact}
                                            getOptionLabel={(option) => option.name}
                                            value={contactselected}
                                            onChange={handleContact}
                                            renderInput={(params) => (
                                                <TextField required {...params} label="Select Contact" />
                                            )}
                                        />
                                        <IconButton color="secondary" onClick={() => setTogle(true)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            multiple
                                            sx={{ width: '50%' }}
                                            options={accesslivrable}
                                            getOptionLabel={(option) => option.name}
                                            value={livrable}
                                            onChange={handleLivrable}
                                            renderInput={(params) => {

                                                return (
                                                    <TextField  {...params} label="Livrables" />
                                                )
                                            }}
                                        />
                                    </Grid> <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            multiple
                                            sx={{ width: '50%' }}
                                            options={accessexclusion}
                                            getOptionLabel={(option) => option.name}
                                            value={exclusion}
                                            onChange={handleExclusion}
                                            renderInput={(params) => {

                                                return (
                                                    <TextField {...params} label="Exclusions" />
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell >Task</TableCell>
                                                    <TableCell >Description</TableCell>
                                                    <TableCell >Role</TableCell>
                                                    <TableCell width='10%'>Time Estimate</TableCell>

                                                    {/* {po ? <TableCell >Resourse</TableCell> : null} */}
                                                    <TableCell>
                                                        <IconButton color="secondary" onClick={handleAddRow}>
                                                            < AddIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row, id) => (
                                                    <TableRow key={id}>
                                                        <TableCell>
                                                            <Select sx={{ width: '100%' }} onChange={(e) => handleRowChange(id, "task", e.target.value)} value={row.task}>
                                                                {Taskss.map((rol, i) => {
                                                                    return (
                                                                        <MenuItem key={i} value={rol.task}>{rol.task}</MenuItem>
                                                                    )
                                                                })}
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                multiline
                                                                fullWidth
                                                                value={row.description}
                                                                onChange={(e) => handleRowChange(id, "description", e.target.value)}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Select sx={{ width: '100% ', marginRight:2 }} onChange={(e) => handleRowChange(id, "role", e.target.value)} value={row.role}>
                                                                {rolee.map((rol, i) => {
                                                                    return (
                                                                        <MenuItem key={i} value={rol.role}>{rol.role}</MenuItem>
                                                                    )
                                                                })}
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell >
                                                            <TextField
                                                                type='number'
                                                                value={row.timeEstimate}
                                                                onChange={(e) => handleRowChange(id, "timeEstimate", e.target.value)}
                                                            />
                                                        </TableCell>

                                                        {/* {po ? <TableCell>
                                                    <Autocomplete
                                                        options={filteredResourse}
                                                        getOptionLabel={(option) => option.name}
                                                        value={row.resourse}
                                                        onChange={(e, newValue) => handleRowChange(id, "resourse", newValue)}
                                                        renderInput={(params) => {
                                                            return (
                                                                <TextField {...params} label="Select resourse" />
                                                            )
                                                        }}
                                                    />
                                                </TableCell> : null} */}
                                                        <TableCell>
                                                            <IconButton onClick={() => { handleDelete(id) }}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel>Estimated Time [h]</InputLabel>
                                        <TextField
                                            margin="normal"
                                            type="text"
                                            value={timeestimated}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel>Estimated Cost [$]</InputLabel>
                                        <TextField
                                            margin="normal"
                                            type="number"
                                            value={costestimated}
                                            required
                                        />
                                    </Grid>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell> Costs </TableCell>
                                                    <TableCell>Estimate</TableCell>
                                                    <TableCell>
                                                        <IconButton color="secondary" onClick={handleCostrow}>
                                                            < AddIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {costrows.map((row, id) => (
                                                    <TableRow key={id}>
                                                        <TableCell>
                                                            <Select sx={{ width: '48%' }} onChange={(e) => handleCostrowchange(id, "cost", e.target.value)} value={row.cost}>
                                                                {frais.map((frai, i) => {
                                                                    return (
                                                                        <MenuItem key={i} value={frai.name}>{frai.name}</MenuItem>
                                                                    )
                                                                })}
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                            
                                                            type='number'
                                                            value={row.estimate}
                                                            onChange={(e)=>handleCostrowchange(id,"estimate",e.target.value)}
                                                            
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton onClick={() => { handleCostrowdelete(id) }}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Box sx={{ mt: 2,  }}>
                                        <Button disableElevation size="large" type="submit" variant="contained" color="secondary">
                                            Add
                                        </Button>
                                    </Box>
                                </>

                                : null}
                        </Grid>
                    </form>
                </Grid>
            }
        </MainCard>
    )
}

export default Addproject