import React from "react";
import Button from'@mui/material/Button'
import { buttonContainer, fieldContainer, formContainer, signUpButton } from './SignUpFormStyles'

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
      <div>
         <p>Create Your Account</p>
        <form onSubmit={handleSubmitSignUp} style={formContainer}> 
          <div style={fieldContainer}>
            <CustomField
              id={'name'}
              sx={{input: { color: 'white'}}}
              type={'text'}
              label={'Enter your first name:'}
              value={name}
              variant={'outlined'}
              onChange={(event) => setName((event.target as HTMLInputElement).value)}
              />

            <CustomField 
              id={'email'}
              sx={{input: { color: 'white'}}}
              // name='email'
              type={'text'}
              label={'Enter your email:'}
              variant={'outlined'}
              value ={email}
              onChange={(event) => setEmail((event.target as HTMLInputElement).value)}
              />
      
            <CustomField 
              id='password'
              sx={{input: { color: 'white'}}}
              // name='password'
              type={'text'}
              label={'Enter a new password:'}
              variant={'outlined'}
              value ={password}
              onChange={(event) => setPassword((event.target as HTMLInputElement).value)}
              />

            <CustomField 
              id='Connected Account ID#'
              sx={{input: { color: 'white'}}}
              // name='Connected Account ID#'
              label={'Strip Account ID#:'}
              variant={'outlined'}
              type={'text'}
              value ={connectedAcctId}
              onChange={(event) => setConnectedAccId((event.target as HTMLInputElement).value)}
              />
            </div>
            <div style={buttonContainer}>
              <Button type='submit' aria-label='signup-new-user' variant="contained" style={signUpButton}>
                Sign Up
              </Button>
            </div>
        </form>
      </div>
      );
    }

    export default  SigUpForm;