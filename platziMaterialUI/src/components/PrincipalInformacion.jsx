import * as React from 'react';
import {  BottomNavigation, BottomNavigationAction, Grid, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Diversity3, DynamicFeed } from '@mui/icons-material';



export const PrincipalInformacion = ({userData}) => {
    
  const [value, setValue] = React.useState(0);

    const {name, login, created_at,bio, public_repos , followers, following } = userData;


  return (
    <>
      <Grid 
      container
      direction='row'
      justifyContent='space-between'
      >
        <Grid item >
          <Typography> {name} </Typography>
          <Typography> {created_at} </Typography>
        </Grid>
       

      <Typography> {login} </Typography>
      <Typography> {bio} </Typography>

    <Grid item>
      
    </Grid>

    <Grid item >
      <Typography> repos</Typography>
      <Typography> followers</Typography>
      <Typography> following</Typography>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue)=>{
          setValue(newValue);
        }}
      >

        <BottomNavigationAction  label={ public_repos} icon={<FavoriteIcon/>} /> 
        <BottomNavigationAction label={ followers} icon={<FavoriteIcon  />}/>
        <BottomNavigationAction label={ following} icon={<FavoriteIcon  />}/>
        
      </BottomNavigation>
    </Grid>
    </Grid>
   

    </>
  )
}
