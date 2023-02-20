
import { IconButton, Stack, TextField } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useState } from "react";
import { ApiGitHub } from "../helpers";
import { VIstaUser } from "./VIstaUser";



export const SearcherComponent = () => {

 const [valueInput, setValueInput] = useState('');
 const [data, setData] = useState({
  avatar_url:'https://seeklogo.com/images/G/github-logo-9BBCA663A4-seeklogo.com.png',
  name: 'GitHub',
  created_at: '2008-4-10T17:09:48Z',
  login: 'github',
  bio: 'No hay descripción ',
  location: 'San Francisco',
  blog: 'https://github.blog',
  company: '@github',
  twitter_username: 'Not Available'
 });

 const onSearchValueChange = (event)=>{
  const onclickButton = event.target.value;
  setValueInput(onclickButton);
}


const handleInputChange = async()=>{
  // petionApijson
  const userData = await ApiGitHub(valueInput);
  setData(userData);
}



    
  return (
    <>
    
    <Stack 
      direction='row'
      sx={{
        marginTop: '30px',
        width: '70%',
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
          onClick={handleInputChange}
          size='small'
          sx={{
            left: '-45px',
          }}>
          <Search/>
        </IconButton>

           
    </Stack>
    <VIstaUser userData={data}  />
    </>
  )
}
