import styled from "styled-components";


export const StyledMain = styled.div`
    display: flex;
    place-items: center;
    gap: 1.5rem;
    
    border: 1px solid red;
    div{
    flex-shrink: 2;
    }


    h1, p {
    color: ${({theme}) => theme.colors.h1};
    }
    
    @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    }
`

export const Image = styled.img`
    
`