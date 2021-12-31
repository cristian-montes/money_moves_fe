import React from "react";

interface NewTransactionProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    handleRecipientSearch :(event: React.FormEvent) => void;
}

const RecipientSearchForm: React.FC<NewTransactionProps>= ({email, setEmail, handleRecipientSearch}) =>{
    return(
        <form onSubmit={handleRecipientSearch}> 
        <label htmlFor='email'> Email: </label>
        <input 
            placeholder="recipient@email.com"
          id='email'
          name='email'
          type='text'
          value = {email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type='submit' aria-label='search-recipient'>
           Search
        </button>
  
      </form>
    )
}

export default RecipientSearchForm;