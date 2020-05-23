import React, { Component } from 'react'
import { register } from './UserFunctions'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'



class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      username: '',
      last_name: '',
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <Container maxWidth="xs" alignContent="space-around">
        <Grid container spacing={2}>
        <form noValidate onSubmit={this.onSubmit}>
              <h1>Register</h1>
              <Grid Item xl={6} lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="name">Ingrese su nombre</label>
                <TextField
                  id="first"
                  label="Nombres"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  type="text"
                  htmlFor="name"
                  name="first_name"
                  variant="outlined"
                  required
                  autoComplete
                  autoFocus
                  placeholder="Ingrese su nombre"
                  size="small"
                />
              </Grid>
              <Grid Item xl={6} lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="last" >Ingrese su apellido</label>
                <TextField
                  id="last"
                  label="Apellidos"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  type="text"
                  htmlFor="name"
                  name="last_name"
                  
                  variant="outlined"
                  required
                  autoComplete
                  autoCapitalize
                  autoFocus
                  size="small"
                  placeholder="Ingrese su apellido"
                />
                </Grid>
                <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
                <label htmlFor="username" >Ingrese su usuario</label>
                <TextField
                  id="username"
                  label="Usuario"
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  htmlFor="username"
                  name="username"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete
                  autoCapitalize
                  autoFocus
                  size="small"
                  placeholder="Ingrese su nombre de usuario"
                />
              </Grid>
              <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="email" >Ingrese su Correo Electronico</label>
                <TextField
                  id="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="email"
                  htmlFor="email"
                  name="email"
                  fullWidth
                  variant="outlined"
                  placeholder="Ingrese su correo electronico"
                  required
                  autoComplete
                  autoCapitalize
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid Item xl={12} lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="password">Ingrese su contraseña</label>
                <TextField
                  id="password"
                  label="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password"
                  htmlFor="name"
                  name="password"
                  fullWidth
                  variant="outlined"
                  required
                  autoFocus
                  placeholder="Ingrese su contraseña"
                  size="small"
                />
              </Grid>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
        </Grid>
      </Container>
    )
  }
}

export default Register
