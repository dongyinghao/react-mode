import React from 'react';
import { GlobalStyle } from './assets/css/commonStyle'
import { Iconfont } from './assets/iconfont/iconfont'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Layout from './pages/layout'
import Login from './pages/basic/login'
import Register from './pages/basic/register'
import Author from './pages/author'
import PageNotFound from './pages/404'
import Detail from './pages/detail/loadable'

function App() {
  return (
    <div className="App h-p-100">
      <Iconfont/>
      <GlobalStyle/>
      <Provider store={store}>
        <div className='flex fd-c h-p-100'>
          <BrowserRouter>
            <Switch>
              <Route path='/register' exact component={ Register }/>
              <Route path='/login' exact component={ Login }/>
              <Route path='/chinaexpressair' render={() => (
                <Layout>
                  <Route path='/chinaexpressair' exact component={ Home }></Route>
                  <Route path='/chinaexpressair/detail' exact component={ Detail }></Route>
                  <Route path='/chinaexpressair/author' exact component={ Author }></Route>
                </Layout>
              )}></Route>
              <Redirect from="/" exact to="/chinaexpressair" />
              <Route exact component={ PageNotFound }/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
