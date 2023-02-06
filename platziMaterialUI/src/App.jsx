import { Container } from "@mui/system";
import { SearcherComponent } from "./components";


export const App = () => {

  return (
   <Container sx={{
      background: '#FFE1E1',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   }} >
    <SearcherComponent />
   </Container>
  )
}
