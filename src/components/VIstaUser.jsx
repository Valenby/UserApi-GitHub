<<<<<<< HEAD:platziMaterialUI/src/components/VIstaUser.jsx
import { CardMedia, Grid, Stack } from "@mui/material"
import { PrincipalDescription } from "./PrincipalDescription"
import { PrincipalInformacion } from "./PrincipalInformacion"

export const VIstaUser = ({userData}) => {
  
=======
import { CardMedia, Grid } from "@mui/material"
import { DescriptionCuenta } from "./DescriptionCuenta"

import { PrincipalInformacion } from "./PrincipalInformacion"

export const VIstaUser = ({userData}) => {

>>>>>>> ConGrid:src/components/VIstaUser.jsx
  return (
    <>
    
    <Grid
    mt={3}
    container
<<<<<<< HEAD:platziMaterialUI/src/components/VIstaUser.jsx
    spacing={2}
    sx={{marginTop: '5px'}}
    >
        <Grid item xs={4}>
=======
    direction="row"
    justifyContent='space-around'
    alignItems='center'
    
    >
        <Grid item xs={6} md={2} >
>>>>>>> ConGrid:src/components/VIstaUser.jsx
            <CardMedia 
                component='img'
                alt="GitHub User"
                image={userData.avatar_url}
<<<<<<< HEAD:platziMaterialUI/src/components/VIstaUser.jsx
                sx={{borderRadius: '50%', }}
=======
                sx={{borderRadius: '50%',}}
>>>>>>> ConGrid:src/components/VIstaUser.jsx
            />
    </Grid>

<<<<<<< HEAD:platziMaterialUI/src/components/VIstaUser.jsx
        <Grid item xs={6}>
          <Stack
          direction='column'
          spacing={2}
          sx={{margin: '20px'}}
          >
            <PrincipalInformacion userData={userData} />
             <PrincipalDescription userData={userData} /> 
          </Stack>
        </Grid>
    



=======
        <Grid item xs={6} md={2} >
            <PrincipalInformacion userData={userData} />
             
        </Grid>  
>>>>>>> ConGrid:src/components/VIstaUser.jsx
    </Grid>

   
    <DescriptionCuenta userData={userData} />
 
  </>
  )
}
