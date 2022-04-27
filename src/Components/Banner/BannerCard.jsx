import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
  CardActions,
  Modal,
  CardMedia,
  Fade,
  Backdrop
 } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import { Check, Add } from '@material-ui/icons';
import { useStyles as ModalStyles } from '../MidiaCard';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  btnDiv: {
    marginBottom: '15vh',
    paddingLeft: theme.spacing(4),
  },
  bannerTitle: {
    paddingLeft: theme.spacing(4),
    marginTop: '25vh',
    fontSize: '5vw',
    fontFamily: 'netflix',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: '-webkit-linear-gradient(#eee, #333)',
  },
  infoButton: {
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1vw',
    height: 25,
    [theme.breakpoints.up('md')] : {
      height: 50,
    }
  },
  watchButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'white',
    height: 25,
    [theme.breakpoints.up('md')] : {
      height: 50,
    }
  }
}));

function BannerCard({ latest }) {
  const classes = useStyles();
  const modalClasses = ModalStyles();
  const [open, setOpen] = useState(false);
  const [addList, setAddList] = useState(false);

  const dispatch = useDispatch();
  const myListRedux = useSelector((state) => state.NetflixReducer.myList);
  
  const latestBackground = latest.backdrop_path || latest.poster_path;

  const handleOpen = async () => {
    setOpen(true);
    window.history.pushState(null, null, `?${latest.id}`);
  };

  const handleClose = () => {
    console.log(window.history.go);
    setOpen(false);
    window.history.pushState(null, null, window.history.back());
  };

  const handleAddListData = async () => {
    setAddList(!addList);
    if(myListRedux.some((m) => m.id === latest.id)) {
      window.alert('Este conteúdo já está na sua lista');
    } else {
      dispatch({ type: 'ADD_MYLIST', payload: latest });
    }
  }

  return (
    <Card
      className={classes.root}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${latestBackground})` }}
    >

        <Typography className={ classes.bannerTitle }>
          {latest.title || latest.name}
        </Typography>

      <CardActions className={ classes.btnDiv }>

        <Button
          className={classes.watchButton}
          variant='contained'
        >
          <PlayArrowSharpIcon />
          Assistir
        </Button>

        <Button
          className={classes.infoButton}
          onClick={handleOpen}
          aria-label="show more"
          variant='contained'
        >
          <InfoOutlinedIcon style={{ marginRight: 5, height: '5vh' }}/>
          Mais informações
        </Button>

      </CardActions>

      <Modal
        aria-labelledby="dataCard-modal"
        aria-describedby="dataCard-modal-data"
        className={modalClasses.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={modalClasses.paper}>

            <Card className={modalClasses.modalCard}>

              <CardMedia
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${latest.backdrop_path})` }}
                className={modalClasses.modalMedia}
              >

                <div className={modalClasses.mediaContainer}>

                  <Typography className={modalClasses.infoTitle}>
                    {latest.title || latest.name || latest.original_name}
                  </Typography>

                  <div>

                    <Button
                      className={modalClasses.modalButton}
                      aria-label="Assistir"
                      variant='contained'
                    >
                      <PlayArrowSharpIcon className={modalClasses.modalIcon} />
                      <text>Assistir</text>
                    </Button>

                    <Button
                      className={modalClasses.modalListBtn}
                      aria-label="Adicionar á minha lista"
                      variant='contained'
                      onClick={handleAddListData}
                    >
                      {addList ?  <Check /> : <Add className={modalClasses.modalIcon} />}
                    </Button>

                  </div>

                </div>

              </CardMedia>

                <div style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: 25, marginTop: 25 }}>

                  <Typography className={modalClasses.infoText}>
                    {latest.release_date || latest.first_air_date}
                  </Typography>

                  <Typography className={modalClasses.infoText}>
                      {latest.runtime || latest.number_of_seasons}
                  </Typography>


                </div>



                <div style={{ display: 'flex' }}>

                  <Typography className={modalClasses.infoOverview}>
                    {latest.overview}
                  </Typography>

                  <Typography className={modalClasses.infoGenres} >
                    Generos: {latest.genre_ids}
                  </Typography>

                </div>

            </Card>

          </div>
        </Fade>
      </Modal>

    </Card>
  );
}

export default BannerCard;
