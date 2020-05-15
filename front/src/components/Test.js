import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  const [documenttype, setDocument] = React.useState('V-')  
  return (
    <NumberFormat
      {...other}
      decimalSeparator={false}
      thousandSeparator={'.'}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}

      isNumericString
      maxLength="12"
      prefix={documenttype}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
const doctype = [
  {
    value: 'V-',
    label: 'V-',
  },
  {
    value: 'E-',
    label: 'E-',
  },
];
const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [documenttype, setDocument] = React.useState('V-')
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setDocument(event.target.value);
};


  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Segundo Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        className="cbirthdate"
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Fecha de nacimiento"
        format="dd/MM/yyyy"
        disableFuture
        orientation="landscape"
        rightArrowIcon
        maxDateMessage="Fecha posterior al dia de hoy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
        </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="cage"
          id="age"
          label="Age"
          fullWidth
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                  <TextField className="cdocumenttype"
                id="documenttype"
                required
                select
                fullWidth
                label="Tipo de documento"
                defaultValue="V-"
                value={documenttype}
                onChange={handleChange}
                variant="outlined"
              >
                {doctype.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="cidnumber"
        id="idnumber"
        required
        fullWidth
        label="Nro de cedula"
        type="input"
        defaultValue=''        
        startadornment={<InputAdornment position="start">{documenttype}</InputAdornment>}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"/>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}