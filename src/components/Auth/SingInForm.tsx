import React from "react";
import { inputs, formContainer, button } from './SignInFormStyles';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField, { TextFieldProps} from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';


import Button from'@mui/material/Button'


interface SignInProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    password : string;
    setPassword : React.Dispatch<React.SetStateAction <string>>;
    handleSubmitSignIn :(event: React.FormEvent) => void;
}

const CustomTextField
 = styled(TextField)({
  '& label.Mui-focused': {
    color: '#45CB85',
    
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'lightgrey',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#45CB85',
    },
  },
});




const SignInForm: React.FC<SignInProps> = ({email, setEmail, password, setPassword, handleSubmitSignIn})=>{
    return(
        <form onSubmit={handleSubmitSignIn}
          style={formContainer}> 
          <CustomTextField
           id="outlined-email" 
           label="Email"
           style={inputs}
           type={'text'}
           variant="outlined" 
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           />
          <CustomTextField
            id="outlined-password" 
            label="Password" 
            style={inputs}
            type={'password'}
            variant="outlined" 
            value = { password}
            onChange={(event) => setPassword(event.target.value)}
            />
          <Button
          type="submit"
          variant="contained"
          style={button}
          >Sign In</Button>  
      </form>
    );
  }




export default SignInForm;