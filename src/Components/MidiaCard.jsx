import React, { useState } from 'react';
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
import { PlayCircleOutline, ControlPoint, ExpandMore, Add } from '@material-ui/icons';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
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

function MidiaCard({ cardData }) {
  const classes = useStyles();
  const [cardStyle, setCardStyle] = useState(false);
  const [addList, setAddList] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = async () => {
    setOpen(true);
    window.history.pushState(null, null, `?${cardData.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    window.history.pushState(null, null, '/browse');
  };

  const handleAddListData = () => {
    setAddList(!addList);
    dispatch({ type: 'ADD_MYLIST', payload: cardData });
  }

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
            <ControlPoint />
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
                    >
                      <Add className={classes.modalIcon} />
                    </Button>

                  </div>

                </div>

              </CardMedia>

                <div style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: 25, marginTop: 25 }}>

                  <Typography className={classes.infoText}>
                    {cardData.release_date || cardData.first_air_date}
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
                    Generos: {cardData.genre_ids}
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