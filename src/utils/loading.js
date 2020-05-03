import Loading from '../components/loading'

export default {
  show () {
    Loading.implantToBody('加载中')
  },
  close () {
    Loading.removeFromBody()
  }
}