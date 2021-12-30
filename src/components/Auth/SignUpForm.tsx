import React from "react";

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
          <label htmlFor="name"> Name: </label>
          <input 
            id='name'
            name='name'
            type='text'
            value = {name }
            onChange={(event) => setName(event.target.value)} 
          />
          <label htmlFor='email'> Email: </label>
          <input 
            id='email'
            name='email'
            type='text'
            value ={email}
            onChange={(event) => setEmail(event.target.value)}
          />
    
          <label htmlFor='password'> password: </label>
          <input 
            id='password'
            name='password'
            type='text'
            value ={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor='Connected Account ID#'> Connected Acct ID#: </label>
          <input 
            id='Connected Account ID#'
            name='Connected Account ID#'
            type='text'
            value ={connectedAcctId}
            onChange={(event) => setConnectedAccId(event.target.value)}
          />
          <button type='submit' aria-label='signup-new-user'>
             signup
          </button>
    
        </form>
      );
    }

    export default  SigUpForm;