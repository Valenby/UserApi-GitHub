import { Container } from "@mui/system";
import { SearcherComponent } from "./components";

export const App = ({initialData}) => {
  
  return (
   <Container 
   sx={{ 
    background: '#EAC7C7',
    border: '1px solid #ccc',
    height: '400%',
    width: '100%',
    borderRadius: '16px',
    
  }}
   >


    <SearcherComponent initialData = {initialData} />
   </Container>
  )
}