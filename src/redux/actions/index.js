import request from "superagent";
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';



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



export const loadTokenFromCookie = () => {
    return (dispatch) => {
        const token = Cookies.get('token');
        if (token) {
          console.log('im a token:',token)
            // dispatch(setToken(token));
        }
    }
}

export const login = (username, password, callback) => {
    return (dispatch, getState) => {
      console.log('bout to login');
        request
            .post("http://localhost:3001/login")
            .send({username: username, password: password})
            .end((err,response) => {
                if (err) {
                    return dispatch(setError(err));
                } else {
                  dispatch(setError(null));
                  console.log("res authtoken",response.body.auth_token);

                  Cookies.set('token', response.body.auth_token, {expires:7});
                  dispatch(setUser({email: response.body.email, 'username': response.body.username, id: response.body.id}))
                  dispatch(loadTokenFromCookie());
                  // dispatch(getDashboard());
                    console.log("bang")
                }
                if (callback) {
                    callback();
                }
            })
    }
}

export const register = ({
    email,
    password,
    username,
    name
}, callback) => {
    return (dispatch, getState) => {
      console.log("bout to Create a User");
        request
            .post("http://localhost:3001/register")
            .send({email: email, password: password, username: username, name:name})
            .end((err, res) => {
                if (err) {
                    return dispatch(setError(err));
                } else {
                    dispatch(setError(null));

                }
                if (callback) {
                    callback();
                }

            })

            console.log('check:');
            dispatch(push('/login'));

    }

}
