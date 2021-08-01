import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


function App() {
  return (
    <Container maxWidth="md">
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            React Practice
          </Typography>
        </Grid>

        {/* Card can be generated using .map() 
            For that you need to store the projects an arry or object that can be iterated on
            should have project title and desc and img
            How to make it link to the project page? -> breakdown sesh
        */}
        <Grid item>
          <Grid container spacing={4} justifyContent='center' alignItems='center'>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Container>

  );
}

export default App;
