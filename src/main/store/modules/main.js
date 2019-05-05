// 액션 타입 정의
const TOGGLE_MODAL_LOGIN = 'modal/TOGGLE_MODAL_LOGIN';

// **** 액션 생섬함수 정의
export const toggleModalLogin = () => ({ type: TOGGLE_MODAL_LOGIN });

// **** 초기상태 정의
const initialState = {
    login: false,
};

// **** 리듀서 작성
export default function main(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL_LOGIN:
            return {
                ...state,
                login: !state.login,
            };
        default:
            return state;
    }
}