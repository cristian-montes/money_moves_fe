import React from "react";
import { useHistory } from "react-router-dom";
import Button from'@mui/material/Button'
import ButtonGroup  from "@mui/material/ButtonGroup";
import { headerStyles, containerStyles, promptStyles, buttonGroupStyles, buttons } from "./HomeStyles";


const Home = () =>{
    const history = useHistory()


    return(
    <div style={containerStyles}>
        <h1 style={headerStyles}>Welcome to Money Moves</h1>
        <h3 style={promptStyles}>Where would you like to start?</h3>

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
    )
}

export default Home;