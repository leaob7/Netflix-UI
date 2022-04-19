import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBar: {
    minHeight: '1vh',
    display: 'flex',
  },
  topNav: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
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
  link: {
    paddingLeft: 30,
    paddingTop: 10,
    fontFamily: 'netflix',
    fontSize: 10,
    color: 'GrayText',
  },
  search: {
    display: 'flex',
    marginRight: 20,
    borderRadius: 3,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searched: {
    border: 'solid white 0.5px',
    marginRight: 20,
    borderRadius: 3,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '1.5vh',
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
    marginRight: 10,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    color: 'GrayText',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 5,
  }
}));

function MainTopBar() {
  const [search, setSearch] = useState(false);
  const classes = useStyles();

  return (
      <AppBar position="fixed"  color='transparent'>
        <Toolbar className={ classes.topBar }>

        <div className={ classes.topNav }>

          <Link to="/browse" style={{ textDecoration: 'none' }}>
            <Typography className={ classes.title } color='primary'>
              N E T F L I X
            </Typography>
          </Link>

          <Link to="/browse/series" style={{ textDecoration: 'none' }}>
            <Typography className={ classes.link } color='primary'>
              Series
            </Typography>
          </Link>

          <Link to="/browse/movies" style={{ textDecoration: 'none' }}>
            <Typography className={ classes.link } color='primary'>
              Filmes
            </Typography>
          </Link>

          <Link to="/my-list" style={{ textDecoration: 'none' }}>
            <Typography className={ classes.link } color='primary'>
              Minha lista
            </Typography>
          </Link>

        </div>


          <div className={ search ? classes.searched : classes.search }>
            
            <IconButton
              onClick={ () => setSearch(!search) }
              edge="end"         
            >
              <SearchIcon className={ classes.searchIcon } />
              
            </IconButton>

            { search && 
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />}


          </div>

          <img
            src="https://avatars.githubusercontent.com/u/6759280?v=4"
            className={classes.avatar}
            alt="avatar"
          />


        </Toolbar>
      </AppBar>
  )
}

export default MainTopBar;