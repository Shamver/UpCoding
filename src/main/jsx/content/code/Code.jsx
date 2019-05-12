import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import CodeGroup from './CodeGroup.jsx';

const TitleSpan = styled.span`
    font-size: 0.9rem;
    color: gray;
`;

const LeftIconSpan = styled.span`
    text-align: center;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    vertical-align: sub;
`;

const H4 = styled.h4`
    margin-bottom : 20px;
`;



class Code extends React.Component {
    render() {
        return (
            <React.Fragment>
                <rs.Container fluid>
                    <H4>
                        <LeftIconSpan>
                            <LeftIcon icon={this.props.icon}/>
                        </LeftIconSpan>
                        &nbsp;&nbsp;{this.props.title} <TitleSpan>설정</TitleSpan>
                    </H4>
                    <CodeGroup/><CodeGroup/>
                </rs.Container>
            </React.Fragment>
        );
    }
}

export default Code;
