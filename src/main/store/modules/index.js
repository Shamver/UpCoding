import { combineReducers } from 'redux';
import header from './header';
import navbar from './navbar';
import modal from './modal';

export default combineReducers({
    header,
    navbar,
    modal,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});