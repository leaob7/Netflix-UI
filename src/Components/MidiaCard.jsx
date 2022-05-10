import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Typography,
} from '@material-ui/core';
import { PlayCircleOutline, ControlPoint, ExpandMore, Add, Check } from '@material-ui/icons';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import MoviesRequests from '../API/MoviesApiRequest';
import SeriesRequests from '../API/SeriesApiRequest';
import { useDispatch, useSelector } from 'react-redux';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
    width: 200,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 0,
    marginBottom: 30,
    transition: '1s'
  },
  rootHover: {
    height: 350,
    width: 300,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    transition: '1s'
  },
  media: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center bottom',
    transition: '1s'
  },
  mediaHover: {
    height: '30vh',
    width: '100%',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    transition: '1s'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
    padding: 2,
    backgroundColor: 'rgb(25, 25, 25)',
  },
  cardButtons: {
    color: 'white',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
  },
  paper: {
    border: '2px solid #000',
    borderRadius: 20,
    width: '90%',
    height: '100%',
    marginTop: '5%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    }
  },
  modalCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#151513'
  },
  modalMedia: {
    height: 500,
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: '100% 500px contain',
  },
  infoTitle: {
    fontFamily: 'netflix',
    fontSize: '300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: '-webkit-linear-gradient(#eee, #333)',
  },
  infoText: {
    color: 'white',
    marginRight: 10,
    fontWeight: 'bold'
  },
  infoOverview: {
    padding: 25,
    width: '50%',
    color: 'white',
    fontSize: 15,
  },
  infoGenres: {
    padding: 25,
    marginLeft: 200,
    color: 'white',
    fontSize: 15,
  },
  modalButton: {
    height: '60%',
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  modalListBtn: {
    marginLeft: 25,
    height: '60%',
    borderRadius: 100,
    color: 'white',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'rgb(0, 0, 0, 0.3)',
    }
  },
  modalIcon: {
    fontSize: '150%',
  },
  mediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 300,
    marginLeft: 40
  },
}));

const moviesRequests = new MoviesRequests();
const seriesRequests = new SeriesRequests();


function MidiaCard({ cardData, type }) {
  const classes = useStyles();
  const [cardDetails, setCardDetails] = useState(false);
  const [cardStyle, setCardStyle] = useState(false);
  const [addList, setAddList] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const myListRedux = useSelector((state) => state.NetflixReducer.myList);

  const getReleaseYear = (date) => {
    return date && date.slice(0, 4);
  }

  const handleOpen = async () => {
    setOpen(true);
    window.history.pushState(null, null, `?${cardData.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    setCardStyle(false);
    window.history.pushState(null, null, window.history.back());
  };

  const handleAddListData = async () => {
    setAddList(!addList);
    if(myListRedux.some((m) => m.id === cardData.id)) {
      window.alert('Este conteúdo já está na sua lista');
    } else {
      dispatch({ type: 'ADD_MYLIST', payload: cardData });
    }
  }

  useEffect(() => {

    const handleDetails = async () => {
      if (type === 'serie') {
        const details = await seriesRequests.getDetails(cardData.id);
  
        setCardDetails(details);
      }
  
      if (type === 'movie') {
        const details = await moviesRequests.getDetails(cardData.id);
  
        setCardDetails(details);
      }

    }

    

    handleDetails();

  }, [type, cardData.id])

  return (
    <Card
      className={cardStyle ? classes.rootHover : classes.root}
      onMouseEnter={() => setCardStyle(true)}
      onMouseLeave={() => setCardStyle(false)}
    >

      <CardMedia
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${cardData.poster_path})` }}
        className={cardStyle ? classes.mediaHover : classes.media}
      />

      <CardActions className={classes.cardActions} disableSpacing>
        <div>
          <IconButton
            className={classes.cardButtons}
            aria-label="Assistir"
          >
            <PlayCircleOutline />
          </IconButton>

          <IconButton
          className={classes.cardButtons}
          aria-label="Adicionar á minha lista"
          onClick={handleAddListData}
          >
            {addList ?  <Check /> : <ControlPoint />}
          </IconButton>
        </div>

        <IconButton
          className={classes.cardButtons}
          aria-label="Mais informações"
          onClick={handleOpen}
        >
          <ExpandMore />
        </IconButton>

      </CardActions>

      <Modal
        aria-labelledby="dataCard-modal"
        aria-describedby="dataCard-modal-data"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <Card className={classes.modalCard}>

              <CardMedia
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${cardData.backdrop_path})` }}
                className={classes.modalMedia}
              >

                <div className={classes.mediaContainer}>

                  <Typography className={classes.infoTitle}>
                    {cardData.title || cardData.name || cardData.original_name}
                  </Typography>

                  <div>

                    <Button
                      className={classes.modalButton}
                      aria-label="Assistir"
                      variant='contained'
                    >
                      <PlayArrowSharpIcon className={classes.modalIcon} />
                      <text>Assistir</text>
                    </Button>

                    <Button
                      className={classes.modalListBtn}
                      aria-label="Adicionar á minha lista"
                      variant='contained'
                      onClick={handleAddListData}
                    >
                      {addList ?  <Check /> : <Add className={classes.modalIcon} />}
                    </Button>

                  </div>

                </div>

              </CardMedia>

                <div style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: 25, marginTop: 25 }}>

                  <Typography className={classes.infoText}>
                    { getReleaseYear(cardData.release_date) || getReleaseYear(cardData.first_air_date) }
                  </Typography>

                  <Typography className={classes.infoText}>
                      {cardData.runtime || cardData.number_of_seasons}
                  </Typography>


                </div>



                <div style={{ display: 'flex' }}>

                  <Typography className={classes.infoOverview}>
                    {cardData.overview}
                  </Typography>

                  <Typography className={classes.infoGenres} >
                    Generos: {cardDetails && cardDetails.genres.map((d) => `${d.name} `)}
                  </Typography>

                </div>

            </Card>

          </div>
        </Fade>
      </Modal>


    </Card>
  );
}

export default MidiaCard;
