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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalSearch, setSearchValue } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBar: {
    backgroundColor: 'rgb(0, 0, 0, 0.1)',
    minHeight: '1vh',
    height: '6vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '1.5s'
  },
  darkBar: {
    minHeight: '1vh',
    height: '6vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    transition: '1.5s'
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
    paddingLeft: 40,
    paddingTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      color: 'rgb(255,255,255, 0.8)',
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searched: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchDiv: {
    height: '100%',
    border: 'white solid 0.5px',
    marginRight: 10,
    backgroundColor: theme.palette.primary.dark,
    transition: '1s',
  },
  searchIcon: {
    height: '2vh',
    color: 'white',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    height: '100%',
    color: 'inherit',
    backgroundColor: theme.palette.primary.dark,
  },
  inputInput: {
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
    cursor: 'pointer',
  },
  avatarMenu: {
    height: 40,
    width: 40,
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: 65,
    marginBottom: 20,
    marginLeft: 40
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
    fontSize: '15px',
    width: 120,
    height: 40
  },
  menuItem: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

function MainTopBar() {
  const [search, setSearch] = useState(false);
  const [blacked, setBlacked] = useState(false);
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.NetflixReducer.searchValue);

  const classes = useStyles();

  const localpath = window.location.pathname === '/browse';

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlacked(true);
      } else {
        setBlacked(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  useEffect(() => {
    searchValue.length > 0 ? dispatch(setGlobalSearch(true)) : dispatch(setGlobalSearch(false));
  }, [searchValue.length, dispatch])


  return (
    <AppBar position="fixed" color='transparent' style={{ boxShadow: 'none' }}>
      <Toolbar className={blacked ? classes.darkBar : classes.topBar} >

        <div className={classes.topNav}>

          <Link
            to="/browse"
            style={{ textDecoration: 'none' }}
            onClick={() => localpath && window.location.reload()}
          >
            <Typography className={classes.title} color='primary'>
              N E T F L I X
            </Typography>
          </Link>

          <Link to="/browse/series" style={{ textDecoration: 'none' }}>
            <Typography className={classes.link}>
              Series
            </Typography>
          </Link>

          <Link to="/browse/movies" style={{ textDecoration: 'none' }}>
            <Typography className={classes.link}>
              Filmes
            </Typography>
          </Link>

          <Link to="/my-list" style={{ textDecoration: 'none' }}>
            <Typography className={classes.link}>
              Minha lista
            </Typography>
          </Link>

        </div>


        <div className={search ? classes.searched : classes.search}>

          <div className={search && classes.searchDiv}>

            <Button
              onClick={() => setSearch(!search)}
            >
              <SearchIcon className={classes.searchIcon} />

            </Button>

            {search &&
              <InputBase
                placeholder="Títulos…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
              />}

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <img
              src="https://avatars.githubusercontent.com/u/6759280?v=4"
              className={ menu ? classes.avatarMenu  : classes.avatar }
              alt="avatar"
              onClick={() => setMenu(!menu)}
            />

            { menu ? (
              <div className={classes.menu}>
                <Link to="/" className={classes.menuItem}>
                  Sair da netflix
                </Link>
              </div>
            ) : null }

          </div>



        </div>

      </Toolbar>
    </AppBar>
  )
}

export default MainTopBar;