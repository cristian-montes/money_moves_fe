
const url = 'https://themoneymoves.herokuapp.com';

interface transactionProps {
    recipient_id: number,
    amount: number,
    payment_method_id: string
}


export async function newTransaction(transactionInfo: transactionProps){

    const authURL = `${url}/transactions/makeTransaction`;

    const response = await fetch(authURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionInfo),
    });

    const data = await response.json();
    return data;
}

export async function getRecipient(email:string) {
    
    const searchRecipientURL = `${url}/transactions/searchrecipient/${email}`; 
    const response = await fetch(searchRecipientURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
     
          'Content-Type': 'application/json'
        }
    });
    const recipientData = await response.json();
    return recipientData;
}

export async function getUserTransactionHistory() {
    
    const searchRecipientURL = `${url}/transactions/transactionhistory`; 
    const response = await fetch(searchRecipientURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
       
          'Content-Type': 'application/json'
        }
    });
    const transactionHistoryData = await response.json();
    return transactionHistoryData;
}
