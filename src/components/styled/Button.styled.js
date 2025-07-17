import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    padding: 15px 60px;
    background-color: ${({bg}) =>bg || '#00000'};
    color: ${({theme}) => theme.colors.color || '#333'};
    margin-top: 1.5rem;


    &:hover {
    background-color: ${({theme}) => theme.colors.magenta};
    color: white;
    transform: scale(0.98);
    }
`