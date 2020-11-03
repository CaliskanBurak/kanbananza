import { lists as defaultLists } from '../normalized-state.js';

const listReducer = (lists = defaultLists, action) => {
    console.log(lists, action);
    return lists;
}

export default listReducer;