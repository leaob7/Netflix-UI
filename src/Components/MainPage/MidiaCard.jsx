import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, IconButton, Modal, Fade, Backdrop, Typography } from '@material-ui/core';
import { PlayCircleOutline, ControlPoint, ExpandMore } from '@material-ui/icons';

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
  },
  paper: {
    border: '2px solid #000',
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    width: '50%',
    height: '100%',
    marginTop: 100,
  },
  modalCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
  modalMedia: {
    height: '50%',
    width: '100%',
    backgroundPosition: 'center top',
    backgroundSize: '60% 100%',
  },
  infoText: {
    color: 'white',
    fontSize: 30,
  },
  infoOverview: {
    padding: 25,
    width: '50%',
    color: 'white',
    fontSize: 15,
  }
}));

function MidiaCard({ movie }) {
  const classes = useStyles();
  const [cardStyle, setCardStyle] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    window.history.pushState(null, null, `?${movie.id}`);
  };

  const handleClose = () => {
    setOpen(false);
    window.history.pushState(null, null, '/browse');
  };

  return (
    <Card
      className={cardStyle ? classes.rootHover : classes.root}
      onMouseEnter={() => setCardStyle(true)}
      onMouseLeave={() => setCardStyle(false)}
    >

      <CardMedia
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
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

          <IconButton className={classes.cardButtons} aria-label="Adicionar á minha lista">
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
                className={classes.modalMedia}
              />

              <Typography className={classes.infoText}>
                {movie.title}
              </Typography>

                <div>
                  <IconButton
                    className={classes.cardButtons}
                    aria-label="Assistir"
                  >
                    <PlayCircleOutline />
                  </IconButton>

                  <IconButton className={classes.cardButtons} aria-label="Adicionar á minha lista">
                    <ControlPoint />
                  </IconButton>
                  
                </div>

                <div>
                  <Typography className={classes.infoText}>
                    { movie.release_year }
                  </Typography>

                  <Typography className={classes.infoText}>
                    { movie.first_air_date }
                  </Typography>
                </div>

              <div style={{ display: 'flex' }}>

                <Typography className={classes.infoOverview}>
                  { movie.overview }
                </Typography>

                <Typography className={classes.infoOverview}>
                    Generos
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
