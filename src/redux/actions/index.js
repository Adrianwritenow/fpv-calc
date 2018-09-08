import request from "superagent";


export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const SET_BUILDS = 'SET_BUILDS';
export const NEW_HERO_BUILD = 'NEW_HERO_BUILD';
export const VS_VOTE = 'VS_VOTE';

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
}


const setUser = makeActionCreator(SET_USER);
const setError = makeActionCreator(SET_ERROR);
const setBuild = makeActionCreator(SET_BUILDS);
const newHeroBuild = makeActionCreator(NEW_HERO_BUILD);
const vsVote = makeActionCreator(VS_VOTE);
