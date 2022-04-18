import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
}));

function InitialUserBody () {
  const classes = useStyles();
    return (
      <div className={ classes.root }>
      </div>
    )
}

export default InitialUserBody;