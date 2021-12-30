import React from "react";

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
        <label htmlFor='email'> Email: </label>
        <input 
          id='email'
          name='email'
          type='text'
          value = {email}
          onChange={(event) => setEmail(event.target.value)}
        />
  
        <label htmlFor='password'> password: </label>
        <input 
          id='password'
          name='password'
          type='text'
          value = { password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit' aria-label='signin-existing-user'>
           signup
        </button>
  
      </form>
    );
  }




export default SignInForm;