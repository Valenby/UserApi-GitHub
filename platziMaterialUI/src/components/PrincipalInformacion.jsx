import { Typography } from "@mui/material"
import { Stack } from "@mui/system"


export const PrincipalInformacion = ({userData}) => {

    const {name, login, created_at} = userData;


  return (
    <>
    <Stack>
        <Typography> {name} </Typography>
        <Typography> {created_at} </Typography>
    </Stack>

    <Typography> {login} </Typography>
    
    </>
  )
}
