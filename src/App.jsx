import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global.styled';
import Footer from './components/Footer';



const theme = {
  colors: {
    header: '#9bbdd5ff',
    color: '#674bb1',
    footer: '#003333',
    h1: '#ffffff',
    background: '#674bb1',
    purple: 'hsl(257, 40%, 49%)',
    magenta: 'hsl(300, 69%, 71%)',
  },
  mobile: '768px',

}

function App() {
  return (
    
  <ThemeProvider theme={theme}>
    <GlobalStyles />  
    <Header />
    <Main />
    <Footer />
  </ThemeProvider>  
   
  )
}

export default App
