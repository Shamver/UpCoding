import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

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

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <rs.Container fluid>
                    <h4>
                        <LeftIconSpan>
                            <LeftIcon icon={this.props.icon}/>
                        </LeftIconSpan>
                        &nbsp;&nbsp;{this.props.title}</h4>
                </rs.Container>
            </React.Fragment>
        );
    }

}

export default Home;