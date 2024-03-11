import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../redux/actions/jobActions';

const DashJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobLoadAction());
    }, []);

    const { jobs } = useSelector(state => state.loadJobs);
    let data = [];
    data = (jobs !== undefined && jobs.length > 0) ? jobs : [];

    // Delete job by Id
    const deleteJobById = (e, id) => {
        console.log(id);
    }

    const columns = [
        {
            field: '_id',
            headerName: 'Job ID',
            width: 150,
            editable: true,
            headerClassName: 'header-black',
        },
        {
            field: 'title',
            headerName: 'Job name',
            width: 150,
            headerClassName: 'header-black',
        },
        {
            field: 'jobType',
            headerName: 'Category',
            width: 150,
            valueGetter: (data) => data.row.jobType.jobTypeName,
            headerClassName: 'header-black',
        },
        {
            field: 'user',
            headerName: 'User',
            width: 150,
            valueGetter: (data) => data.row.user.firstName,
            headerClassName: 'header-black',
        },
        {
            field: 'available',
            headerName: 'Available',
            width: 150,
            renderCell: (values) => (values.row.available ? "Yes" : "No"),
            headerClassName: 'header-black',
        },
        {
            field: 'salary',
            headerName: 'Salary',
            width: 150,
            renderCell: (values) => ("$" + values.row.salary),
            headerClassName: 'header-black',
        },
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained">
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/job/${values.row._id}`}>Edit</Link>
                    </Button>
                    <Button onClick={(e) => deleteJobById(e, values.row._id)} variant="contained" color="error">Delete</Button>
                </Box>
            ),
            headerClassName: 'header-black',
        }
    ];

    return (
        <Box>
            <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                Jobs list
            </Typography>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                <Button variant='contained' color="success" startIcon={<AddIcon />}>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/admin/job/create">Create Job</Link>
                </Button>
            </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{
                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'black',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) => theme.palette.secondary.main,
                            },
                            button: {
                                color: '#ffffff',
                            },
                            '& .header-black': {
                                backgroundColor: '#f5f5f5',
                                color: '#000000',
                            },
                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default DashJobs;
