import { Business, FmdGood, Language, Twitter } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";


export const LocationInfo = ({userData}) => {

    const {location, twitter_username, blog, company} = userData;

  return (
    <Grid 
    container
    spacing={2}
    >
        <Grid item xs={6}>
            <Stack direction='row'spacing={2}>
                <FmdGood/>
                { location !== null
                    ?<Typography> {location} </Typography>
                    : <Typography> Not Available </Typography>
                }
            </Stack>
        </Grid>
        
        <Grid item xs={6}>
            <Stack direction='row'spacing={2}>
                <Twitter/>
                { twitter_username !== null
                    ?<Typography> @{twitter_username} </Typography>
                    : <Typography> Not Available </Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack direction='row'spacing={2}>
            <Business/>
                 { company !== null
                    ?<Typography> {company} </Typography>
                    : <Typography> Not Available </Typography>
                }
           
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack direction='row'spacing={2}>
            <Language/>
                { blog !== ""
                     
                    ?<a target='_blank' href={blog}><Typography> {blog} </Typography></a>
                    : <Typography> Not Available </Typography>
                }
            </Stack>
        </Grid>
    </Grid>
  )
}
