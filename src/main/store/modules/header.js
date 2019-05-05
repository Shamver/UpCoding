// 액션 타입 정의
const TOGGLE_MESSAGE = 'header/TOGGLE_MESSAGE';
const TOGGLE_NOTIFICATION = 'header/TOGGLE_NOTIFICATION';
const TOGGLE_PROFILE = 'header/TOGGLE_PROFILE';

// **** 액션 생섬함수 정의
export const toggleMessage = () => ({ type: TOGGLE_MESSAGE });
export const toggleNotification = () => ({ type: TOGGLE_NOTIFICATION });
export const toggleProfile = () => ({ type: TOGGLE_PROFILE });

// **** 초기상태 정의
const initialState = {
    message: false,
    notification: false,
    profile: false,
};

// **** 리듀서 작성
export default function header(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MESSAGE:
            return {
                ...state,
                message: !state.message,
            };
        case TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification: !state.notification,
            };
        case TOGGLE_PROFILE:
            return {
                ...state,
                profile: !state.profile,
            };
        default:
            return state;
    }
}