import React from "react";
import { formDiv, inputLabel, searchButton, searchDiv, buttonDiv, searchField } from "./RecipientSearchFormStyles";
import SearchIcon from '@mui/icons-material/Search';
import { InputLabel, TextField, InputAdornment, Button } from "@mui/material";

interface NewTransactionProps {
    email : string;
    setEmail : React.Dispatch<React.SetStateAction <string>>;
    handleRecipientSearch :(event: React.FormEvent) => void;
}

const RecipientSearchForm: React.FC<NewTransactionProps>= ({email, setEmail, handleRecipientSearch}) =>{
    return(
        <form onSubmit={handleRecipientSearch} style={formDiv}> 
        <div style={searchDiv}>
          <InputLabel htmlFor='email' style={inputLabel}>Search for friend: </InputLabel>
          <TextField 
            style={searchField}
            placeholder="recipient@email.com"
            size="small"
            variant="outlined"
            id='email'
            name='email'
            type='text'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{color: 'white'}}/>
              </InputAdornment>
              ) 
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

        </div>
        <div style={buttonDiv}>
          <Button type='submit' aria-label='search-recipient' variant="contained" style={searchButton}>
            Search
          </Button>
        </div>
      </form>
    )
}

export default RecipientSearchForm;

