import styled from "styled-components";


export const StyledMain = styled.div`
    display: flex;
    align-items: center; /* Better than place-items for wider browser support */
    gap: 1.5rem;
    flex-wrap: wrap;
    
    div {
    padding: 2em;
    margin: 0.5em;
    }

    div {
        flex: 1 1 300px; /* flex-grow, flex-shrink, flex-basis */
        min-width: 250px; /* Minimum width before wrapping */
    }

    p {
    padding-right: 1em;
    }


    h1, p {
    color: ${({theme}) => theme.colors.h1};
    }

    @media(max-width: ${({theme}) => theme.tablet}){
    p {
    font-size: 1rem;
    }

    h1 {
    font-size: 1.8rem;
    }

    
    }
    
    @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    }
`

export const Image = styled.img`
    max-width: 100%;
    
`