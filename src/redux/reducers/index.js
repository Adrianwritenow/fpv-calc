
import update from 'immutability-helper';


const initialState = {
    token: null,
    user: null,
    error: null,
    history:null
}

const reducers = (state = initialState, action) => {
    // switch (action.type) {
    //     case SET_ERROR:
    //         return update(state, {
    //             error: {
    //                 $set: action.payload
    //             }
    //         })
    //     case SET_TOKEN:
    //         return update(state, {
    //             token: {
    //                 $set: action.payload
    //             }
    //         });
    //     case SET_USER:
    //         return update(state, {
    //             user: {
    //                 $set: action.payload
    //             }
    //         });
    //
    //         case SET_HISTORY:
    //         console.log('history set');
    //             return update(state, {
    //                 history: {
    //                     $set: action.payload
    //                 }
    //             });
    //     default:
    //         return state;
    // }
}

export default reducers;
