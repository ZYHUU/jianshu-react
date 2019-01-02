import * as costants from './constants';
// import { fromJS } from 'immutable';
let defaultState = {
    focused: false,
    list: []
};

export default (state = defaultState, action) => {
    if (action.type === costants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return {
            focused: true
        }
    }
    if (action.type === costants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    if (action.type === costants.CHANGE_LIST) {
        // console.log(action.data)
        return {
            list: action.data    
        }
    }
    return state;
}