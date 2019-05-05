import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/main/Main.jsx';
import {  } from '../../store/modules/main';

class MainContainer extends React.Component {

    render() {
        const { toggledNavbar } = this.props;
        return <Main
            toggledNavbar={toggledNavbar}
        />;
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    toggledNavbar: state.navbar.toggledNavbar,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({

});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);