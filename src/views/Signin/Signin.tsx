import React,{useState} from "react";

import { useHistory } from "react-router-dom";
import SignInForm from "../../components/Auth/SingInForm";
import { existingUserSignIn } from "../../Utils/auth-fetch-utils";
import { containerStyles, headerStyles } from "./SigninStyles";



export default function SingIn(){

    const [email, setEmail ] = useState<string>('');
    const [password_hash, setPassword ] = useState<string>('');
    const [ errorMessage, setErrorMessage] = useState<string>('');
    const history = useHistory();

    const handleSubmitSignIn = async (event: React.FormEvent) => {
        event.preventDefault();

        const userInfo = await existingUserSignIn ({
            email,
            password_hash,
        });

        if(userInfo.status === 401) { 
            setErrorMessage('The email or password entered is incorrect. Please try again.');
            return;
        } else { 
            setEmail('')
            setPassword('')
            history.push('/transaction')

        }

    }


    return(
        <div style={containerStyles}> 
            <p style={headerStyles}>Sign In To Your Account:</p>
            <SignInForm
                email={email}
                setEmail={setEmail}
                password={password_hash} 
                setPassword={setPassword}
                handleSubmitSignIn={handleSubmitSignIn}
                errorMessage={errorMessage}
                />
        </div>
    )
}