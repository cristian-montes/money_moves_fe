
const url = 'https://themoneymoves.herokuapp.com';

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
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(singupInfo),
    });

    const data = await response.json();
    
    return data.token;
}

export async function existingUserSignIn(singInCredentials: ExistingUserSingInDT){

    const authURL = `${url}/auth/signin`

    const response = await fetch(authURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(singInCredentials),
    });

    const data = await response.json();
    
    return data;
}

export async function logoutUser() {
    
    const searchRecipientURL = `${url}/auth/logout`; 
    await fetch(searchRecipientURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
    });

}