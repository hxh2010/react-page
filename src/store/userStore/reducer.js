import * as actionType from './actionType';

import defSt from './base'

const defaultState = JSON.parse(JSON.stringify(defSt));

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.INIT_STORE:
      return JSON.parse(JSON.stringify(defSt));

    case actionType.SET_USER_INFO:
      return Object.assign({},state,{userInfo: action.userInfo})

    case actionType.SET_USER_MENU:
      return Object.assign({},state,{userMenu: action.userMenu})
    default:
      return state;
  }
}
