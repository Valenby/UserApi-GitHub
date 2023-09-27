//contenedor de componentes

import { Stack, Typography } from "@mui/material";
import { LocationInfo } from "./LocationInfo";
import { PaperInfo } from "./PaperInfo";




export const PrincipalDescription = ({userData}) => {
  const {bio} = userData;
  return (
    <>
    
    <Stack
    sx={{justifyContent: 'center'}}
    >

    {
      bio !== null
      ?<Typography variant="body1">{bio}</Typography>
      :<Typography variant="body1">Lorem ipsum dolor sit amet consectetur </Typography>
    }

      
    </Stack >

     <PaperInfo userData={userData}/>
    <LocationInfo userData={userData}/> 
    
    
    </>
  )
}
