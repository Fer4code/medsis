import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


function MyCard(props) {
  return (
        <div>
          <Grid container spacing={5}>
          <Link underline="none" component={RouterLink} to="/">
              <Card>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="./doctor.jpg"
                  title="Contemplative Reptile"
                  type="submit"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link underline="none" component={RouterLink} to="/register">
            <Card>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                type="submit"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Link>
          </Grid>            
        </div>
  );
}

export default (MyCard);