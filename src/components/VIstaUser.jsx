import { CardMedia, Grid } from "@mui/material"
import { DescriptionCuenta } from "./DescriptionCuenta"

import { PrincipalInformacion } from "./PrincipalInformacion"

export const VIstaUser = ({userData}) => {

  return (
    <>
    
    <Grid
    mt={3}
    container
    direction="row"
    justifyContent='space-around'
    alignItems='center'
    
    >
        <Grid item xs={6} md={2} >
            <CardMedia 
                component='img'
                alt="GitHub User"
                image={userData.avatar_url}
                sx={{borderRadius: '50%',}}
            />
        </Grid>

        <Grid item xs={6} md={2} >
            <PrincipalInformacion userData={userData} />
             
        </Grid>  
    </Grid>

   
    <DescriptionCuenta userData={userData} />
 
  </>
  )
}
