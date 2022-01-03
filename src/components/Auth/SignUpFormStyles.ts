import * as CSS from 'csstype';

export const formContainer: CSS.Properties = { 
    display: 'flex',
    flexDirection: 'column',
    border: '.1rem solid darkgrey',
    boxShadow: '0 8px 8px -4px #45CB',
    width: '25rem',
    margin: '0 auto',
    marginTop: '4rem',
    borderRadius: '.4rem',
    height: '40rem',
    padding: '1rem',
    justifyContent: 'space-between'


}

export const fieldContainer: CSS.Properties = { 
    // backgroundColor: 'pink',
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