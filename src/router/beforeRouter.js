import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import NProgress from 'nprogress' // 进度条
import {connect} from 'react-redux';
import {action as appAction} from '@/store/appStore';
import {action as userAction} from '@/store/userStore';
import '../common/styl/nprogress.styl'// progress bar style

NProgress.configure({showSpinner: false})// NProgress Configuration


class BeforeRouter extends Component {
  render() {
    NProgress.start();
    console.log("BeforeRouter", this.props)
    let { ...rest} = this.props; //获取顶层provider上所有的信息

    let path = rest.location.pathname;
    console.log('1', path)

    NProgress.done();
    return (
      <Route {...rest}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appTabs: state.app.appTabs,
    activeKey: state.app.activeKey,

  }
}



export default connect(mapStateToProps, null)(BeforeRouter);

