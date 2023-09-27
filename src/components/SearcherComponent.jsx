
import { IconButton,  Stack, TextField,} from "@mui/material";
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
    // container
    direction="row"
    alignItems='center'
    sx={{
        marginTop: '30px', 
    }}>

        <TextField
          id="outlined-basic"
          label="GitHub💓"
          variant='outlined' 
          placeholder='User'
          size='small'
          value={valueInput}
          onChange={onSearchValueChange}
          fullWidth
        >
          
        </TextField>
        <IconButton
          onClick={handleInputChange}
          size='small'
          >
          <Search/>
        </IconButton>
    </Stack>
    
    <VIstaUser userData={data}  />
    </>
  )
}
