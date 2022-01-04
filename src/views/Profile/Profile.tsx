import React, { useEffect, useState } from "react";
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
            <h1>ALL OF YOUR TRANSACTIONS WILL APPER HERE</h1>
            {transactions.map((transaction:any)=>{
                return(
                    <div key={`${transaction.paymentid}-`}>
                        {Object.keys(transaction)[0] === 'senderid' ?(<p>Sent From:{transaction.name}</p> ): (<p>Received From:{transaction.name} </p>) }
                        <p>${transaction.amount}</p>
                    </div>
                )
            })}
        </div>

    )
}



// {transaction.senderid ?(<p>Sent From:{transaction.senderid}</p> ): (<p>Received From:{transaction.recipieid} </p>) }
// <p>${transaction.amount}</p>