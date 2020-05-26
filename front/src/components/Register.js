import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { register } from './UserFunctions'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import logo from './img/register.svg'
import Typography from '@material-ui/core/Typography'


const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    fontSize: theme.typography.pxToRem(14),
    margin: theme.spacing(4, 0, 2),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.h2,
  },
  img: {
    width: '25%',
    heigth:'25%',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(8)
  },
  title: {
    alignText: 'center',
    margin: theme.spacing(4, 0 ,2)
  }
});
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            username:'',
            email: '',
            password: '',
            errors: {}
          }
          
          this.onChange = this.onChange.bind(this)
          this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {          
          username: this.state.username,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
        }    
        register(newUser).then(res => {
          this.props.history.push(`/login`)
        })
      }
      
    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth="sm">
              <div className={classes.paper}>
                <form onSubmit={this.onSubmit} style={useStyles.form}>
                <div id="img">
                <img src={logo} className={classes.img} alt="registerlogo"/>
              </div>
                <Typography variant="h4" color="initial" align="center" className={classes.title}>Crear una cuenta</Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                          <Typography variant="subtitle2" color="initial">Nombres:</Typography>
                        <TextField
                                id="first"
                                
                                value={this.state.first_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="first_name"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                placeholder="Ingrese su nombre"
                                size="small"
                                />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Apellidos:</Typography>
                        <TextField
                                id="last"
                                value={this.state.last_name}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="name"
                                name="last_name"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                autoCapitalize="true"
                                size="small"
                                placeholder="Ingrese su apellido"
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Usuario</Typography>
                        <TextField
                                id="user"
                                value={this.state.username}
                                onChange={this.onChange}
                                type="text"
                                htmlFor="username"
                                name="username"
                                fullWidth
                                variant="outlined"
                                required
                                autoComplete="true"
                                size="small"
                                placeholder="Usuario"
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Correo Electronico:</Typography>
                              <TextField
                                id="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                type="email"
                                htmlFor="email"
                                name="email"
                                fullWidth
                                variant="outlined"
                                placeholder="Ingrese su correo electronico"
                                required
                                autoComplete="true"
                                size="small"
                                />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Ingrese su contraseña:</Typography>
                        <TextField
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    type="password"
                                    htmlFor="password"
                                    name="password"
                                    fullWidth
                                    variant="outlined"
                                    required
                                    placeholder="Ingrese su contraseña"
                                    size="small"
                                    />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle2" color="initial">Confirme su contraseña</Typography>
                        <TextField
                                    id="password2"
                                    
                                    onChange={this.onChange}
                                    type="password2"
                                    htmlFor="password"
                                    name="password2"
                                    fullWidth
                                    variant="outlined"
                                    required
                                    placeholder="Confirme su contraseña"
                                    size="small"
                                    />
                        </Grid>                                                                  
                    </Grid>
                    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
                </form>
              </div>
                </Container>
        )
    }
}

export default withStyles(useStyles)(Register);