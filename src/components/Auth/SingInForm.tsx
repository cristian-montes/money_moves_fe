import React from "react";
import { inputs, formContainer, button, errorMessageStyles } from './SignInFormStyles';
import Box from '@mui/material/Box';


import Button from'@mui/material/Button'
import CustomField from "../CustomField/CustomField";


interface SignInProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    password : string;
    setPassword : React.Dispatch<React.SetStateAction <string>>;
    handleSubmitSignIn :(event: React.FormEvent) => void;
    errorMessage: string;
}

// const CustomTextField
//  = styled(TextField)({
//   '& label.Mui-focused': {
//     color: '#45CB85', 
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'lightgrey',
//       color: 'white'
//     },
//     '&:hover fieldset': {
//       borderColor: 'white',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#45CB85',
//     },
//   },
// });



const SignInForm: React.FC<SignInProps> = ({email, setEmail, password, setPassword, handleSubmitSignIn, errorMessage })=>{
    return(
        <Box component="form" onSubmit={handleSubmitSignIn} style={formContainer}> 
          <CustomField
           sx={{ input: { color: 'white' }}}         
           id="signin-email" 
           name = "signin-email" 
           label="Enter email"
           ariadescribedby={'Enter your register email'}
           style={inputs}
           type={'text'}
           variant="outlined" 
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           />
          <CustomField
            sx={{ input: { color: 'white' }}}         
            id="signin-password" 
            name = "signin-password" 
            label="Enter Password" 
            ariadescribedby={'Enter your register password'}
            style={inputs}
            type={'password'}
            variant="outlined" 
            value = { password}
            onChange={(event) => setPassword(event.target.value)}
            />

            <p style={errorMessageStyles}>{errorMessage}</p>
          <Button
          disabled={!email.length && !password.length}
          type="submit"
          variant="contained"
          style={button}
          >Sign In</Button>  
      </Box>
    );
  }




export default SignInForm;