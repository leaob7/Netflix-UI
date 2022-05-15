import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
    height: '60vh'
  },
  title: {
    fontSize: '4vw',
    fontWeight: 'bold',
    color: 'white',
    justifySelf: 'end',
  },
  subtitle: {
    fontSize: '2vw',
    color: 'white',
    justifySelf: 'end',
  },
  reload: {
    textDecoration: 'none',
    color: 'red',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}));

function Loading () {
  const classes = useStyles();
  const path = window.location.pathname;

  const [requestFail, setRequestFail] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRequestFail(true);
    }, 5000)
  }, [])

  return (
    <section className={ classes.root }>

        <Typography className={classes.title}>
            Aguarde alguns instantes...
        </Typography>

        { requestFail && (

          <Typography className={classes.subtitle}>
              Está demorando muito ?
              Tente <a href={path} className={classes.reload}>recarregar</a> a página.
          </Typography>

        ) }

    </section>
  )
}

export default Loading;
