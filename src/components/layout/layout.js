import React, {Component} from 'react';
import AppMenu from '@/components/appMenu/appMenu'
import AppHeader from '@/components/appHeader/appHeader'
import style from './layout.module.styl'
import {action} from '@/store/appStore'
import {withRouter} from "react-router";

import {connect} from 'react-redux';


import {Tabs, Button} from 'antd';

const TabPane = Tabs.TabPane;

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (activeKey) => {
    console.log('onChange', activeKey)
    this.props.history.push(activeKey);
    this.props.setActiveKey(activeKey);
  }

  onEdit = (targetKey, action) => {
    console.log(targetKey, action)
    this.props.deleteTabs(targetKey);
    this.props.history.push('/index');
    this.props.setActiveKey('/index');
  }


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.appMenu}>
          <AppMenu/>
        </div>
        <div
          className={style.appHeader}
          style={{
            width: this.props.menuState ? "calc(100% - 80px)" : "calc(100% - 200px)",
            left: this.props.menuState ? "80px" : "200px"
          }}>
          <AppHeader/>
        </div>
        <div
          className={style.appMain}
          style={{margin: this.props.menuState ? "90px 20px 0px 100px" : "90px 20px 0px 220px"}}>
          {
            this.props.menuState && this.props.isLogin
              ? <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={this.props.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
              >
                {this.props.appTabs.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                  {this.props.children}
                </TabPane>)}
              </Tabs>
              : this.props.children
          }
        </div>

      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuState: state.app.menuState,
    isLogin: state.app.isLogin,
    appTabs: state.app.appTabs,
    activeKey: state.app.activeKey,
  }
}

const mapDispatch = (dispatch) => ({
  addTabs(tab) {
    dispatch(action.addTabs(tab));
  },
  deleteTabs(key) {
    dispatch(action.deleteTabs(key));
  },
  setActiveKey(key) {
    dispatch(action.setActiveKey(key))
  },
});

export default withRouter(connect(mapStateToProps, mapDispatch)(Layout));
