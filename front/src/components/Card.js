import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./cont.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";



const styles = theme => ({
  paper: {
    //padding: "4vw",
    //size: "4vw"
    //textAlign: "center",
    //color: "#000000",
    //whiteSpace: "nowrap",
    
    //marginTop: "2vh",
    //marginBottom: "0vh"
    
  },
  media: {
    height: 180,
    paddingTop: '56.25%', // 16:9,
    //marginTop:'30',
    //objectFit: 'cover'
  },
  card: {
    height: '10%',
    width: '100%',
    objectFit: 'cover'
  }
});



const useStyles = makeStyles(styles);

export default function MaterialGrid() {
  const classes = useStyles();
  const history = useHistory();
  const register = () => history.push('/register');
  
  return (
    <div container className="cont">
      <Grid container spacing={10} justify="center">
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}>            
              <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/clinic.png")}
                    style={styles.media}
                    title="Citas"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Citas
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>            
          </Paper>
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}>
          <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="report"                    
                    image={require("./img/report.png")}
                    style={styles.media}
                    title="Historias"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Historias
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
            </Paper>
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}>
            <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/dna.png")}
                    style={styles.media}
                    title="Investigacion"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Investigacion
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
            </Paper>
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}>
          <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/qualification.png")}
                    style={styles.media}
                    title="Examenes"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Examenes
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
            </Paper>
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}><Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/pills.png")}
                    style={styles.media}
                    title="Citas"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Medicamentos
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
              </Paper>
        </Grid>
        <Grid item xl={4} lg={5} md={6} sm={6} xs={11} >
          <Paper className={classes.paper}><Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/newspaper.png")}
                    style={styles.media}
                    title="Citas"
                    onClick={register}          
                  />
                  <CardActions>
                  <Button color="secondary" variant="contained" fullWidth>
                    Noticias
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
