import React from "react";
import Button from'@mui/material/Button'
import Box from '@mui/material/Box';
import { buttonContainer, fieldContainer, formContainer, signUpButton, link, createAccountHeader, signUpHere } from './SignUpFormStyles'

import CustomField from '../CustomField/CustomField';


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
      <div role="form" aria-label="Contact Information" style={{paddingTop: '8rem'}}>
        <Box component="form" onSubmit={handleSubmitSignUp} style={formContainer}> 
          <div style={fieldContainer}>
          <p style={createAccountHeader}>Create Your Account:</p>
            <CustomField
              id={'name'}
              sx={{input: { color: 'white'}}}
              name='name'
              type={'text'}
              label={'Enter your first name'}
              ariadescribedby={'Enter your first name'}
              value={name}
              variant={'outlined'}
              onChange={(event) => setName((event.target as HTMLInputElement).value)}
            />

            <CustomField 
              id={'email'}
              sx={{input: { color: 'white'}}}
              name='email'
              type={'text'}
              label={'Enter your email'}
              ariadescribedby={'Enter your email'}
              variant={'outlined'}
              value ={email}
              onChange={(event) => setEmail((event.target as HTMLInputElement).value)}
              />
      
            <CustomField 
              id='password'
              sx={{input: { color: 'white'}}}
              name='password'
              type={'text'}
              label={'Enter a password'}
              ariadescribedby={'Enter a new password'}
              variant={'outlined'}
              value ={password}
              onChange={(event) => setPassword((event.target as HTMLInputElement).value)}
              />

            <CustomField 
              id='Connected Account ID#'
              sx={{input: { color: 'white'}}}
              name='Connected Account ID#'
              label={'Connected  Account ID#'}
              ariadescribedby={'Connected Account ID#'}
              variant={'outlined'}
              type={'text'}
              value ={connectedAcctId}
              onChange={(event) => setConnectedAccId((event.target as HTMLInputElement).value)}
              />
              <p style={signUpHere}>No Stripe account?  <a rel="noreferrer" target="_blank" href="https://dashboard.stripe.com/register/connect" style={link}> Sign up here! </a></p>

            </div>
            <div style={buttonContainer}>
              <Button type='submit' disabled={!connectedAcctId.length} aria-label='signup-new-user' variant="contained" style={signUpButton}>
                Sign Up
              </Button>
            </div>
        </Box>
      </div>
      );
    }

    export default  SigUpForm;