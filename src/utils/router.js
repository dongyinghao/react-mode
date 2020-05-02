import Home from '@/pages/home'
import Layout from '@/pages/layout'
import Login from '@/pages/basic/login'
import Register from '@/pages/basic/register'
import Author from '@/pages/author/loadable'
import PageNotFound from '@/pages/404/loadable'
import Search from '@/pages/search/loadable'
import Write from '@/pages/write/loadable'
import Detail from '@/pages/detail/loadable'


export default [
  { path: "/register", name: "register", exact: true, component: Register },
  { path: "/login", name: "login", exact: true, component: Login },
  { path: "/write", name: "write", exact: true, component: Write, auth: true },
  {
    path: "/easybook",
    name: "layout",
    component: Layout,
    children: [
      { path: "/easybook", name: "home", exact: true, component: Home },
      { path: "/easybook/detail/:id", name: "detail", exact: true, component: Detail },
      { path: "/easybook/search", name: "search", exact: true, component: Search },
      { path: "/easybook/author", name: "author", exact: true, component: Author },
      { path: "/easybook/*", redirect: '/pagenotfound' },
    ]
  },
  { path: "/", exact: true, redirect: '/easybook' },
  { path: "/*", name: "pageNotFound", component: PageNotFound }
]