import styled from 'styled-components';
import * as rs from "reactstrap";

export const SideItemCol = styled(rs.Col)`
    color: white;
    text-align: center;
    text-vertical: middle;
    padding: 0;
    
    @media only screen and (max-width: 1200px){
        opacity: ${props => props.toggled == "true" ? 100 : 0}
        transition: opacity 0.2s;
        transition-delay: 0.08s;
    }
    
    @media only screen and (min-width: 1200px) {
        transition: opacity 0.2s;
        transition-delay: 0.08s;
        opacity: 100;
    }
`;

export default SideItemCol;