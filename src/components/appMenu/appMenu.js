import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {action as appAction} from '@/store/appStore';
import {action as userAction} from '@/store/userStore';
import {NavLink} from 'react-router-dom'
import {Menu, Icon} from 'antd';
import style from './appMenu.module.styl'

const SubMenu = Menu.SubMenu;

class appMenu extends Component {

  state = {}

  componentDidMount() {
    const {menuState, userMenu} = this.props;
    // console.log('======', menuState, userMenu);
  }

  clickItem = (data) => {
    let {appTabs, addTabs, setActiveKey} = this.props;

    setActiveKey(data.key);

    let filter = appTabs.filter(d => {
      return d.key === data.key;
    });
    if (!filter.length) {
      addTabs({key: data.key, title: data.title})
    }
    console.log(data);
  }

  render() {
    return (
      <div style={{width: this.props.menuState ? "80px" : "200px", transition: 'all 0.3s'}}>

        <div className={style.title}>
          <div className={style.img}/>
          <div
            className={style.name}
            style={{display: this.props.menuState ? "none" : "block", transition: 'all 0.3s'}}>
            React-JS
          </div>

        </div>
        <Menu
          selectedKeys={[this.props.activeKey]}
          mode="inline"
          // theme={'dark'}
          inlineCollapsed={this.props.menuState}>
          {
            this.props.userMenu.map((item) => {
              if (item.children) {
                return (
                  <SubMenu
                    key={item.key}
                    title={
                      <span><Icon type={item.icon}/><span>{item.title}</span></span>
                    }>
                    {
                      item.children.map(d => {
                        return (
                          <Menu.Item key={d.key} onClick={() => {
                            this.clickItem({key: d.key, title: d.title})
                          }}>
                            <NavLink to={d.key}>
                              <Icon type={d.icon}/>
                              <span>{d.title}</span>
                            </NavLink>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.key} onClick={() => {
                    this.clickItem({key: item.key, title: item.title})
                  }}>
                    <NavLink to={item.key}>
                      <Icon type={item.icon}/>
                      <span>{item.title}</span>
                    </NavLink>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuState: state.app.menuState,
    isLogin: state.app.isLogin,
    userMenu: state.user.userMenu,
    activeKey: state.app.activeKey,
    appTabs: state.app.appTabs,
  }
}

const mapDispatch = (dispatch) => ({
  setMenuStatus(status) {
    dispatch(appAction.setMenuStatus(status));
  },
  addTabs(tab) {
    dispatch(appAction.addTabs(tab));
  },
  setActiveKey(key) {
    dispatch(appAction.setActiveKey(key))
  }
});

export default connect(mapStateToProps, mapDispatch)(appMenu);
