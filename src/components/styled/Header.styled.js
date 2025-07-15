import styled from 'styled-components'

export const StyledHeader = styled.div`
background: ${({theme}) => theme.colors.header};
color: ${({theme})=>theme.colors.color};

text-align: center;

`

export const Nav = styled.nav`
display: flex;

align-items: center;
justify-items: space-between;

`

export const Logo = styled.img`
    
`