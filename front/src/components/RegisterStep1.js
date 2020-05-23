import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { register } from './UserFunctions'
import Button from '@material-ui/core/Button'

class RegisterStep1 extends Component {
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
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
        }
    
        register(newUser).then(res => {
          this.props.history.push(`/login`)
        })
      }

    render() {
        const { values, handleChange } = this.props;
        return (
            <Container maxWidth="sm">
                <form onSubmit={this.onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
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
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
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
                        
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                    </Grid>
                    <Button variant="outlined" color="default" type="submit">
                      Registrarse
                    </Button>
                </form>
                </Container>
        )
    }
}

export default RegisterStep1
