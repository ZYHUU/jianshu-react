import * as costants from './constants';
// import { fromJS } from 'immutable';
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if(action.type === costants.SEARCH_FOCUS) {
        console.log(action.type)
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return {
            focused: true
        }
    }
    if(action.type === costants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}