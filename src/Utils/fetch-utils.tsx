
// const url = 'https://sleepy-garden-91367.herokuapp.com';

interface newUserSingUpDT {
    name : string;
    email : string;
    password_hash : string;
    connected_acct_id : string;
}

export async function newUserSignUp(singupInfo: newUserSingUpDT){

    console.log('SigUp Info', singupInfo);

    const authURL = 'https://sleepy-garden-91367.herokuapp.com/auth/signup'

    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(singupInfo),
    });

    const data = await response.json();
    console.log('data', data);
    console.log(data); ////////////REMOVE**
    
    return data.token;
}