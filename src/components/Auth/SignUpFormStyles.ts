import * as CSS from 'csstype';

export const formContainer: CSS.Properties = { 
    display: 'flex',
    flexDirection: 'column',
    border: '.1rem solid darkgrey',
    boxShadow: '0 8px 8px -4px #45CB',
    width: '25rem',
    margin: '0 auto',
    borderRadius: '.4rem',
    height: '40rem',
    padding: '1rem',
    justifyContent: 'space-between'

}

export const createAccountHeader: CSS.Properties = { 
    color: '#6A7FDB',
    textAlign: 'center',
    fontWeight: 'bold'
}


export const fieldContainer: CSS.Properties = { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '27rem'

}

export const buttonContainer: CSS.Properties = { 
    width: '17rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto'

}

export const inputLabels: CSS.Properties = { 
    color: '#45CB85'
}

export const signUpButton: CSS.Properties = { 
    backgroundColor: '#45CB85',
    width: '9rem'
}

export const signUpHere: CSS.Properties = { 
    color: 'white',
    textAlign: 'center',
}

export const link: CSS.Properties = { 
    color: '#45CB85',
    textDecoration: 'none'
    
}