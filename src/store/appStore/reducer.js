// import {fromJS} from 'immutable';
import * as constants from './actionType';
import defSt from './base'

const defaultState = JSON.parse(JSON.stringify(defSt));


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_STORE:
      return JSON.parse(JSON.stringify(defSt));

    case constants.SET_TOKEN:
      return Object.assign({}, state, {token: action.token})

    case constants.SET_MENU_STATUS:
      return Object.assign({}, state, {menuState: action.menuState})

    case constants.SET_ACTIVE_KEY:
      return Object.assign({}, state, {activeKey: action.key})

    case constants.SET_BASE_URL:
      return Object.assign({}, state, {baseUrl: action.url})

    case constants.SET_LOGIN:
      return Object.assign({}, state, {isLogin: action.value})

    case constants.ADD_APP_TABS:
      let tempAdd = JSON.parse(JSON.stringify(state))
      tempAdd.appTabs.push(action.tab)
      return tempAdd;

    case constants.DELETE_APP_TABS:
      let tempDel = JSON.parse(JSON.stringify(state))
      let number = tempDel.appTabs.findIndex(d => {
        return d.key === action.key
      });
      tempDel.appTabs.splice(number, 1)
      return tempDel;
    default:
      return state;
  }
}
