import React, { Component } from 'react'
import { login } from './UserFunctions'
import logo from './img/diagnose.svg'
import './login.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

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
    return (
      <Container maxWidth="xs">
            <form noValidate onSubmit={this.onSubmit}>
              <div id="img">
                <img src={logo} alt="logo" width="40%" height="40%"/>
              </div>
              <h1 className="font-weight-normal" align="center">MedSys</h1>
              <Grid container spacing={2} >
              <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle2" color="initial">Correo electronico</Typography>
                <TextField
                  id="first"
                  value={this.state.email}
                  onChange={this.onChange}
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
              <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle2" color="initial">Contraseña</Typography>
                <TextField
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="text"
                  htmlFor="password"
                  name="password"
                  variant="outlined"
                  required
                  autoComplete
                  autoFocus
                  fullWidth
                  placeholder="Ingrese su contraseña"
                />
              </Grid>
              <Button variant="contained" type="submit" color="primary" fullWidth >
                Iniciar Sesion
              </Button>
              </Grid>
            </form>
      </Container>
    )
  }
}
export default Login