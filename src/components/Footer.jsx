import { StyledFooter, StyledHeartIcon, StyledHomeIcon, StyledSmileIcon } from "./styled/Footer.styled";
import {SyncOutlined, HomeOutlined, SmileOutlined, HeartOutlined} from '@ant-design/icons';


export default function Footer(){
    return (
        <StyledFooter>
           {/* <div><HomeOutlined /><SyncOutlined/><SmileOutlined /></div> */}
            <div><StyledHeartIcon /><StyledHomeIcon /><StyledSmileIcon /></div>
        </StyledFooter>
    )
}