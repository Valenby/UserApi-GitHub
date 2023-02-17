import { CardMedia, Grid } from "@mui/material"
import { PrincipalInformacion } from "./PrincipalInformacion"

export const VIstaUser = ({userData}) => {
    // console.log(userData.avatar_url)
   
    //  if(!userData){
    //      return (<> </>)
    // }

  return (
    <Grid
    container
   
    >
        <Grid item xs={2}>
            <CardMedia 
                component='img'
                alt="GitHub User"
                image={userData.avatar_url}
            />
        </Grid>

        <Grid item xs={8}>
            <PrincipalInformacion userData={userData} />
            {/* <PrincipalDescriptio/> */}
        </Grid>
    



    </Grid>
  )
}
