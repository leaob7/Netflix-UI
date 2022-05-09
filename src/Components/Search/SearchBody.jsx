import MidiaCard from '../../Components/MidiaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    width: '100%',
    height: '100%'
  },
  data: {
    margin: 50,
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
      const searchFilter = searchData.filter((data) => {
        if (data.title) {
          return data.title.toUpperCase().includes(searchValue.toUpperCase());
        }

        if (data.name) {
          return data.name.toUpperCase().includes(searchValue.toUpperCase());
        }

        return data;
      })
  
      setFilterData(searchFilter);

  }, [searchValue, searchData])

  return (
    <Grid
    container
    justifyContent='center'
    className={classes.root}
    >
        <Typography className={classes.title}>
          { searchValue }
        </Typography>

        <Grid
            container
            justifyContent='center'
            wrap='wrap'
            className={classes.data}
        >

          {
            filterData && filterData.map((midia) => (
              
              <MidiaCard cardData={midia} />

            ))
          }
        </Grid>




    </Grid>
  )
}

export default SearchBody;