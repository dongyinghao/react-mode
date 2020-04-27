import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './pages/home'
import Layout from './pages/layout'
import Login from './pages/basic/login'
import Register from './pages/basic/register'
import Author from './pages/author/loadable'
import PageNotFound from './pages/404/loadable'
import Search from './pages/search/loadable'
import Detail from './pages/detail/loadable'
import Write from './pages/write/loadable'
import User from './pages/user/loadable'
import Focus from './pages/focus/loadable'
import News from './pages/news/loadable'

class App extends React.Component {

  routeTest = (c, from) => this.props.token ? c : <Redirect to={{pathname: '/login', state: {from}}} />;

  render() {
    return (
      <div className="App h-p-100">
        <div className='flex fd-c h-p-100'>
          <BrowserRouter>
            <Switch>
              <Route path='/register' exact component={ Register }/>
              <Route path='/login' exact component={ Login }/>
              <Route path='/write' exact render={() => this.routeTest(<Write/>, '/write')}/>
              <Route path='/chinaexpressair' render={() => (
                <Layout>
                  <Route path='/chinaexpressair' exact component={ Home }/>
                  <Route path='/chinaexpressair/detail/:id' exact component={ Detail }/>
                  <Route path='/chinaexpressair/author' exact component={ Author }/>
                  <Route path='/chinaexpressair/search' exact component={ Search }/>
                  <Route path='/chinaexpressair/user/:id' exact component={ User }/>
                  <Route path='/chinaexpressair/focus' exact component={ Focus }/>
                  <Route path='/chinaexpressair/news' exact component={ News }/>
                </Layout>
              )}/>
              <Redirect from="/" exact to="/chinaexpressair" />
              <Route exact component={ PageNotFound }/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  token: state.getIn(['basic', 'token'])
});

export default connect(mapState, null)(App);