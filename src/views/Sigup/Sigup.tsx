import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SigUpForm from "../../components/Auth/SignUpForm";
import { newUserSignUp } from "../../Utils/fetch-utils";

export default function SignUp(){
    const [name, setName ] = useState<string>('');
    const [email, setEmail ] = useState<string>('');
    const [password_hash, setPassword ] = useState<string>('');
    const [connected_acct_id, setconnected_acct_id ] = useState<string>('');
    const history = useHistory();

    const handleSubmitSignUp = async (event: React.FormEvent) => {
        event.preventDefault();

        await newUserSignUp({
            name,
            email,
            password_hash,
            connected_acct_id
        });

        setName('')
        setEmail('')
        setPassword('')
        setconnected_acct_id('')

        history.push('/signin')
    }

    return(
        <div>
           <SigUpForm 
           name = {name}
           setName ={setName}
           email = {email}
           setEmail = {setEmail}
           password = {password_hash} 
           setPassword = {setPassword}
           connectedAcctId = {connected_acct_id}
           setConnectedAccId = {setconnected_acct_id}
           handleSubmitSignUp = {handleSubmitSignUp}
           />
        </div>
    )
}