import styled from "styled-components";
import { HeartOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

export const StyledFooter = styled.div`
    position: relative;
     width: 100%;
    margin-top: auto;
    
    

    div {
    display: flex;
    justify-content: end;
    gap: 3em;
    margin-right: 4em;
    padding: rem;
    color: white; 
    }
  @media(max-width: ${({ theme}) => theme.tablet}){
    div {
    justify-content: center;
    gap: 1.5em;
    }
  }
    @media (max-width: ${({theme}) => theme.mobile}){
    gap: 1em;
    }
` 

    export const StyledHeartIcon = styled(HeartOutlined)`
        color: white;
        font-size: 24px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 5px;
        &:hover {
        border-color:${({theme}) => theme.colors.magenta};
        color: ${({theme}) => theme.colors.magenta};
        
  }
`;

export const StyledHomeIcon = styled(HomeOutlined)`
    color: white;
        font-size: 24px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 5px;
        &:hover {
        border-color:${({theme}) => theme.colors.magenta};
        color: ${({theme}) => theme.colors.magenta};
  }
`
export const StyledSmileIcon = styled(SmileOutlined)`
color: white;
        font-size: 24px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 5px;
        &:hover {
        border-color:${({theme}) => theme.colors.magenta};
        color: ${({theme}) => theme.colors.magenta};
  }
`