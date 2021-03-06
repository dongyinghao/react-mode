import React from 'react'
import { withRouter } from 'react-router-dom'
import { fromJS } from 'immutable'
import * as Child from "./components"
import { Route, Switch } from 'react-router-dom'

class Search extends React.Component {

  componentDidMount() {

  }

  state = {
    currentTab: 1,
    tabList: [
      {
        title: '评论',
        id: 1,
        icon: 'suggest'
      },
      {
        title: '简信',
        id: 2,
        icon: 'email'
      },
      {
        title: '投诉请求',
        id: 3,
        icon: 'update'
      },
      {
        title: '喜欢和赞',
        id: 4,
        icon: 'like'
      },
      {
        title: '关注',
        id: 5,
        icon: 'onfocus'
      },
      {
        title: '其他提醒',
        id: 6,
        icon: 'omit'
      }
    ],
    articleList: fromJS([
      {
        "id": 1,
        "title": "不知道给男人“找麻烦”，是一种危险的人格",
        "content": "“我不想给他添麻烦。”当你听到一个女人说这样话的时候，可能会觉得她很懂事。 然而我们细细深究就会发现，这样思考的女人，潜意识里都是把自己放在一个...",
        "createTime": '1586617912198',
        "author": "反正是个狗子",
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586973761995&di=fb7af61e0374cfcfad18cf1fff3bf759&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F59ba2f1f9e0fa.jpg",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 2,
        "title": "能让男人上瘾一辈子的女人",
        "content": "爱情可以说是这个苍茫世界上最纯美、最伟大的存在，就连拿破仑都说“你别看我一心想征服整个世界，可我自己却先被爱情征服了”，由此可见爱情的“威力”。...",
        "createTime": '1586617412198',
        "author": "反正是个狗子",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 3,
        "title": "喜欢一个女人和爱一个女人，是两种不同的感觉",
        "content": "爱和喜欢究竟有没有区别？很多女人都不知道答案，自以为找到了一个真心爱自己的人，殊不知那仅仅只是喜欢，错付了真心，最后徒留悲伤。 喜欢，是每个人轻...",
        "createTime": '1586417412198',
        "author": "反正是个狗子",
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586973653346&di=c864923d90c9d67dfd881dc85685373a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2F0f8307fe3de6468d8b51c53b276e9e1b.jpeg",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 4,
        "title": "在婚姻里，傻女人要房子和彩礼，而聪明的女人只要这3样东西",
        "content": "现在大多数女人结婚，都把房子和彩礼看得很重要，一般像这样的女人大都两种心态。 一种就是什么也不想，就希望未来生活有保障，房子彩礼是前提，而另一种...",
        "createTime": '1585117412198',
        "author": "反正是个狗子",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 5,
        "title": "三个男人说：喜欢一个女人和爱一个女人，是两种不同的感觉",
        "content": "爱和喜欢究竟有没有区别？很多女人都不知道答案，自以为找到了一个真心爱自己的人，殊不知那仅仅只是喜欢，错付了真心，最后徒留悲伤。 喜欢，是每个人轻...",
        "createTime": '1566417412198',
        "author": "反正是个狗子",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 6,
        "title": "在婚姻里，傻女人要房子和彩礼，而聪明的女人只要这3样东西",
        "content": "现在大多数女人结婚，都把房子和彩礼看得很重要，一般像这样的女人大都两种心态。 一种就是什么也不想，就希望未来生活有保障，房子彩礼是前提，而另一种...",
        "createTime": '1526417412198',
        "author": "反正是个狗子",
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      }
    ])
  };

  tabHandle = (data) => {
    this.props.history.push({pathname: '/easybook/news/' + data.icon});
    this.setState({
      currentTab: data.id
    })
  };

  render () {
    const { currentTab, tabList } = this.state;
    return (
      <div className='w-960 m-h-auto f-auto p-t-92'>
        <div className="f-l w-p-32 h-p-100 p-h-20 border-box">
          <div className='c-red'>
            {
              tabList.map(item => (
                <div
                  key={item.id}
                  onClick={() => {this.tabHandle(item)}}
                  className={'p-v-14 p-h-20 br-6 h-bg-e' + (currentTab === item.id ? ' bg-e' : '')}>
                  <i className={'iconfont m-r-10 fs-22 va-3 icon' + item.icon} /><span className='c-3 fs-15'>{ item.title }</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-p-66 f-r">
          <Switch>
            <Route path='/easybook/news' exact component={Child['Comment']} />
            <Route path='/easybook/news/suggest' exact component={Child['Comment']} />
            <Route path='/easybook/news/email' exact component={Child['Email']} />
            <Route path='/easybook/news/like' exact component={Child['Like']} />
            <Route path='/easybook/news/update' exact component={Child['Write']} />
            <Route path='/easybook/news/onfocus' exact component={Child['Focus']} />
            <Route path='/easybook/news/omit' exact component={Child['Other']} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)