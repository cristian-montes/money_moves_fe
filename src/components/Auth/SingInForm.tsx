import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import Button from'@mui/material/Button'


interface SignInProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    password : string;
    setPassword : React.Dispatch<React.SetStateAction <string>>;
    handleSubmitSignIn :(event: React.FormEvent) => void;
}


const SignInForm: React.FC<SignInProps> = ({email, setEmail, password, setPassword, handleSubmitSignIn})=>{
    return(
        <form onSubmit={handleSubmitSignIn}> 
          
          <TextField 
            id="outlined-email" 
            label="Email" 
            type={'text'}
            variant="outlined" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
          <TextField 
            id="outlined-password" 
            label="Password" 
            type={'password'}
            variant="outlined" 
            value = { password}
            onChange={(event) => setPassword(event.target.value)}
            />
          <Button
          type="submit">Sign In</Button>



        {/* <label htmlFor='email'> Email: </label>
        <input 
          id='email'
          name='email'
          type='text'
          value = {email}
          onChange={(event) => setEmail(event.target.value)}
        /> */}
  
        {/* <label htmlFor='password'> password: </label>
        <input 
          id='password'
          name='password'
          type='text'
          value = { password}
          onChange={(event) => setPassword(event.target.value)}
        /> */}

        {/* <button type='submit' aria-label='signin-existing-user'>
           signup
        </button> */}
  
      </form>
    );
  }




export default SignInForm;