import { StyledMain, Image } from "./styled/Main.styled";
import { Button } from "./styled/Button.styled";
export default function Main(){
    return (
        <StyledMain>
           
                <Image src="/illustration-mockups.svg"/>
            
           
            <div>
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                Create connections with your users as you engage in genuine discussion. </p>
                <Button>Register</Button>
            </div>
        </StyledMain>
    )
}