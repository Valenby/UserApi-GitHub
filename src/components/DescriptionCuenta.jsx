import { Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const DescriptionCuenta = ({userData}) => {

  const { public_repos , followers, following } = userData;

    return (
    <>

    <Grid container>
      <Grid Grid item xs={12}>

        <Paper elevation={4} style={{background: '#ECF2FF'}}>
              <Stack
              direction='row'
              spacing={1}
              justifyContent='space-evenly'
              sx={{margin: '25px'}}
              >

          <Stack alignItems='center'>  
          <Typography variant="h6" color='#000000'> Repos </Typography>
          <Typography variant="h6"> {public_repos} </Typography>
          </Stack>
          <Stack alignItems='center'>
          <Typography variant="h6" color='#000000'> Followers </Typography>
          <Typography variant="h6"> {followers} </Typography>
          </Stack>
          <Stack alignItems='center'>
          <Typography variant="h6" color='#000000'> Following </Typography>
          <Typography variant="h6"> {following} </Typography>
          </Stack>
        </Stack>
      </Paper>
      </Grid>
    </Grid>

</>

  );
}
