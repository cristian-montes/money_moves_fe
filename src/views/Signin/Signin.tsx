import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import SignInForm from "../../components/Auth/SingInForm";
import { existingUserSignIn } from "../../Utils/auth-fetch-utils";


export default function SingIn(){

    const [email, setEmail ] = useState<string>('');
    const [password_hash, setPassword ] = useState<string>('');
    const history = useHistory();

    const handleSubmitSignIn = async (event: React.FormEvent) => {
        event.preventDefault();

        await existingUserSignIn ({
            email,
            password_hash,
        });

        setEmail('')
        setPassword('')


        history.push('/transaction')
    }


    return(
    <SignInForm
        email = {email}
        setEmail = {setEmail}
        password = {password_hash} 
        setPassword = {setPassword}
        handleSubmitSignIn ={handleSubmitSignIn }
    />
    )
}