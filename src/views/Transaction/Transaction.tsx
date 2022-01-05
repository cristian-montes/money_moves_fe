import React,{useState} from "react";
import { amountInput, buttonDiv, header, searchFormDiv, transactionDiv, transactionFormContainer, transferButton } from './TransactionStyles';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import StatusMessages, {useMessages} from './StatusMessages';

import { Box, InputAdornment, Button } from '@mui/material';
import RecipientSearchForm from "../../components/Search/RecipientSearchForm";
import { getRecipient, newTransaction } from "../../Utils/transaction-fetch-utils";
import { conversitionCentsToDollars } from "../../Utils/helpers";
import CustomField from "../../components/CustomField/CustomField";



export default function Transaction(){
    const [email, setEmail ] = useState<string>('');
    const [amount, setAmount ] = useState<string>('');
    const [recipientId, setRecipientId] = useState<string>('')

    // let recipientDataInfo = null;

    const handleRecipientSearch = async (event: React.FormEvent) =>{
            event.preventDefault();

        const recipientData = await getRecipient(email);
        // console.log('recipientData', recipientData);
        
        if(recipientData.email !== email){
            setEmail('');
            return alert('No users under that email found')
        } 
        
        setRecipientId(recipientData.id);
        setEmail('');
    }


    //*********------------- stripe block ---------------------- ********
    const stripe = useStripe();
    const elements = useElements();
    const convertedAmount = conversitionCentsToDollars(+amount)
    
    //*********------------- stripe block ---------------------- ********

        const handleTransaction = async (event: React.FormEvent) =>{
        event.preventDefault();
        console.log('recipientId',recipientId)

        if(!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
          });
          console.log('paymentmethod', paymentMethod)

          if (error) {
            console.log('[error]', error);
          } 
        
          const { client_secret } = await newTransaction({
              recipient_id:+recipientId,
              amount:convertedAmount,
              payment_method_id:paymentMethod!.id
            })


        //*********-------- confirm payment --------------- ********
       const confirmation = await stripe.confirmCardPayment(
            client_secret, {
               payment_method:{
                card
               }
            }
        )
        console.log(confirmation)
        // if() { 
        //     setAmount('');
        //    return alert('Your transaction was successful!');
        // } else { 
        //     setAmount('');
        //     return alert('Uh oh, transaction failed.  Please try again.')
        // }

    //*********** ------------- stripe block ---------------------- ***********
     };
    
    return(
        <div>
            <h1 style={header}>Send Money with MoneyMoves</h1>
            <div style={searchFormDiv}>
                <RecipientSearchForm
                    email={email}
                    setEmail ={setEmail}
                    handleRecipientSearch = {handleRecipientSearch}
                />
            </div>
            {/* <div>
               hellow
            </div> */}
            <Box component="form" onSubmit={handleTransaction} style={transactionFormContainer}>
                <div style={transactionDiv}>
                    <CustomField
                        id="amount-textfield"
                        label="Enter Transfer Amount Here:"
                        ariadescribedby={'Enter Transfer Amount Here:'}
                        name={'amout-textfield'}
                        type={'number'}
                        variant={'outlined'}
                        style={amountInput}
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        inputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                    />
                    <CardElement id="card-element"/>
                </div>
                <div style={buttonDiv}>
                    <Button type="submit" variant="contained" style={transferButton}>
                        Transfer
                    </Button>
                </div>
            </Box>
        </div>
       
    )
}