import { CardMedia, Grid, Stack } from "@mui/material"
import { PrincipalDescription } from "./PrincipalDescription"
import { PrincipalInformacion } from "./PrincipalInformacion"

export const VIstaUser = ({userData}) => {
  
  return (
    <Grid
    container
    spacing={2}
    sx={{marginTop: '5px'}}
    >
        <Grid item xs={4}>
            <CardMedia 
                component='img'
                alt="GitHub User"
                image={userData.avatar_url}
                sx={{borderRadius: '50%', }}
            />
    </Grid>

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
    



    </Grid>
  )
}
