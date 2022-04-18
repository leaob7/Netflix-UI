import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

function InitialUserBody () {
  const classes = useStyles();
    return (
      <div className={ classes.root }>
        Initial Body
      </div>
    )
}

export default InitialUserBody;