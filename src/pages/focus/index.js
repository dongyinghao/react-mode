import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import OnFocus from "./components/focus"
import Program from "./components/program"
import Read from "./components/read"
import { actionCreator } from "../user/store";
import { Route, Switch } from 'react-router-dom'

class Focus extends React.Component {
  state = {
    currentType: 1,
    typeList: [
      {
        title: '添加关注',
        id: 1,
        link: '/easybook/focus'
      },
      {
        title: '读书',
        id: 2,
        avatar: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg',
        link: '/easybook/focus/read'
      },
      {
        title: '程序员',
        id: 3,
        avatar: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg',
        link: '/easybook/focus/program'
      }
    ]
  };

  typeChange = (data) => {
    this.props.history.push({pathname: data.link});
    this.setState({
      currentType: data.id
    })
  };

  render () {
    const { typeList, currentType } = this.state;
    return (
      <div className='w-960 m-h-auto f-auto p-t-92'>
        <div className="f-l w-p-32 b-r-e h-p-100">
          <div>
            <div className='b-b-e p-v-10 pointer'>只看专题 <i className='iconfont icondown-fill c-b'/></div>
            {
              typeList.map(item => (
                <div onClick={() => {this.typeChange(item)}} key={item.id} className={'h-bg-e p-10 br-6 ' + (currentType === item.id ? 'bg-e' : null)}>
                  {
                    item.avatar ?
                      <img className='wh-40 m-r-10 va-m br-6' src={item.avatar} alt=""/> :
                      <i className='iconfont iconaddUser bg-blue inline-block wh-40 br-p-50 c-f fs-24 ta-c m-r-10 lh-40'/>
                  }
                { item.title }</div>
              ))
            }
          </div>
        </div>
        <div className="w-p-66 f-r">
          <Switch>
            <Route path={'/easybook/focus/read'} exact component={Read}/>
            <Route path={'/easybook/focus/program'} exact component={Program}/>
            <Route path={'/easybook/focus'} component={OnFocus}/>
          </Switch>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.dataInit()
  }
}

const mapDispatch = (dispatch) => ({
  dataInit () {
    dispatch(actionCreator.init())
  }
});
export default connect(null, mapDispatch)(withRouter(Focus))