import React, { Component } from 'react'
import { login } from './UserFunctions'
import logo from './img/diagnose.svg'
import './login.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  imagen: {
    width: '50%',
    height: '50%',
    marginLeft: theme.spacing(16),
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(14),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  submit: {
    fontSize: theme.typography.pxToRem(16),
    margin: theme.spacing(4, 0, 2),
  },
  root: {
    width: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  img: {
    width: '50%',
    heigth:'50%',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(8)
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(0, 0 ,2)
  }
});

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
  document.body.classList.remove("background");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.form}>     
            <form noValidate onSubmit={this.onSubmit}>
              <div>
                <img className={classes.imagen} src={logo} alt="logo"/>
              </div>
              <h1 className={classes.title} >MedSys</h1>
              <Grid container spacing={2} >
              <Grid className={classes.paper} Item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle2" color="initial">Correo electronico</Typography>
                <TextField
                  id="first"
                  onChange={this.onChange}
                  value={this.state.email}
                  type="text"
                  htmlFor="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="string"
                  autoFocus
                  placeholder="Correo electronico"
                />
              </Grid>
              <Grid className={classes.paper} Item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle2" color="initial">Contraseña</Typography>
                <TextField
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password"
                  htmlFor="password"
                  name="password"
                  variant="outlined"
                  required
                  autoComplete="string"
                  fullWidth
                  placeholder="Ingrese su contraseña"
                />
              </Grid>
              <Button className={classes.submit} variant="contained" type="submit" color="primary" fullWidth >
                Iniciar Sesion
              </Button>
              </Grid>
            </form>
      </Container>
    )
  }
}
export default withStyles(useStyles)(Login);