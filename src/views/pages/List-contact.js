import { useState } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme, Card, IconButton } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Modifycontact from './popupmodifie/ModifyContact';
const Listcontact = () => {
    const theme = useTheme();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleModifyClick = (id) => {
        const clickedRow = mockDataTeam.find((row) => row.id === id);

        if (clickedRow) {
            setSelectedRow(clickedRow);
            setIsPopupOpen(true);
        }
    }

    const mockDataTeam = [{
        id: 1,
        first_name: 'michel',
        last_name: 'hanchi',
        email: 'michel@gmail.com',
        phone: +21652565859,
        division: 'sokra'
    },
    {
        id: 2,
        first_name: 'hmed',
        last_name: 'lemghirbi',
        email: 'hmedl@gmail.com',
        phone: +21652565859,
        division: 'mnihla'
    },
    {
        id: 3,
        first_name: 'yousef',
        last_name: 'msekni',
        email: 'yousef@gmail.com',
        phone: +21652565859,
        division: 'ariana'
    },
    {
        id: 4,
        first_name: 'khalil',
        last_name: 'kassab',
        email: 'khalil@gmail.com',
        phone: +21652565859,
        division: 'sokra'
    },
    ]
    const columns = [
        {
            field: "first_name",
            headerName: "First Name",
            flex: 0.5,
            cellClassName: "name-column--cell",
        },
        {
            field: "last_name",
            headerName: "Last Name",
            flex: 0.5,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 0.5,
        },
        {
            field: "division",
            headerName: "Division",
            flex: 1,
        },
        {
            field: "Modify",
            headerName: "Modify",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                    //justifyContent="center"
                    >
                        <IconButton onClick={() => handleModifyClick(params.row.id)} >

                            < ModeEditIcon />
                        </IconButton>
                    </Box>
                )
            }
        },
    ]



    return (
        <Box m="20px" >
            <h1 > List Contact </h1>
            <Box
                m="40px 0 0 0"
                height="auto"
                sx={{
                    ...theme.typography.menuCaption
                }}
            >
                <Card sx={{ overflow: 'hidden' }}>
                    <DataGrid
                        slots={{ toolbar: GridToolbar }}                       
                        rows={mockDataTeam}
                        columns={columns}
                        autoHeight
                        scroll={{ y: 400 }}  
                        disableRowSelectionOnClick
                         />
                </Card>
                {isPopupOpen ? <Modifycontact row={selectedRow} isOpen={setIsPopupOpen} /> : null}
            </Box>
        </Box>
    )
}
export default Listcontact