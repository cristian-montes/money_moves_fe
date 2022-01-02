import * as CSS from 'csstype';

const deepBlue = '#020887';
const paleBlue = '#334195';
const lightBlue = '#647AA3';
const paleGreen = '#95B2B0'
const lightGreen = '#C6EBBE'

export const containerStyles: CSS.Properties = { 
    // backgroundColor: paleGreen,
    border: '.1rem solid black',
    width: '20rem',
    margin: '0 auto',
    borderRadius: '.4rem',
    height: '18rem',
    padding: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',   
}
export const errorMessageStyles: CSS.Properties = { 
    color: 'red',
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '.9rem',
}
export const headerStyles: CSS.Properties = { 
    textAlign: 'center',
    color: deepBlue,
    fontWeight: 'bold'
}
