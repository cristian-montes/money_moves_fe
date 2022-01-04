import React, { useEffect, useState } from "react";
import { transactionType, transactionsDiv, transactionContainer, section, amount, header } from "./ProfileStyles";
import { getUserTransactionHistory } from "../../Utils/transaction-fetch-utils";

// interface transactionHistory 
//     {
//         senderid: string,
//         name: string,
//         email: string,
//         amount: 50
//         recipientid:string,
//         paymentid: string
//     } 

export default function Profile(){
    const [transactions, setTransactions] = useState<any>([])

    useEffect( ()=>{
        async function getAllTransactions(){
            const response = await getUserTransactionHistory();
            setTransactions(response);
        }
        getAllTransactions();
    },[])

    return(
        <div>
            <h1 style={header}>Your Transactions Activity</h1>
            <div style={transactionContainer}>
                {transactions.map((transaction:any)=>{
                    return(
                        <div key={`${transaction.paymentid}-`} style={transactionsDiv} >
                            {Object.keys(transaction)[0] === 'senderid' 
                                ? 
                            (<div>
                                <p style={transactionType}>Received From</p>
                                <section style={section}>
                                    <p>{transaction.name}</p>
                                    <p>{transaction.email}</p>
                                </section>
                            </div>) 
                                : 
                            (<div>
                                <p style={transactionType}>Payment Sent</p>
                                <section style={section}>
                                    <p>{transaction.name}</p>
                                    <p>{transaction.email}</p>
                                </section>
                            </div>) }
                            <div style={amount}>
                                <p>${transaction.amount}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}



// {transaction.senderid ?(<p>Sent From:{transaction.senderid}</p> ): (<p>Received From:{transaction.recipieid} </p>) }
// <p>${transaction.amount}</p>