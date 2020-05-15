import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {  MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputAdornment from '@material-ui/core/InputAdornment';
import './formpi.css'
import Typography from '@material-ui/core/Typography'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

const socialmedia = [
  {
    value: 'Facebook',
    label: 'FB',
  },
  {
    value: 'Instagram',
    label: 'IG',
  },
  {
    value: 'Twitter',
    label: 'TW',
  }
];

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
  const bcontext = [
    {
      value: 'Robusto',
      label: 'Robusto',
    },
    {
      value: 'Flaco',
      label: 'Flaco',
    },
    {
      value: 'Sobrepeso',
      label: 'Sobrepeso',
    }
  ];

    export default function FormPropsTextFields() {
    const classes = useStyles();
    const [documenttype, setDocument] = React.useState('V-')
    const [social, setSocial] = React.useState('Instagram')
    const [bodycontext, setContext] = React.useState(bcontext)
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const context = (event) => {
      setContext(event.target.value)
    }

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const socialChange = (event) => {
      setSocial(event.target.value)
    }
    const handleChange = (event) => {
        setDocument(event.target.value);
    };
    const [values, setValues] = React.useState({
        numberformat: '',
    }); 

    
    function NumberFormatCustom(props) {
        const { inputRef, onChange, ...other } = props;
      
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
    function Tel2(props) {
      const { inputRef, onChange, ...other } = props;
    
      return (
        <NumberFormat
          {...other}
          format="+(##)### ###-####"
          getInputRef={inputRef}
          onValueChange={(values) => {
            onChange({
              target: {
                tel2: props.tel,
                value2: values.value,
              },
            });
          }}

          isNumericString
        />
      );
    }
    
      Tel2.propTypes = {
      inputRef: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
  };
    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
      { title: 'The Good, the Bad and the Ugly', year: 1966 },
      { title: 'Fight Club', year: 1999 },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
      { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
      { title: 'Forrest Gump', year: 1994 },
      { title: 'Inception', year: 2010 },
      { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
      { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { title: 'Goodfellas', year: 1990 },
      { title: 'The Matrix', year: 1999 },
      { title: 'Seven Samurai', year: 1954 },
      { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
      { title: 'City of God', year: 2002 },
      { title: 'Se7en', year: 1995 },
      { title: 'The Silence of the Lambs', year: 1991 },
      { title: "It's a Wonderful Life", year: 1946 },
      { title: 'Life Is Beautiful', year: 1997 },
      { title: 'The Usual Suspects', year: 1995 },
      { title: 'Léon: The Professional', year: 1994 },
      { title: 'Spirited Away', year: 2001, },
      { title: 'Saving Private Ryan', year: 1998 },
      { title: 'Once Upon a Time in the West', year: 1968 },
      { title: 'American History X', year: 1998 },
      { title: 'Interstellar', year: 2014 },
    ];
    
  return (
    <form className={classes.root} autoComplete="off" id="formpi" >
        <TextField className="cname"
          id="name"
          required
          label="Primer Nombre"
          defaultValue=''
          variant="outlined"
          helperText="Indique su primer nombre"
        />
        <TextField
          className="cname2"
          id="name2"
          label="Segundo Nombre"
          defaultValue=''
          variant="outlined"
        />
         <TextField
          className="clast"
          id="last"
          required
          label="Primer Apellido"
          defaultValue=''
          variant="outlined"
        />
         <TextField
          className="clast2"
          id="last2"
          label="Segundo Apellido"
          name="Segundo apellido"
          defaultValue=''
          variant="outlined"
        />
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
        <TextField className="cage"
          id="age"
          label="Age"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField className="cdocumenttype"
          id="documenttype"
          required
          select
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
        <TextField className="cidnumber"
        id="idnumber"
        required
        label="Nro de cedula"
        type="input"
        defaultValue=''        
        startadornment={<InputAdornment position="start">{documenttype}</InputAdornment>}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"/>
        <TextField className="ctel1"
        id= "tel1"
        label="Telefono"
        type="text"
        value='58'
        name=""
        InputProps={{
            inputComponent: Tel,
          }}
        variant="outlined"/>
        <TextField className="ctel2"
        id= "tel2"
        label="Telefono opcional"
        type="text"
        value=''
        name=""
        InputProps={{
            inputComponent: Tel2,
          }}
        variant="outlined"/>
        <TextField id="email"
          style={{ width: 310 }}
          label="Correo Electronico"
          htmlFor="email"
          defaultValue=''
          variant="outlined"          
        />
        <TextField className="csocial"
          id="social"
          select
          label="Red Social"
          defaultValue="IG"
          value={social}
          onChange={socialChange}         
          helperText="Red Social"
          variant="outlined"
        >
          {socialmedia.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="cuser"
          id="redsocial"
          label="Usuario"
          defaultValue=''
          variant="outlined"
        />
        <TextField className="cbirthplace"
          id="birthplace"
          required
          label="Lugar de nacimiento"
          placeholder="Ciudad, Estado, Pais"
          defaultValue=''
          variant="outlined"
          helperText=""
        />
        <TextField className="cresidenceplace"
          id="residenceplace"
          required
          label="Lugar de residencia"
          placeholder="Ciudad, Estado, Pais"
          defaultValue=''
          variant="outlined"
          helperText=""
        />
        <TextField className="cprofession"
          id="profession"
          required
          label="Profesion"
          placeholder=""
          defaultValue=''
          variant="outlined"
          helperText=""
        />
        <FormControlLabel
          value="top"
          required
          control={<Switch color="primary" />}
          label="Alergias"
          labelPlacement="top"
          
        />
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Antecedentes"
          labelPlacement="top"
        />
        <Autocomplete
      multiple
      className="ccheck"
      id="checkboxes-tags-demo"
      options={top100Films}      
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Alergias" placeholder="Alergias" />
      )}
    />
        <TextField className="consult"
          id="consult"
          label="Motivo de la consulta"
          multiline
          placeholder="Motivo de la consulta"
          variant="outlined"
        />
        <Autocomplete className="csympthons"
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}      
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Sintomas" placeholder="Sintomas" />
          )}
        />
        <TextField className="cpersonalrecords"
          id="personalrecords"
          label="Antecedentes personales"
          multiline
          placeholder="Antecedentes personales"
          variant="outlined"
        />
        <TextField className="cfamilyrecords"
          id="familyrecords"
          label="Antecedentes familiares"
          multiline
          placeholder="Antecedentes familiares"
          variant="outlined"
        />
        <Typography className="ctension"
        variant="h6" 
        color="initial"
        >Tension arterial</Typography>
        <TextField className="csistolica"
          id="tsistolica"
          label="Sistolica"
          placeholder="Sistolica"
          variant="outlined"
          helperText="mmHg"
        />
        <TextField className="cdiastolica"
          id="tdiastolica"
          label="Diastolica"
          placeholder="Diastolica"
          variant="outlined"
          helperText="mmHg"
        />
        <TextField className="cpulse"
          id="pulse"
          label="Pulso"
          placeholder="Pulso"
          variant="outlined"
          helperText="P/min"
        />
        <TextField
          className="crespiratoryfreq"
          id="respiratoryfreq"
          label="Frecuencia respiratoria"
          defaultValue=''
          variant="outlined"
        />
        <Typography className="ctexttemp"
        variant="h6" 
        color="initial"
        >Temperatura</Typography>
        <TextField className="ctemp"
          id="temp"
          label="Temp"
          placeholder="Temp"
          variant="outlined"
          helperText=" °C"
        />
        <TextField className="cbodycontext"
          id="bodycontext"
          required
          select
          label="Contextura"
          defaultValue=""
          value={bodycontext}
          onChange={context}
          variant="outlined"
        >
          {bcontext.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="ccognitive"
          id="cognitive"
          label="Rasgos cognitivos"
          multiline
          placeholder="Rasgos cognitivos"
          variant="outlined"
        />
        <TextField className="cdiagnostic"
          id="diagnostic"
          label="Diagnostico"
          name="diagnostico"
          multiline
          placeholder="Diagnostico"
          variant="outlined"
        />
    </form>
  );
}