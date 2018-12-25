import {SET_USER, SET_ERROR, SET_BUILDS,NEW_HERO_BUILD,VS_VOTE} from '../actions';

import update from 'immutability-helper';


const initialState = {
    user: null,
    error: null,
    builds:null,
    newHeroBuild:null,
    vsVote:null
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return update(state, {
                error: {
                    $set: action.payload
                }
            })
        case SET_USER:
            return update(state, {
                user: {
                    $set: action.payload
                }
            });

            case SET_BUILDS:
            console.log('builds set');
                return update(state, {
                    builds: {
                        $set: action.payload
                    }
                });
              case NEW_HERO_BUILD:
              console.log('builds set');
                  return update(state, {
                      newHeroBuild: {
                          $set: action.payload
                      }
                  });
                  case VS_VOTE:
                  console.log('builds set');
                      return update(state, {
                          vsVote: {
                              $set: action.payload
                          }
                      });
        default:
            return state;
    }
}

export default reducers;
