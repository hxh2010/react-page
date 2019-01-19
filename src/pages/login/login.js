import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

import {action as appAction} from '@/store/appStore';
import {action as userAction} from '@/store/userStore';
import {connect} from 'react-redux';
import {message} from 'antd';
import axios from '@/common/axios'
import * as classes from './login.module.styl'

import all from '@/common/js/allMenu'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isRemember: true
    };
  }

  onsubmit = (event) => {
    const {setToken,setUserMenu,setLogin} = this.props
    event.preventDefault();
    console.log(this.state);
    axios.post('/login').then(res => {
      console.log('login',res);

      if (res.data.code === '7200') {
        let data = res.data.data;
        message.success('welcome to react');
        setToken(data.token);
        setUserMenu(data.userMenu);
        setLogin(true);
        this.props.history.push('/index');
      }else {
        message.error('登录异常');
      }
    }).catch(e=>{
      message.error('welcome to react');
      setToken('123');
      setUserMenu(all);
      setLogin(true);
      this.props.history.push('/index');
    })

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  remember = (e, data) => {
    this.setState({
      isRemember: data,
    });
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <div className={classes.title}>
            <div className={classes.img}/>
            reactJS/material/antD
          </div>
          <form onSubmit={this.onsubmit} autoComplete="off">
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">账号</InputLabel>
              <Input
                id="username" name="username" value={this.state.username}
                onChange={this.handleChange('username')}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">密码</InputLabel>
              <Input
                name="password" type="password" value={this.state.password}
                onChange={this.handleChange('password')}
                id="password"/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox checked={this.state.isRemember} onChange={this.remember} color="primary"/>}
              label={this.state.isRemember ? 'spring-boot' : 'easy-mock'}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              登 录
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  setLogin(value) {
    dispatch(appAction.setLogin(value));
  },
  setToken(token) {
    dispatch(appAction.setToken(token));
  },
  setUserMenu(userMenu) {
    dispatch(userAction.setUserMenu(userMenu))
  },
});

export default connect(null, mapDispatch)(Login);
