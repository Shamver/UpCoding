import styled from 'styled-components';

export const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    
    @media only screen and (max-width: 1200px){
        visibility: ${props => props.toggled == "true" ? "visible" : "hidden"}
        opacity: ${props => props.toggled == "true" ? 100 : 0}
        transition: ${props => props.toggled == "true" ? "all 0.1s" : "all 0.1s"}
        transition-delay: ${props => props.toggled == "true" ? "0.1s" : "0"}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${props => props.toggled == "true" ? "hidden" : "visible"}
        opacity: ${props => props.toggled == "true" ? 0 : 100}
        transition: ${props => props.toggled == "true" ? "all 0.1s" : "all 0.1s"}
        transition-delay: ${props => props.toggled == "true" ? "0" : "0.1s"}
    }
`

export default RightIconSpan;