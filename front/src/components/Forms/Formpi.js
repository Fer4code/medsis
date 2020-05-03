import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import {  MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { isToday } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
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
      value: 'Venezolano',
      label: 'V-',
    },
    {
      value: 'Extranjero',
      label: 'E-',
    },
  ];

    export default function FormPropsTextFields() {
    const classes = useStyles();
    const [documenttype, setDocument] = React.useState('Venezolano')
    const [social, setSocial] = React.useState('Instagram')
    const [selectedDate, setSelectedDate] = React.useState(new Date());

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
            maxLength="15"
            //prefix="V-"//
          />
        );
      }
      
      NumberFormatCustom.propTypes = {
        inputRef: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
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
        tel: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };
    
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div id="formpi">
        <TextField
          required
          id="nombre"
          label="Primer Nombre"
          defaultValue=''
          variant="outlined"
          helperText="Indique su primer nombre"
        />
        <TextField
          id="nombre2"
          label="Segundo Nombre"
          defaultValue=''
          variant="outlined"
        />
         <TextField
          required
          id="apellido"
          label="Primer Apellido"
          defaultValue=''
          variant="outlined"
        />
         <TextField
          id="apellido2"
          label="Segundo Apellido"
          defaultValue=''
          variant="outlined"
        />
        <TextField
          id="documenttype"
          select
          label="Tipo de documento"
          defaultValue="V-"
          value={documenttype}
          onChange={handleChange}
         
          helperText="Seleccione documento"
          variant="outlined"
        >
          {doctype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        label="Nro de cedula"
        type="input"
        defaultValue=''
        name="id"
        id="cedula"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"
        />
        <TextField
        label="Telefono"
        type="text"
        defaultValue='58'
        name=""
        id="telf"
        InputProps={{
            inputComponent: Tel,
          }}
        variant="outlined"
        />
        <TextField
          id="email"
          label="Correo Electronico"
          htmlFor="email"
          defaultValue=''
          isEmail
          variant="outlined"
          
        />
        <TextField
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
        <TextField
          id="redsocial"
          label="Usuario"
          defaultValue=''
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Fecha de nacimiento"
        format="dd/MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
        </MuiPickersUtilsProvider>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />
      </div>
    </form>
  );
}