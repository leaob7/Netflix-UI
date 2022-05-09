import MidiaCard from '../../Components/MidiaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    height: '100vh'
  },
  title: {
    margin: 15,
    fontSize: '2vw',
    fontWeight: 'bold',
    color: 'white',
    justifySelf: 'end',
  }
}));

function SearchBody ({ searchData }) {
  const classes = useStyles();
  const [filterData, setFilterData] = useState();
  const searchValue = useSelector((state) => state.NetflixReducer.searchValue);

  useEffect(() => {
      const searchFilter = searchData.popular.filter((data) =>
      data.title.toUpperCase().includes(searchValue.toUpperCase()));
  
      setFilterData(searchFilter);

  }, [searchValue, searchData])

  return (
    <Grid
    container
    direction='column'
    alignItems='center'
    className={classes.root}
    >
        <Typography className={classes.title}>
          { searchValue }
        </Typography>

        <Grid
            container
            justifyContent='center'
        >

          {
            filterData ? filterData.map((midia) => (
              
              <MidiaCard cardData={midia} />

            )) : null
          }
        </Grid>




    </Grid>
  )
}

export default SearchBody;