
import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Typography, useTheme, IconButton, Card } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import Popupmodifie from './popupmodifie/Popupmodifie';

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
//import SearchSection from '../../layout/MainLayout/Header/SearchSection/index'
import DeleteIcon from '@mui/icons-material/Delete';

const Listemployee = () => {
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
  console.log(selectedRow);



  const mockDataTeam = [
    {
      id: 1,
      name: "mouhamed dridi",
      nikname: "Mdridi",
      role: "tec",
      rate: 50,
      email: "mouhamed@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "admin",

    },
    {
      id: 2,
      name: "jihed dasilva",
      nikname: 'Jdasilva',
      role: 'ing',
      rate: 80,
      email: "jihedr@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "superuser",

    },
    {
      id: 3,
      name: "mouka mouka",
      nikname: 'Mmouka',
      role: 'ing',
      rate: 80,
      email: "mouka@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "user",
    },
    {
      id: 4,
      name: "chayma sahbeni",
      nikname: 'Csahbeni',
      role: 'ing',
      rate: 80,
      email: "chayma@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      access: "admin",

    },
    {
      id: 5,
      name: "hamza dridi",
      nikname: 'Hdridi',
      role: 'ing',
      rate: 80,
      email: "hamza@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      access: "user",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      nikname: 'Emelisandre',
      role: "tec",
      rate: 50,
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      access: "superuser",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      nikname: 'Emelisandre',
      role: "tec",
      rate: 50,
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      access: "user",
    },
    {
      id: 8,
      name: "Rossini Frances",
      nikname: 'Emelisandre',
      role: "tec",
      rate: 50,
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      access: "user",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      nikname: 'Emelisandre',
      role: "tec",
      rate: 50,
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      access: "admin",
    },
    {
      id: 10,
      name: "mouka mouka",
      nikname: 'Mmouka',
      role: "tec",
      rate: 50,
      email: "mouka@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "user",
    }
    


  ];
  const columns = [
    // { field: "id", headerName: "ID" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nikname",
      headerName: "NickName",
      flex: 0.7,

    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 0.5
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? theme.palette.success.main
                : access === "superuser"
                  ? theme.palette.success.light
                  : theme.palette.warning.main
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "superuser" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "Modify",
      headerName: "Modify",
      flex: 0.5,
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
    {
      field: "Delete",
      headerName: "Delete",
      flex: 0.5,
      renderCell: () => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
          //justifyContent="center"
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        )
      }
    }

  ];


  return (

    <Box m="20px" >
      <h1 > List Employee </h1>
      
      {/* <SearchSection data={mockDataTeam }/>  */}
      <Box
        m="40px 0 0 0"
        height="auto"
        sx={{
          ...theme.typography.menuCaption

        }}
      >
        <Card sx={{ overflow: 'hidden' }}>
          <DataGrid disableRowSelectionOnClick slots={{ toolbar: GridToolbar }} rows={mockDataTeam} columns={columns} autoHeight scroll={{ y: 400 }} />
        </Card>
        {isPopupOpen && (
          <Popupmodifie  row={selectedRow} isOpen={setIsPopupOpen} />
        )}
      </Box>
    </Box>

  );
};
export default Listemployee