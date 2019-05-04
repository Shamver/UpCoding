// fontawesome 가져오기
import * as fa from "@fortawesome/free-solid-svg-icons/index";

// 액션 타입 정의
const SELECT_SIDEBAR = 'navbar/SELECT_SIDEBAR';
const SELECT_SIDEBAR_ITEM = 'navbar/SELECT_SIDEBAR_ITEM';
const TOGGLE_NAVBAR = 'navbar/TOGGLE_NAVBAR';

// **** 액션 생섬함수 정의
export const selectSidebar = sidebar => ({ type: SELECT_SIDEBAR, sidebar });
export const selectSidebarItem = item => ({ type: SELECT_SIDEBAR_ITEM, item });
export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });

// **** 초기상태 정의
const initialState = {
    selectedSidebar: 'Home',
    selectedSidebarItem: '',
    toggledNavbar: false,
    menus: [
                {
                    "head": "게시판",
                    "icon": fa.faClipboardList,
                    "items": [
                        {
                            "name": "전체",
                            "to": "/board/all"
                        },
                        {
                            "name": "자유",
                            "to": "/board/free"
                        },
                        {
                            "name": "코딩",
                            "to": "/board/coding"
                        },
                        {
                            "name": "Q&A",
                            "to": "/board/qna"
                        },
                    ]
                },
                {
                    "head": "데이터",
                    "icon": fa.faDatabase,
                    "items": [
                    {
                        "name": "데이터-1",
                        "to": "/data/1"
                    },
                    {
                        "name": "데이터-2",
                        "to": "/data/2"
                    }
                ]
                },
                {
                    "head": "장비",
                    "icon": fa.faToolbox,
                    "items": [
                    {
                        "name": "장비-1",
                        "to": "/device/1"
                    },
                    {
                        "name": "장비-2",
                        "to": "/device/2"
                    },
                    {
                        "name": "장비-3",
                        "to": "/device/3"
                    }
                ]
                },
                {
                    "head": "일정",
                    "icon": fa.faCalendarAlt,
                    "items": [
                    {
                        "name": "일정-1",
                        "to": "/plan/1"
                    },
                    {
                        "name": "일정-2",
                        "to": "/plan/2"
                    },
                    {
                        "name": "일정-3",
                        "to": "/plan/3"
                    },
                    {
                        "name": "일정-4",
                        "to": "/plan/4"
                    }
                ]
                },
                {
                    "head": "설정",
                    "icon": fa.faCog,
                    "items": [
                    {
                        "name": "코드 관리",
                        "to": "/setting/code"
                    },
                    {
                        "name": "이메일-2",
                        "to": "/email/2"
                    },
                    {
                        "name": "이메일-3",
                        "to": "/email/3"
                    }
                ]
                }
        ]
};

// **** 리듀서 작성
export default function navbar(state = initialState, action) {
    switch (action.type) {
        case SELECT_SIDEBAR:
            return {
                ...state,
                selectedSidebar: action.sidebar,
            };
        case SELECT_SIDEBAR_ITEM:
            return {
                ...state,
                selectedSidebarItem: action.item,
            };
        case TOGGLE_NAVBAR:
            return {
                ...state,
                toggledNavbar: !state.toggledNavbar,
            };
        default:
            return state;
    }
}