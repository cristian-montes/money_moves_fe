import React,{useState} from "react";
import { amountInput, buttonDiv, circularProgressDiv,header, recipientInformation, searchFormDiv, transactionDiv, transactionFormContainer, transferButton } from './TransactionStyles';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Box, InputAdornment, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import RecipientSearchForm from "../../components/Search/RecipientSearchForm";
import { getRecipient, newTransaction } from "../../Utils/transaction-fetch-utils";
import { conversitionCentsToDollars } from "../../Utils/helpers";
import CustomField from "../../components/CustomField/CustomField";
// import { convertColorToString } from "material-ui/utils/colorManipulator";

interface recipientInfoProps {
connected_acct_id: string;
email: string;
id: string;
name: string;
password_hash: string;
}

export default function Transaction(){
    const [email, setEmail ] = useState<string>('');
    const [amount, setAmount ] = useState<string>('');
    const [recipientId, setRecipientId] = useState<string>('')
    const [recipientInfo, setRecipientInfo] = useState<recipientInfoProps | undefined >(undefined);
    const [renderRecipientInfo, setRenderRecipientInfo] = useState(false);
    const [trigerLoader, setTriggerLoader] = useState(false);



    const handleRecipientSearch = async (event: React.FormEvent) =>{
            event.preventDefault();

        const recipientData = await getRecipient(email);
        
        if( recipientData.status === 500){
            setEmail('');
            setRenderRecipientInfo(false);
            return alert('No users under that email found');

        } else{

            setRecipientInfo(recipientData);
            console.log('data', recipientData )
            setRenderRecipientInfo(true);
            setRecipientId(recipientData.id);
            setEmail('');
        }
        
    }

    //*********------------- stripe block ---------------------- ********
    const stripe = useStripe();
    const elements = useElements();
    const convertedAmount = conversitionCentsToDollars(+amount)
    

        const handleTransaction = async (event: React.FormEvent) => {
            event.preventDefault();
            setTriggerLoader(true);

            if(!stripe || !elements) {
                //Stripe.js has not yet loading... waiting for Stripe to load.
                //Make sure to disable from submission until Stripe.js has loaded. 
                return;
            }
            const card = elements.getElement(CardElement);

            if (card == null) {
                return;
            }

            const {error, paymentMethod } = await stripe.createPaymentMethod({
                // `Elements` instance that was used to create the Payment Element
                type: 'card',
                card
            });

            if (error) {
                console.log('[error]', error);
            } 
            
            const { client_secret } = await newTransaction({
                recipient_id:+recipientId,
                amount:convertedAmount,
                payment_method_id:paymentMethod!.id
                })
            
                // console.log('secrete', client_secret)

            //*********-------- confirm payment --------------- ********
            const { paymentIntent }=  await stripe.confirmCardPayment(
                    // `Elements` instance that was used to create the Payment Element
                    client_secret, {
                    payment_method:{
                        card
                    }
                    }
            );

            if(paymentIntent?.status){
                setTriggerLoader(false);

                await alert('Your Transaction was Successful')
                setAmount('')
                card.clear()

            } else{
                // instead of displaying an alert, add a red text at the bottom of the information display.
                await alert('Transaction Unsuccessful Transaction')
                setAmount('')
                card.clear()
            }
        
         //*********** ------------- stripe block ---------------------- ***********
        };
    
    return(
        <div>
            <h1 style={header}>Send Money with MoneyMoves</h1>

            {/* Input Field to find Recipient's Email */}
            <div style={searchFormDiv}>
                <RecipientSearchForm
                    email={email}
                    setEmail ={setEmail}
                    handleRecipientSearch = {handleRecipientSearch}
                />
            </div>

            <div style={recipientInformation}>
               {renderRecipientInfo ? (<p>You are sending money to {recipientInfo!.name}, with the email address: {recipientInfo!.email}</p>): (<p></p>)}
            </div>
            
           {/* Box containing Amoung Field and Card component */}
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
                
                {/* LOADER/ SPEANER */}
                { trigerLoader ?
                    <div style={circularProgressDiv}>
                        <CircularProgress /> 
                    </div>
                    : ''
                }

                <div style={buttonDiv}>
                    <Button type="submit" variant="contained" style={transferButton}>
                        Transfer
                    </Button>
                </div>
            </Box>
        </div>
       
    )
}


// STRIPE.JS is a thing wrapper around Stripe Elments that allows you to add Elements to any React App. 
// useStripe hook returns a reference to the Stripe .js instances passed to the Elements provider. 
