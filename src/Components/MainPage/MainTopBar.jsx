import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: 30,
    paddingTop: 10,
    display: 'none',
    fontWeight: 'bold',
    fontFamily: 'netflix',
    fontSize: '2vw',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    color: 'white',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: theme.palette.primary.dark,
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '2vh',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function MainTopBar() {
  const [search, setSearch] = useState(false);
  const classes = useStyles();

  return (
      <AppBar position="static"  color='transparent'>
        <Toolbar>

        <Typography className={ classes.title } color='primary'>
          N E T F L I X
        </Typography>

          <div >

            <IconButton
              onClick={ () => setSearch(!search) }
              edge="end"         
            >
              <SearchIcon className={ classes.searchIcon } />
            </IconButton>

            { search && <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              // inputProps={{ 'aria-label': 'search' }}
            />}

          </div>

        </Toolbar>
      </AppBar>
  )
}

export default MainTopBar;