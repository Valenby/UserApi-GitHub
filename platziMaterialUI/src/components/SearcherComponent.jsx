
import { IconButton, Stack, TextField } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useState } from "react";


export const SearcherComponent = () => {
  // fetch api
  const [inputUser, setInputUser] = useState('Buscar Usuario');

  
  //estado capturar valor input
  const [valueInput, setValueInput] = useState('');
  const onSearchValueChange = (event)=>{
    const clickInput = event.target.value;
    setValueInput(clickInput);
  }
  
  //estado enviar valor 
   const handleSubmit = ()=>{
    setInputUser(valueInput)
  }

  return (
    <Stack 
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%',
    }}>
        <TextField
          id="outlined-basic"
          label="GitHub User💓"
          variant="outlined" 
          placeholder='Buscar Usuario'
          size='small'
          value={valueInput}
          onChange={onSearchValueChange}
          sx={{
            width: '99%'
          }}
        >
        </TextField>
        <IconButton
        
          onClick={handleSubmit} 
          size='small'
          sx={{
            left: '-45px',
          }}>
          <Search/>
        </IconButton>
        
    </Stack>
  )
}
