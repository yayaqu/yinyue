import App from '../App'
import Nav0 from '../components/nav'
import Page from '../components/page'
import Detail from '../components/detail'
//const Page = r => require.ensure([], () => r(require('../components/page')), 'page')
export default [{
  path: '/',
  component:App,
  children:[
      {path: '/',redirect: '/foo'},
      {path:'/foo',component:Nav0},
      {path:'/fooi',component:Page},
      {path:'/fooii',component:Detail}
    ]
}]
    


