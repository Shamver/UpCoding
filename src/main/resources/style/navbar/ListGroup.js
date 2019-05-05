import styled from 'styled-components';
import * as rs from "reactstrap";

export const ListGroup = styled(rs.ListGroup)`
    text-align: left !important;
    background-color: #192532;
    
    
    @media only screen and (max-width: 1200px){
        max-height: ${props => props.toggled == "false" ? 0 : "none"}
        visibility: ${props => props.toggled == "false" ? "hidden" : "visible"}
        opacity: ${props => props.toggled == "false" ? 0 : 100}
        transition: ${props => props.toggled == "false" ? "visibility opacity max-height 0.1s" : "visibility opacity max-height 0.3s"}
        transition-delay: ${props => props.toggled == "false" ? "0" : "0.1s"}
    }
    
    @media only screen and (min-width: 1200px) {
        max-height: ${props => props.toggled == "true" ? 0 : "none"}
        visibility: ${props => props.toggled == "true" ? "hidden" : "visible"}
        opacity: ${props => props.toggled == "true" ? 0 : 100}
        transition: ${props => props.toggled == "true" ? "visibility opacity max-height 0.1s" : "visibility opacity max-height 0.3s"}
        transition-delay: ${props => props.toggled == "true" ? "0" : "0.1s"}
    }
`;

export default ListGroup;