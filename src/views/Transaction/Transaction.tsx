import React,{useState} from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RecipientSearchForm from "../../components/Transaction/TransactionForm";
import { getRecipient, newTransaction } from "../../Utils/transaction-fetch-utils";
import { logoutUser } from "../../Utils/auth-fetch-utils";
import { conversitionCentsToDollars } from "../../Utils/helpers";



export default function Transaction(){
    const [email, setEmail ] = useState<string>('');
    const [amount, setAmount ] = useState<string>('');
    const [recipientId, setRecipientId] = useState<string>('')
    const history = useHistory();

    const handleRecipientSearch = async (event: React.FormEvent) =>{
            event.preventDefault();

        const recipientData = await getRecipient(email);
        console.log('recipientData', recipientData);
        
        if(recipientData.email !== email){
            setEmail('');
            return alert('No users under that emial found')
        }

        setRecipientId(recipientData.id);
        setEmail('');
    }

    const handleLogout = async (event: React.FormEvent) =>{
        event.preventDefault();
        await logoutUser();
        await history.push('/');
    }

    //*********------------- stripe block ---------------------- ********
    const stripe = useStripe();
    const elements = useElements();
  
    const convertedAmount = conversitionCentsToDollars(+amount)
    const handleTransaction = async (event: React.FormEvent) =>{
        event.preventDefault();
        console.log('recipientId',recipientId)

        try {
          const { error, paymentMethod } = await stripe!.createPaymentMethod({
            type: 'card',
            card: elements?.getElement(CardElement)!,
          });
    
          await newTransaction({
            recipient_id:+recipientId,
            amount:convertedAmount
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
                {/* <Button>Transfer</Button> */}
                <button> Transfer</button>
            </form>
            <Button onClick={handleLogout}>
                logout
            </Button>
        </div>
       
    )
}