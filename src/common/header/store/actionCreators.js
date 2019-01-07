import * as costants from './constants';
import axios from 'axios';
const changeList = (data) => ({
    type: costants.CHANGE_LIST,
    data: data,
    totalPage: Math.ceil(data.length / 10),
    page: 1,
    mouseIn: false
})

// export const searchFocus = () => ({
//     type: costants.SEARCH_FOCUS
// });

export const searchBlur = () => ({
    type: costants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: costants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: costants.MOUSE_LEAVE
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
            // console.log(data.data.length)
        }).catch(() => {
            console.log('error')
        })
    }
}