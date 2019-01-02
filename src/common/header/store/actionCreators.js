import * as costants from './constants';
import axios from 'axios';

export const searchFocus = () => ({
    type: costants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: costants.SEARCH_BLUR
});
const changeList = (data) => ({
    type: costants.CHANGE_LIST,
    data: data
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
            // console.log(data.data)
        }).catch(() => {
            console.log('error')
        })
    }
}