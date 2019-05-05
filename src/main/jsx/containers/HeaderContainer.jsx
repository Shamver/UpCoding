import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header.jsx';
import { toggleMessage, toggleNotification, toggleProfile } from '../../store/modules/header';
import { toggleNavbar } from '../../store/modules/navbar';
import * as fa from "@fortawesome/free-solid-svg-icons/index";

class HeaderContainer extends React.Component {
    toggleMessage = () => {
        const { toggleMessage } = this.props;

        toggleMessage();
    };

    toggleNotification = () => {
        const { toggleNotification } = this.props;

        toggleNotification();
    };

    toggleProfile = () => {
        const { toggleProfile } = this.props;

        toggleProfile();
    };

    toggleNavbar = () => {
        const { toggleNavbar } = this.props;

        toggleNavbar();
    }

    render() {
        const { toggleMessageYN, toggleProfileYN, toggleNotificationYN, toggleNavbarYN } = this.props;

        let icon = null;

        if(toggleNavbarYN){
            icon = fa.faArrowRight;
        } else {
            icon = fa.faArrowLeft;
        }


        return <Header
            icon={icon}
            toggleMessage={this.toggleMessage}
            toggleNotification={this.toggleNotification}
            toggleProfile={this.toggleProfile}
            toggleNavbar={this.toggleNavbar}
            toggleMessageYN={toggleMessageYN}
            toggleProfileYN={toggleProfileYN}
            toggleNotificationYN={toggleNotificationYN}
        />;
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    toggleMessageYN: state.header.message,
    toggleProfileYN: state.header.profile,
    toggleNotificationYN: state.header.notification,
    toggleNavbarYN: state.navbar.toggledNavbar
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    toggleMessage: () => dispatch(toggleMessage()),
    toggleProfile: () => dispatch(toggleProfile()),
    toggleNotification: () => dispatch(toggleNotification()),
    toggleNavbar: () => dispatch(toggleNavbar()),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);