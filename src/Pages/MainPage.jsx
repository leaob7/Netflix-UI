import React, { useEffect, useState } from 'react';
import MoviesRequest from '../utils/MoviesApiRequest';
import MainTopBar from '../Components/MainPage/MainTopBar';
import MainBody from '../Components/MainPage/MainBody';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'colunm',
    background: theme.palette.primary.dark,
    height: '100vh',
  },
}));

const moviesRequest = new MoviesRequest();

function MainPage() {
  const classes = useStyles();
  const [latestMovies, setLatestMovies] = useState([]);

  const getRequest = async (request) => {
    const response = await request;
    setLatestMovies(response.results);
  }

  useEffect(() => {
    const fetchLatest = async () => {
      await getRequest(moviesRequest.getPopular())
    }

    fetchLatest()
  }, [])

    return (
      <div className={ classes.root }>
        <MainTopBar />
        <MainBody />
      </div>
    )
}

export default MainPage;