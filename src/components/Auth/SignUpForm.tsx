import React from "react";
import TextField from '@mui/material/TextField';
import Button from'@mui/material/Button'



interface SignUpProps {
    name : string;
    setName : React.Dispatch<React.SetStateAction <string>>;
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    password : string;
    setPassword : React.Dispatch<React.SetStateAction <string>>;
    connectedAcctId  : string;
    setConnectedAccId : React.Dispatch<React.SetStateAction <string>>;
    handleSubmitSignUp:(event: React.FormEvent) => void;
}

const SigUpForm: React.FC<SignUpProps> = ({name, setName, email, setEmail, password, setPassword,connectedAcctId, setConnectedAccId, handleSubmitSignUp}) => {
    return (
        <form onSubmit={handleSubmitSignUp}> 
          <label htmlFor="name"> Enter your first name: </label>
          <TextField 
            id='name'
            name='name'
            type='text'
            value = {name }
            onChange={(event) => setName(event.target.value)} 
          />
          <label htmlFor='email'> Enter your email: </label>
          <TextField 
            id='email'
            name='email'
            type='text'
            value ={email}
            onChange={(event) => setEmail(event.target.value)}
          />
    
          <label htmlFor='password'> Enter a new password: </label>
          <TextField 
            id='password'
            name='password'
            type='text'
            value ={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor='Connected Account ID#'> Stripe Account ID#: </label>
          <TextField 
            id='Connected Account ID#'
            name='Connected Account ID#'
            type='text'
            value ={connectedAcctId}
            onChange={(event) => setConnectedAccId(event.target.value)}
          />
          <Button type='submit' aria-label='signup-new-user'>
             Sign Up
          </Button>
    
        </form>
      );
    }

    export default  SigUpForm;