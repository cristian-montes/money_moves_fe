
const url = 'https://sleepy-garden-91367.herokuapp.com';

interface newUserSingUpDT {
    name : string;
    email : string;
    password_hash : string;
    connected_acct_id : string;
}

interface ExistingUserSingInDT {
    email : string;
    password_hash : string;
}

export async function newUserSignUp(singupInfo: newUserSingUpDT){

    const authURL = `${url}/auth/signup`

    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(singupInfo),
    });

    const data = await response.json();
    // console.log('data', data);
    
    return data.token;
}

export async function existingUserSignIn(singInCredentials: ExistingUserSingInDT){

    const authURL = `${url}/auth/signin`

    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(singInCredentials),
    });

    const data = await response.json();
    console.log('data', data);
    
    return data.token;
}