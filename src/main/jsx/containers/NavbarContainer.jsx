import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar.jsx';
import { selectSidebar, selectSidebarItem } from '../../store/modules/navbar';

class NavbarContainer extends React.Component {
    handleSelectSidebar = event => {
        const { selectSidebar, selectedSidebar } = this.props;

        if(event.target){
            let name = event.target.getAttribute('name');
            if (name == undefined) {
                name = event.target.parentElement.getAttribute('name');
            }

            if(name=='home'){
                this.props.history.push("/");
            }

            if(selectedSidebar === name){
                selectSidebar(name);
            } else {
                selectSidebar(name);
            }
        }
    };

    handleSelectSidebarItem = event => {
        const { selectSidebarItem } = this.props;
        selectSidebarItem(event.target.name);
    }

    render() {
        const { selectedSidebar, selectedSidebarItem, toggledNavbar, menus } = this.props;
        return <Navbar
            menus={menus}
            onSelectSidebar={this.handleSelectSidebar}
            onSelectSidebarItem={this.handleSelectSidebarItem}
            selectedSidebar={selectedSidebar}
            selectedSidebarItem={selectedSidebarItem}
            toggledNavbar={toggledNavbar}
        />;
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    selectedSidebar: state.navbar.selectedSidebar,
    selectedSidebarItem: state.navbar.selectedSidebarItem,
    toggledNavbar: state.navbar.toggledNavbar,
    menus: state.navbar.menus,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    selectSidebar: sidebar => dispatch(selectSidebar(sidebar)),
    selectSidebarItem: item => dispatch(selectSidebarItem(item)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);