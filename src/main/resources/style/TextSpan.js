import styled from 'styled-components';

export const TextSpan = styled.span`
    visibility: ${props => props.toggled == "true" ? "hidden" : "visible" }
    opacity: ${props => props.toggled == "true" ? 0 : 100}
    transition: ${props => props.toggled == "true" ? "all 0.1s" : "all 0.1s"}
    transition-delay: ${props => props.toggled == "true" ? "0" : "0.1s"}
`

export default TextSpan;