import { Grid, Typography } from "@mui/material"



export const PrincipalInformacion = ({userData}) => {

    const {name, login, created_at} = userData;


  return (
    <>
    <Grid
    container
    spacing={3}
    direction='row'
    justifyContent='space-evenly'
    alignItems='center'
    >
      

    <Grid item  xs={8} lg={2}>
        <Typography variant="h4" > <b> {name}</b> </Typography>
        
    </Grid>

    <Grid item  xs={8} lg={4}>
    <Typography variant="subtitle"> <b> {created_at}</b> </Typography>
    </Grid>

  
    </Grid>

    <Typography  variant="caption"> @{login} </Typography>
    
    
    </>
  )
}
