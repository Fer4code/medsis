import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import SwipeableViews from 'react-swipeable-views';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


 
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function tab2Props(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
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
function Tel(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      format="+(##)### ###-####"
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            tel: props.tel,
            value: values.value,
          },
        });
      }}

      isNumericString
    />
  );
}

  Tel.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
const bloodtype = [
  {
    value: 'A positivo',
    label: 'A+',
  },
  {
    value: 'A negativo',
    label: 'A-',
  },
  {
    value: 'B positivo',
    label: 'B+',
  },
  {
    value: 'B negativo',
    label: 'B-',
  },
  {
    value: 'O positivo',
    label: 'O+',
  },
  {
    value: 'O negativo',
    label: 'O-',
  },
  {
    value: 'AB positivo',
    label: 'AB+',
  },
  {
    value: 'AB negativo',
    label: 'AB-',
  },
  {
    value: 'Desconocido',
    label: 'Desconoce',
  }
];
const sextype = [
  {
    value: 'F',
    label: 'Femenino',
  },
  {
    value: 'M',
    label: 'Masculino',
  },
];
const mstatus = [
  {
    value: 'Soltero',
    label: 'Soltero'
  },
  {
    value: 'Casado',
    label: 'Casado'
  }, {
    value: 'Divorciado',
    label: 'Divorciado'
  },
  {
    value: 'Viudo',
    label: 'Viudo'
  },
]
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
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.h2,
  },  
}));


export default function SignUp() {
  const classes = useStyles();
  const [documenttype, setDocument] = React.useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [blood, setBlood] = React.useState('')
  const [sex, setSex] = React.useState('')
  const [mastatus, setStatus] = React.useState('')
  const theme = useTheme();
  const [tab1value, settab1Value] = React.useState(0);
  const [tab2value, settab2Value] = React.useState(0);

  const tab1handleChange = (event, newValue) => {
    settab1Value(newValue);
  };

  const tab1handleChangeIndex = index => {
    settab1Value(index);
  };
  const tab2handleChange = (event, newValue) => {
    settab2Value(newValue);
  };

  const tab2handleChangeIndex = index => {
    settab2Value(index);
  };

  const statusSelect = (event) => {
    setStatus(event.target.value)
  }

  const sexSelect = (event) => {
    setSex(event.target.value)
  }

  const bloodSelect = (event) => {
    setBlood(event.target.value)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const docChange = (event) => {
    setDocument(event.target.value);
};

return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} >
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Historia médica
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
                autoComplete="sname"
                name="secondName"
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
                autoComplete="lname"
                name="last_name"
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Apellido"
                autoFocus
                
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="lname2"
                name="second_last_name"
                variant="outlined"
                required
                fullWidth
                id="second_last_name"
                label="Segundo Apellido"
                autoFocus
                
              />
            </Grid>
            <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="h6">Datos Personales</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        className="cbirthdate"
        autoOk
        fullWidth
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
          
          defaultValue="Age"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="csex"
              id="isex"
              required
              select
              autoComplete
              fullWidth
              label="Sexo"
              value={sex}
              onChange={sexSelect}         
              variant="outlined"
        >
              {sextype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="tblood"
          id="bloodtype"
          select
          fullWidth
          label="Tipo de sangre"
          value={blood}
          onChange={bloodSelect}         
          variant="outlined"
        >
          {bloodtype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                  <TextField className="cdocumenttype"
                id="documenttype"
                name="docname"
                required
                select
                fullWidth
                label="Tipo de documento"
                defaultValue="V-"
                value={documenttype}
                onChange={docChange}
                variant="outlined"
                autoComplete
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
                  label="Nro de documento"
                  type="input"
                  
                          
                  startadornment={<InputAdornment></InputAdornment>}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    
                  }}
                  variant="outlined"/>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="maritalstatus"
                    id="idmaritalstatus"
                    select
                    fullWidth
                    label="Estado civil"
                    value={mastatus}
                    onChange={statusSelect}         
                    variant="outlined"
        >
          {mstatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <TextField className="ctel1"
                id= "tel1"
                fullWidth
                label="Telefono"
                type="text"
                value='58'
                name="tel1"
                
                InputProps={{
                    inputComponent: Tel,
                  }}
                variant="outlined"/>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <TextField className="ctel2"
                id= "tel2"
                fullWidth
                label="Telefono secundario"
                type="text"
                value='58'
                name="tel2"
                
                InputProps={{
                    inputComponent: Tel,
                  }}
                variant="outlined"/>
            </Grid>
            <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
            <TextField
                autoComplete="address"
                name="addres"
                variant="outlined"
                
                required
                fullWidth
                id="firstName"
                label="Direccion"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="municipio"
                name="municipio"
                variant="outlined"
                
                required
                fullWidth
                id="municipio"
                label="Municipio"
                autoFocus
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
              <TextField
                autoComplete="estate"
                name="estate"
                variant="outlined"
                required
                fullWidth
                id="estate"
                label="Estado"
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
                label="Pais"
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
                label="Codigo Postal"
                autoFocus
              />
            </Grid>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>            
                                                                              <Typography variant="h6" color="initial">Detalles</Typography>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <AppBar position="static" color="default" >
                <Tabs
                  value={tab1value}
                  onChange={tab1handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  FullWidthTabs
                  aria-label="full width tabs example"
                >
                  <Tab label="Motivo de consulta" {...a11yProps(0)} />
                  <Tab label="Ant. personales" {...a11yProps(1)} />
                  <Tab label="Ant. familiares" {...a11yProps(2)} />
                  <Tab label="Alergias" {...a11yProps(3)} />
                  <Tab label="Vacunas" {...a11yProps(4)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab1value}
                onChangeIndex={tab1handleChangeIndex}
              >
            <TabPanel value={tab1value} index={0} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="motivo_consulta"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="motivo_consulta"
                        label="Motivo de consulta"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={1} dir={theme.direction}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="ant_personales"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="ant_personales"
                        label="Antecedentes personales"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={2} dir={theme.direction}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="ant_familiares"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="ant_familiares"
                        label="Antecedentes familiares"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={3} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="Alergias"
                        variant="outlined"
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="allergies"
                        label="Alergias"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={4} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="Vacunas"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="Vaccines"
                        label="Antecedentes familiares"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>      
          </SwipeableViews>
            </Grid>
            
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="h6">Examinacion</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <AppBar position="static" color="default" >
                <Tabs
                  value={tab2value}
                  onChange={tab2handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  FullWidthTabs
                  aria-label="full width tabs example"
                >
                  <Tab label="Examen Fisico" {...tab2Props(0)} />
                  <Tab label="Medicamentos" {...tab2Props(1)} />
                  <Tab label="Observaciones Generales" {...tab2Props(2)} />
                  <Tab label="Signos Cognitivos" {...tab2Props(3)} />
                  <Tab label="Intervenciones Quirurgicas" {...tab2Props(4)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab2value}
                onChangeIndex={tab2handleChangeIndex}
              >
            <TabPanel value={tab2value} index={0} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="motivo_consulta"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="motivo_consulta"
                        label="Motivo de consulta"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={1} dir={theme.direction}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="ant_personales"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="ant_personales"
                        label="Antecedentes personales"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={2} dir={theme.direction}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="ant_familiares"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="ant_familiares"
                        label="Antecedentes familiares"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={3} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="Alergias"
                        variant="outlined"
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="allergies"
                        label="Alergias"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={4} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="Vacunas"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="Vaccines"
                        label="Antecedentes familiares"
                        autoFocus
                      />
                    </Grid>
            </TabPanel>      
          </SwipeableViews>
            </Grid>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}