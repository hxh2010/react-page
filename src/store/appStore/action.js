import axios from 'axios';
import * as actionType from './actionType';
import {fromJS} from 'immutable';

export const setMenuStatus = (menuState) => ({
  type: actionType.SET_MENU_STATUS,
  menuState
})

export const setToken = (token) => ({
  type: actionType.SET_TOKEN,
  token
})

export const addTabs = (tab) => ({
  type: actionType.ADD_APP_TABS,
  tab
})

export const deleteTabs = (key) => ({
  type: actionType.DELETE_APP_TABS,
  key
})

export const setActiveKey = (key) => ({
  type: actionType.SET_ACTIVE_KEY,
  key
})

export const setBaseUrl = (url) => ({
  type: actionType.SET_BASE_URL,
  url
})

export const setLogin = (value) => ({
  type: actionType.SET_LOGIN,
  value
})

export const initStore = () => ({
  type: actionType.INIT_STORE
})

