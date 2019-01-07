import * as costants from './constants';
// import { fromJS } from 'immutable';
let defaultState = {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case costants.SEARCH_BLUR:
            return { focused: false };
        case costants.CHANGE_LIST:
            return {
                list: action.data,
                focused: true,
                totalPage: action.totalPage,
                page: action.page,
                mouseIn: action.mouseIn
            };
        case costants.MOUSE_ENTER:
            return { mouseIn: true };
        case costants.MOUSE_LEAVE:
            return { mouseIn: false };
        default:
            return state;
    }
}