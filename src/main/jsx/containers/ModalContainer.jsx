import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal.jsx';
import { toggleModalLogin } from '../../store/modules/modal';

class ModalContainer extends React.Component {

    toggleModalLogin = () => {
        const { toggleModalLogin } = this.props;
        toggleModalLogin();
    }

    render() {
        const { toggleModalLoginYN } = this.props;
        return <Modal
            toggleModalLogin={this.toggleModalLogin}
            toggleModalLoginYN={toggleModalLoginYN}
        />;
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    toggleModalLoginYN: state.modal.login,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    toggleModalLogin: () => dispatch(toggleModalLogin()),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);