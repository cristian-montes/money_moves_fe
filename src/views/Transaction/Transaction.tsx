import React,{useState} from "react";

import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import RecipientSearchForm from "../../components/Transaction/TransactionForm";
import { getRecipient } from "../../Utils/transaction-fetch-utils";
import { logoutUser } from "../../Utils/auth-fetch-utils";

const stripePromise = loadStripe('pk_test_51K9YyABg9yAQBAw84bBZLY80FWMZ4hXz8ND78wNYA0kfDXip8mLTB5dOn2bsaQB8bkFE5FeJfbvywNxqPfZI0Ept0095gPwoiT');


export default function Transaction(){
    const [email, setEmail ] = useState<string>('');
    const [amount, setAmount ] = useState<string>('');
    const history = useHistory();

    const handleRecipientSearch = async (event: React.FormEvent) =>{
            event.preventDefault();

        const recipientData = await getRecipient(email);
        console.log('recipientData', recipientData);

        setEmail('');
        // if(!recipientData) return alert('Invalid user')
    }

    const handleLogout = async (event: React.FormEvent) =>{
        //     event.preventDefault();
        await logoutUser();
        await history.push('/');
    }

    // const  handleTransaction = (event: React.FormEvent) =>{
    //     event.preventDefault();
    //     try {
    //       const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card: elements.getElement(CardElement),
    //       });
    
    //       await makeTransaction({
    //         rentYear,
    //         amount,
    //       });
    //       await history.push('/dashboard');
    //     } catch(err) {
    //       console.log(err);
    //     }
        
    //  };


    return(
        <Elements stripe={stripePromise}>
            <h1> Make a Money Move my friend</h1>
            <RecipientSearchForm
                email={email}
                setEmail ={setEmail}
                handleRecipientSearch = {handleRecipientSearch}
            />
            <form>
                <label htmlFor='amount'> Amount: </label>
                <input 
                    placeholder="$0.00"
                    id='amount'
                    name='amount'
                    type='text'
                    value = {amount}
                    onChange={(event) => setAmount(event.target.value)}
        />
                <CardElement />
                <button>Transfer</button>
            </form>
            <button onClick={handleLogout}>
                logout
            </button>
        </Elements>
       
    )
}