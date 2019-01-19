import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {withRouter} from "react-router";


import {action as appAction} from '@/store/appStore';
import {action as userAction} from '@/store/userStore';
import {connect} from 'react-redux';
import {message} from 'antd';
import axios from '@/common/axios'


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 2,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class AppHeader extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  toggleCollapsed = () => {
    this.props.setMenuStatus(!this.props.menuState);
  }

  handleMenuClose = (data) => {
    console.log(data)
    if (data === 'logout') {
      this.props.initStore();
      this.props.history.push('/login');
    }
    this.setState({anchorEl: null});
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({mobileMoreAnchorEl: event.currentTarget});
  };

  handleMobileMenuClose = () => {
    this.setState({mobileMoreAnchorEl: null});
  };

  login = ()=>{
    this.props.initStore();
    this.props.history.push('/login');
  }

  render() {
    const {anchorEl, mobileMoreAnchorEl} = this.state;
    const {classes} = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={isMenuOpen}
        onClick={() => {
          this.handleMenuClose()
        }}
      >
        <MenuItem onClick={() => {
          this.handleMenuClose('selfManage')
        }}>个人资料</MenuItem>
        <MenuItem onClick={() => {
          this.handleMenuClose('logout')
        }}>退出登录</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <MailIcon/>
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">

            <NotificationsIcon/>

          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleCollapsed}
              style={{transform: this.props.menuState ? 'rotate(90deg)' : ''}}
              className={classes.menuButton} color="inherit"
              aria-label="Open drawer">
              <MenuIcon/>
            </IconButton>
            {/*<Typography className={classes.title} variant="h6" color="inherit" noWrap>*/}
              {/*React-JS*/}
            {/*</Typography>*/}


            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow}/>

            {
               //this.props.menuState
              this.props.isLogin
                ? <div>
                  <div className={classes.sectionDesktop}>
                    <IconButton color="inherit">
                      <Badge badgeContent={1} color="secondary">
                        <MailIcon/>
                      </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                      <NotificationsIcon/>
                    </IconButton>
                    <IconButton
                      aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={this.handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle/>
                    </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                      <MoreIcon/>
                    </IconButton>
                  </div>
                </div>
                : <Button color="inherit" onClick={this.login}>Login</Button>
            }
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    menuState: state.app.menuState,
    isLogin: state.app.isLogin,
    userMenu: state.user.userMenu,
  }
}

const mapDispatch = (dispatch) => ({
  setMenuStatus(status) {
    dispatch(appAction.setMenuStatus(status));
  },
  initStore(){
    dispatch(appAction.initStore())
    dispatch(userAction.initStore())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatch)(withStyles(styles)(AppHeader)));
