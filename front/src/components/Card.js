import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./cont.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";



const styles = {
  paper: {
    width: '15rem'
  }

};



const useStyles = makeStyles(styles);

export default function MaterialGrid() {
  const classes = useStyles();
  const history = useHistory();
  const register = () => history.push('/register');
  
  return (
    <div container className="cont">
      <Grid container spacing={10} justify="center">
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11}  >
          <Paper className={classes.paper} >            
              <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/clinic.png")}
                    
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
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Paper className={classes.paper}>
          <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="report"                    
                    image={require("./img/report.png")}
                    
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
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Paper className={classes.paper}>
            <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/dna.png")}
                    
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
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Paper className={classes.paper}>
          <Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/qualification.png")}
                    
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
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Paper className={classes.paper}><Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/pills.png")}
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
        <Grid item xl={4} lg={4} md={4} sm={6} xs={11} >
          <Paper className={classes.paper}><Card>
                <CardActionArea style={styles.card}>
                  <CardMedia
                    className="ccalendari"
                    component="img"
                    alt="Citas"                    
                    image={require("./img/newspaper.png")}
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
      </Grid>
    </div>
  );
};
