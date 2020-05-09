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

    export default function FormPropsTextFields() {
    const classes = useStyles();
    const [documenttype, setDocument] = React.useState('V-')
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
    <form className={classes.root} autoComplete="off" id="formpi">
      <Autocomplete
      multiple
      className="ccheck"
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
      )}
    />
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
        <TextField className="tel1"
        id= "tel1"
        label="Telefono"
        type="text"
        value='58'
        name=""
        InputProps={{
            inputComponent: Tel,
          }}
        variant="outlined"/>
        <TextField className="tel2"
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
        <TextField id="social"
          style={{ width: 250 }}
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
        <FormControlLabel
          value="top"
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
        <TextField className="consult"
          id="consult"
          label="Motivo de la consulta"
          multiline
          rows={4}
          placeholder="Motivo de la consulta"
          variant="outlined"
        />
        <TextField
          id="sympthons"
          fullWidth
          label="Sintomas"
          multiline
          rows={4}
          placeholder="Sintomas"
          variant="outlined"
        />
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
    </form>
  );
}