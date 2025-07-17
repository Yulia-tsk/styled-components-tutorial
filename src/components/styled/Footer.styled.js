import styled from "styled-components";
import { HeartOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

export const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    

    div {
    display: flex;
    justify-content: end;
    gap: 3rem;
    margin-right: 3rem;
    padding: 3rem;
    color: white; 
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
        color: ${({theme}) => theme.colors.magenta};
  }
`