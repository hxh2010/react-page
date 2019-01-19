import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/login'
import Layout from '../components/layout/layout'
import Error from '../pages/other/error/error'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import BeforeRouter from './beforeRouter'


export default class ERouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <BeforeRouter path="/" render={() => {
              return (
                <Layout>
                  <TransitionGroup>
                    <CSSTransition
                      classNames="fade"
                      timeout={300}
                    >
                      <Switch>
                        <Route
                          exact path='/'
                          component={require('../pages/index/index').default}/>
                        <Route
                          exact path='/index'
                          component={require('../pages/index/index').default}/>
                        <Route
                          exact path='/other/mOne'
                          component={require('../pages/other/mOne/mOne').default}/>
                        <Route
                          exact path='/other/mTwo'
                          component={require('../pages/other/mTwo/mTwo').default}/>
                        <Route
                          exact path='/other/mThree'
                          component={require('../pages/other/mThree/mThree').default}/>
                        <Route
                          exact path="/manage/selfManage"
                          component={require('../pages/manage/selfManage/selfManage').default}/>
                        <Route
                          exact path='/manage/roleManage'
                          component={require('../pages/manage/roleManage/roleManage').default}/>
                        <Route
                          exact path='/manage/authorityManage'
                          component={require('../pages/manage/authorityManage/authorityManage').default}/>
                        {/*<Redirect to="/index"/>*/}
                        <Route component={Error}/>
                      </Switch>

                    </CSSTransition>
                  </TransitionGroup>
                </Layout>
              )
            }}/>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
