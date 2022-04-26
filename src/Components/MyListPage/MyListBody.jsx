import MidiaCard from '../../Components/MidiaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    height: '100vh'
  }
}));

function MyListBody ({ myList }) {

  const classes = useStyles();
  return (
    <Grid
    container
    justifyContent='center'
    className={classes.root}
    >

        {
          myList.map((midia) => (
            
            <MidiaCard cardData={midia}/>

          ))
        }


    </Grid>
  )
}

export default MyListBody;