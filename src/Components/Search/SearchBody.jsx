import MidiaCard from '../../Components/MidiaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    width: '100%',
    height: '100%',
  },
  data: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: '20%',
    minHeight: '100%',
    height: '100%',
  },
}));

function SearchBody () {
  const classes = useStyles();
  const [filterData, setFilterData] = useState();
  const searchValue = useSelector((state) => state.NetflixReducer.searchValue);
  const searchData = useSelector((state) => state.NetflixReducer.searchData);

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