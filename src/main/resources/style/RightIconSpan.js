import styled from 'styled-components';

export const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    visibility: ${props => props.toggled == "true" ? "hidden" : "visible"}
    opacity: ${props => props.toggled == "true" ? 0 : 100}
    transition: ${props => props.toggled == "true" ? "all 0.1s" : "all 0.1s"}
    transition-delay: ${props => props.toggled == "true" ? "0" : "0.1s"}
    
`

export default RightIconSpan;