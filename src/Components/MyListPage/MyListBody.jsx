import MidiaCard from '../../Components/MidiaCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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

function MyListBody ({ myList }) {
  const classes = useStyles();

  return (
    <Grid
    container
    direction='column'
    alignItems='center'
    className={classes.root}
    >
        <Typography className={classes.title}>
          Minha lista
        </Typography>

        <Grid
            container
            justifyContent='center'
        >

          {
            myList.map((midia) => (
              
              <MidiaCard cardData={midia} />

            ))
          }
        </Grid>

    </Grid>
  )
}

export default MyListBody;