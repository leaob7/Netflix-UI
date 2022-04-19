import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
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
    justifyContent: 'space-between',
  },
  topNav: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    paddingLeft: 30,
    paddingTop: 10,
    fontWeight: 'bold',
    fontFamily: 'netflix',
    fontSize: '2vw',
  },
  link: {
    paddingLeft: 30,
    paddingTop: 10,
    fontFamily: 'netflix',
    fontSize: 10,
    color: 'GrayText',
    '&:hover': {
      color: 'white',
    }
  },
  search: {
    display: 'flex',
  },
  searched: {
    display: 'flex',
    border: 'solid white 0.5px',
    borderRadius: 3,
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
            
            <Button
              onClick={ () => setSearch(!search) }       
            >
              <SearchIcon className={ classes.searchIcon } />

            </Button>

            { search && 
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />}

            <img
              src="https://avatars.githubusercontent.com/u/6759280?v=4"
              className={classes.avatar}
              alt="avatar"
            />

          </div>



        </Toolbar>
      </AppBar>
  )
}

export default MainTopBar;