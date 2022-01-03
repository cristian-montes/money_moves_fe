import React,{useState} from "react";
import { amountInput, buttonDiv, header, searchFormDiv, transactionDiv, transactionFormContainer, transferButton } from './TransactionStyles';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { FilledInput, OutlinedInput, InputLabel, InputAdornment } from "@mui/material";
import Button from '@mui/material/Button';
import RecipientSearchForm from "../../components/Search/RecipientSearchForm";
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
            return alert('No users under that email found')
        }
        
        
        //     return( <div>
        //        { `${recipientData.name}, ${recipientData.email}`}

        //     </div>)
        
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
            <h1 style={header}>Send Money with MoneyMoves</h1>
            <div style={searchFormDiv}>
                <RecipientSearchForm
                    email={email}
                    setEmail ={setEmail}
                    handleRecipientSearch = {handleRecipientSearch}
                />
            </div>
            {/* <div>Sending To: me!</div> */}
            <form onSubmit={handleTransaction} style={transactionFormContainer}>
                <div style={transactionDiv}>
                    {/* <label htmlFor='amount'>Amount: </label>
                    <TextField 
                        id='amount'
                        name='amount'
                        type='text'
                        value = {amount}
                        onChange={(event) => setAmount(event.target.value)}
                        /> */}
                    {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                    <TextField
                        id="outlined-adornment-amount"
                        label="Enter Transfer Amount Here:"
                        type={'number'}
                        style={amountInput}
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                        // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <CardElement />
                </div>
                <div style={buttonDiv}>
                    <Button type="submit" variant="contained" style={transferButton}>
                        Transfer
                    </Button>
                </div>
            </form>
            <Button onClick={handleLogout} variant="contained">
                logout
            </Button>
        </div>
       
    )
}