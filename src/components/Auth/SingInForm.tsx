import React from "react";
import { inputs, formContainer, button, errorMessageStyles } from './SignInFormStyles';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';


import Button from'@mui/material/Button'


interface SignInProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    password : string;
    setPassword : React.Dispatch<React.SetStateAction <string>>;
    handleSubmitSignIn :(event: React.FormEvent) => void;
    errorMessage: string;
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



const SignInForm: React.FC<SignInProps> = ({email, setEmail, password, setPassword, handleSubmitSignIn, errorMessage })=>{
    return(
        <form onSubmit={handleSubmitSignIn} style={formContainer}> 
          <CustomTextField
           sx={{ input: { color: 'white' }}}         
           id="outlined-email" 
           label="Email"
           style={inputs}
           type={'text'}
           variant="outlined" 
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           />
          <CustomTextField
            sx={{ input: { color: 'white' }}}         
            id="outlined-password" 
            label="Password" 
            style={inputs}
            type={'password'}
            variant="outlined" 
            value = { password}
            onChange={(event) => setPassword(event.target.value)}
            />

            <p style={errorMessageStyles}>{errorMessage}</p>
          <Button
          type="submit"
          variant="contained"
          style={button}
          >Sign In</Button>  
      </form>
    );
  }




export default SignInForm;