
import { StyledHeader, Nav, Logo } from './styled/Header.styled';
import  {Button} from './styled/Button.styled';

 export default function Header() {
  return (
    <StyledHeader>
      <h1>Huddle</h1>
      <Nav>
            <Logo src='./logo.svg' alt="logo"/>
            
            <Button>Try it free</Button>
          </Nav>
          <p>Come on!</p>
    </StyledHeader>
  )
}
  