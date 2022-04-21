import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  socialDiv: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    color: 'white',
    height: 30,
    width: 30
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.socialDiv}>

        <IconButton>
          <GitHub className={classes.social} />
        </IconButton>

        <IconButton>
          <LinkedIn className={classes.social} />
        </IconButton>

      </div>

      <h5 className={classes.social}>2022</h5>
    </footer>
  )
}

export default Footer;