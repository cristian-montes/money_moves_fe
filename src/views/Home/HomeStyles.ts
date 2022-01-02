import * as CSS from 'csstype';
import { white } from 'material-ui/styles/colors';

const deepBlue = '#020887';
const paleBlue = '#334195';
const lightBlue = '#647AA3';
const paleGreen = '#95B2B0'
const lightGreen = '#C6EBBE'

export const containerStyles: CSS.Properties = { 
    backgroundColor: paleGreen,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',   
}
export const headerStyles: CSS.Properties = { 
    color: deepBlue,
    textAlign: 'center',

}

export const promptStyles: CSS.Properties = { 
    color: 'white',
    textAlign: 'center'
}
export const buttonGroupStyles: CSS.Properties = { 
    // width: '100%',
    // backgroundColor: 'transparent',
    justifyContent: 'center'
}
