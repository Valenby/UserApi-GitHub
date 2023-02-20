import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";


export const PaperInfo = ({userData}) => {

  const { public_repos , followers, following } = userData;

  return (
    <>
    
    <Paper elevation={3}>
      <Stack
      direction='row'
      spacing={3}
      justifyContent='space-evenly'
      sx={{margin: '25px'}}
      >
        <Stack alignItems='center'>
        <Typography variant="h5"> Repos </Typography>
        <Typography variant="h6"> {public_repos} </Typography>
        </Stack>
        <Stack alignItems='center'>
        <Typography variant="h5"> Followers </Typography>
        <Typography variant="h6"> {followers} </Typography>
        </Stack>
        <Stack alignItems='center'>
        <Typography variant="h5"> Following </Typography>
        <Typography variant="h6"> {following} </Typography>
        </Stack>
      </Stack>
    </Paper>
    
    
    </>
  )
}
