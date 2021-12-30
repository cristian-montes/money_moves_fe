import React from "react";
import { Link } from "react-router-dom";


const Home = () =>{
    return(
    <div>
        <h1>Make Some Money Moves!</h1>
        <Link to={'/signin'}>Make MoneyMoves</Link> <br/>
        <Link to={'/signup'}> Join MoneyMoves</Link>
    </div>
    )
}

export default Home;