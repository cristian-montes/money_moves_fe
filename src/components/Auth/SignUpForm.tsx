import React from "react";

export default function SigUpForm(){
    return (
        <form > 
          <label htmlFor="name"> Name: </label>
          <input 
            id='name'
            name='name'
            type='text'
            value = 'name' // replace w/ --> {name}
            // onChange={(event) => setName(event.target.value)} 
          />
          <label htmlFor='email'> Email: </label>
          <input 
            id='email'
            name='email'
            type='text'
            value ='email' //  replace w/ -> {email}
            // onChange={(event) => setCity(event.target.value)}
          />
    
          <label htmlFor='password'> password: </label>
          <input 
            id='password'
            name='password'
            type='text'
            value ='password' // -> {password}
            // onChange={(event) => setState(event.target.value)}
          />

          <label htmlFor='Connected Account ID#'> Connected Acct ID#: </label>
          <input 
            id='Connected Account ID#'
            name='Connected Account ID#'
            type='text'
            value ='Connected Account ID#' // -> {ConnectedAccoundId}
            // onChange={(event) => setState(event.target.value)}
          />
          <button type='submit' aria-label='Add a team'>
             Add
          </button>
    
        </form>
      );
    }