import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global.styled';
import { Logo, Nav } from './components/styled/Header.styled';
import { Button } from './components/styled/Button.styled';


const theme = {
  colors: {
    header: '#9bbdd5ff',
    color: '#ff0000 ',
    footer: '#003333',
  }
}

function App() {
  return (
    
  <ThemeProvider theme={theme}>
    <GlobalStyles />  
  
  <Header >
    
    </Header>
 
  </ThemeProvider>  
   
  )
}

export default App
