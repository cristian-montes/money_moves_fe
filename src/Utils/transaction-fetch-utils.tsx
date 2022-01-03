
// const url = 'https://sleepy-garden-91367.herokuapp.com';
const url ='http://localhost:7890'


interface transactionProps {
    recipient_id: number,
    amount: number
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
    console.log('data', data);
    return data.token;
}

export async function getRecipient(email:string) {
    // console.log('email2', email)
    const searchRecipientURL = `${url}/transactions/searchrecipient/${email}`; 
    const response = await fetch(searchRecipientURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
        //   'Authorization': token,
          'Content-Type': 'application/json'
        }
    });
    const recipientData = await response.json();
    return recipientData;
}

export async function getUserTransactionHistory() {
    // console.log('email2', email)
    const searchRecipientURL = `${url}/transactions/transactionhistory`; 
    const response = await fetch(searchRecipientURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
        //   'Authorization': token,
          'Content-Type': 'application/json'
        }
    });
    const transactionHistoryData = await response.json();
    return transactionHistoryData;
}
