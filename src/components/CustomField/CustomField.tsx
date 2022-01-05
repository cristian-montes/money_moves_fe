import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface CustomFieldProps { 
    sx?: {input: { color: string}}
    id : string, 
    label : string,
    style? : any, 
    type : string, 
    variant?: any, 
    value : string, 
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void,
    ariadescribedby:string,
    name: string,
    inputProps?: {} | undefined
}


const CustomTextField
 = styled(TextField)({
  '& label.Mui-focused': {
    color: '#45CB85', 
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'lightgrey',
      color: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#45CB85',
    },
  },
});

const CustomField: React.FC<CustomFieldProps> = ({sx, id, label, style, type, variant, value, onChange, ariadescribedby, name, inputProps}) => { 
    return( 
        <CustomTextField
            sx={sx}
            id={id}
            label={label}
            style={style}
            type={type}
            variant={variant}
            value={value}
            onChange={onChange}
            aria-required= {true}
            aria-describedby={ariadescribedby}
            name={name}
            InputProps={inputProps}
        />
    )
}

export default CustomField;