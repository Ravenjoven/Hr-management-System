import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import { Stack, Box, Container, Card, Typography, useTheme, MenuList, MenuItem, ListItemIcon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Added import
import { Link } from 'react-router-dom'; // Added import
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../redux/actions/jobActions';
import { jobTypeLoadAction } from '../redux/actions/jobTypeActions';
import { useParams } from 'react-router-dom';
import CardElement from '../component/CardElement';
import Pagination from '@mui/material/Pagination';
import Footer from '../component/Footer';
import LoadingBox from '../component/LoadingBox'; 
import SelectComponent from '../component/SelectComponent';


const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector (state =>state.loadJobs)
  const theme = useTheme();
  const dispatch = useDispatch();
  const {keyword, location} = useParams();
  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState('');
  
  useEffect(()=>{
    dispatch(jobLoadAction(page, keyword, cat, location));

  },[page, keyword, cat, location]);

  useEffect(()=>{
    dispatch(jobTypeLoadAction());
  },[]);

  const handleChangeCategory = (e) =>{
    setCat(e.target.value);

  }
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>
                    Filter job by category
                  </Typography>
                  <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                    <LocationOnIcon sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />

                                                    </ListItemIcon>
                                                    <Link to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat}/>
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
  {loading ? (
    // Display the LoadingBox component when data is loading
    <LoadingBox />
  ) : jobs && jobs.length === 0 ? (
    // Display "No result found" if there are no jobs
    <Box
      sx={{
        minHeight: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>No result found!</h2>
    </Box>
  ) : (
    // Display jobs if not loading and jobs are present
    jobs.map((job, i) => (
      <CardElement
        key={i}
        id={job._id}
        jobTitle={job.title}
        description={job.description}
        category={job.jobType ? job.jobType.jobTypeName : "No category"}
        location={job.location}
      />
    ))
  )}
  <Stack spacing={2}>
    <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
  </Stack>
</Box>

          </Stack>  
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
