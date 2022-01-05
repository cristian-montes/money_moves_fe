import React from "react";
import { useHistory } from "react-router-dom";
import Button from'@mui/material/Button'
import ButtonGroup  from "@mui/material/ButtonGroup";
import { headerStyles, containerStyles, promptStyles, buttonGroupStyles, buttons, logoStyles, buttonDiv } from "./HomeStyles";
import MoneyMovesLogo from '../../images/moneymoves-logo-2.png';



const Home = () =>{
    const history = useHistory()

    return(
    <div style={containerStyles}>
        <img src={MoneyMovesLogo} alt="Money Moves Logo" style={logoStyles}/>
        <h1 style={headerStyles}>Welcome to Money Moves</h1>
        <h3 style={promptStyles}>Where would you like to start?</h3>
        <div style={buttonDiv}>
            <ButtonGroup variant="contained" aria-label="an outlined button group" style={buttonGroupStyles}>
                <Button
                    style={buttons} 
                    onClick={() => history.push('/signin')}
                    aria-label="Click to Join MoneyMoves."
                >Sign In
                </Button>
                <Button 
                    style={buttons} 
                    onClick={() => history.push('/signup')}
                    aria-label="Click to make a transaction."
                >Sign Up
                </Button>
            </ButtonGroup>

        </div>
    </div>
    )
}

export default Home;