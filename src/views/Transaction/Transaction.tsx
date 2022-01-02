import React,{useState} from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RecipientSearchForm from "../../components/Transaction/TransactionForm";
import { getRecipient, newTransaction } from "../../Utils/transaction-fetch-utils";
import { logoutUser } from "../../Utils/auth-fetch-utils";



export default function Transaction(){
    const [email, setEmail ] = useState<string>('lalo@gmail.com');
    const [amount, setAmount ] = useState<string>('100');
    const [userId, setUserId] = useState(1)
    const history = useHistory();

    const handleRecipientSearch = async (event: React.FormEvent) =>{
            event.preventDefault();

        // const recipientData = await getRecipient(email);
        // console.log('recipientData', recipientData);

        setEmail('');
        // if(!recipientData) return alert('Invalid user')
    }

    const handleLogout = async (event: React.FormEvent) =>{
        //     event.preventDefault();
        await logoutUser();
        await history.push('/');
    }

    //stripe block
    const stripe = useStripe();
    const elements = useElements();
  

    const handleTransaction = async (event: React.FormEvent) =>{
        event.preventDefault();
        try {
          const { error, paymentMethod } = await stripe!.createPaymentMethod({
            type: 'card',
            card: elements?.getElement(CardElement)!,
          });
    
          await newTransaction({
            recipient_id:+userId,
            amount: +amount
          })
        
        } catch(err) {
          console.log(err);
        }
        
     };


    return(
        <div>
            <h1> Make a Money Move my friend</h1>
            <RecipientSearchForm
                email={email}
                setEmail ={setEmail}
                handleRecipientSearch = {handleRecipientSearch}
            />
            <form onSubmit={handleTransaction}>
                <label htmlFor='amount'> Amount: </label>
                <TextField 
                    placeholder="$0.00"
                    id='amount'
                    name='amount'
                    type='text'
                    value = {amount}
                    onChange={(event) => setAmount(event.target.value)}
        />
                <CardElement />
                <Button>Transfer</Button>
            </form>
            <Button onClick={handleLogout}>
                logout
            </Button>
        </div>
       
    )
}