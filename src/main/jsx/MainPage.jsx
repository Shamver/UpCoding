import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App.jsx';

// createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from '../store/modules';
// Provider 불러오기
import { Provider } from 'react-redux';

// **** 리덕스 개발자도구 적용
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 스토어를 만들고 현재 값 확인해보기
const store = createStore(rootReducer, devTools);

class MainPage extends React.Component {
 
    render() {
        console.log(store.getState());
        return (
			<BrowserRouter>
                <Route render={({history}) => <App history={history}/>}/>
			</BrowserRouter>
        );
    }
 
}

// Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(<Provider store={store}>
    <MainPage/>
</Provider>, document.getElementById('root'));