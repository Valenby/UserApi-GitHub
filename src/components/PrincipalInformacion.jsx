import * as React from 'react';
import {  Grid, Typography } from "@mui/material";

export const PrincipalInformacion = ({userData}) => {
    
    const {name, login, created_at,bio } = userData;

  return (
    <>
      <Grid >
        <Grid item>
          <Typography  textAlign='center' variant='h5'color='#03001C' > <b>{name}</b> </Typography>
          <Typography mt={1} textAlign='center' > @{login}  </Typography>
        </Grid>

        <Typography mt={1} textAlign='center' variant='body1' >  @{created_at} </Typography>

    </Grid>

  <Grid >
        {
          bio !== null
          ?<Typography variant="body1" textAlign='center' > {bio}</Typography>
          :<Typography variant="body1" textAlign='center' > No hay descripción </Typography>
        }
  </Grid>
   
   

    </>
  )
}
