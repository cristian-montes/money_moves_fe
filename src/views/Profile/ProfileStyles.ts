import * as CSS from 'csstype';

export const header: CSS.Properties = { 
    textAlign: 'center',
    color: '#45CB85',
}

export const transactionContainer: CSS.Properties = { 
    backgroundColor: 'transparent',
    border: '.1rem solid darkgrey',
    borderRadius: '.3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    overflowY: 'scroll',
    height: '45rem',
    width: '30rem',
    margin: '0 auto'
}

export const transactionsDiv: CSS.Properties = { 
    backgroundColor: '#6A7FDB',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    width: '20rem',
    height: '5rem',
    borderRadius: '.2rem',
    marginTop: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
}

export const transactionType: CSS.Properties = { 
    color: 'black',
    textTransform: 'uppercase',
    fontSize: '1rem',
    lineHeight: '0rem',
}

export const section: CSS.Properties = { 
    display: 'flex',
    flexDirection: 'column',
    fontSize: '.8rem',
    lineHeight: '0rem',
    textTransform: 'uppercase',
    marginLeft: '.5rem',
    marginTop: '-.6rem',
    color: 'white',

}

export const amount: CSS.Properties = { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.9em',
    color: '#45CB85',
    fontWeight: 'bold',
    textDecoration: 'underline',

}