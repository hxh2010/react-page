import axios from 'axios';
import * as constants from './actionType';
import * as actionType from "../appStore/actionType";

const changeLogin = () => ({
	type: constants.SET_USER_INFO,
	value: true
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}


export const setUserInfo = (userInfo) => ({
  type: constants.SET_USER_INFO,
  userInfo
})

export const setUserMenu = (userMenu) => ({
  type: constants.SET_USER_MENU,
  userMenu
})

export const initStore = () => ({
  type: actionType.INIT_STORE
})
