import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fromJS } from 'immutable'
import { dateFromate } from '@/utils'

class User extends React.Component {
  state = {
    userInfo: {
      nickname: '灵双儿',
      gender: 1,
      focusNum: 54,
      likeNum: 854,
      textNum: 97154,
      fansNum: 3254,
      articleNum: 33,
    },
    currentTab: 1,
    tabList: [
      {
        title: '文章',
        id: 1,
        icon: 'iconarticle'
      },
      {
        title: '动态',
        id: 2,
        icon: 'iconnews'
      },
      {
        title: '最新评论',
        id: 3,
        icon: 'iconcomment'
      },
      {
        title: '热门',
        id: 4,
        icon: 'iconhot'
      }
    ],
    userInfoModal: [
      {
        title: '关注',
        value: 3
      },
      {
        title: '粉丝',
        value: 2541
      },
      {
        title: '文章',
        value: 65
      },
      {
        title: '字数',
        value: 74123
      },
      {
        title: '收获喜欢',
        value: 783
      },
      {
        title: '总资产',
        value: 496
      }
    ],
    articleList: fromJS([
      {
        "id": 1,
        "title": "不知道给男人“找麻烦”，对女人来说，是一种危险的人格",
        "content": "“我不想给他添麻烦。”当你听到一个女人说这样话的时候，可能会觉得她很懂事。 然而我们细细深究就会发现，这样思考的女人，潜意识里都是把自己放在一个...",
        "createTime": '1586617912198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 2,
        "title": "能让男人上瘾一辈子的女人，都有这样的共性",
        "content": "爱情可以说是这个苍茫世界上最纯美、最伟大的存在，就连拿破仑都说“你别看我一心想征服整个世界，可我自己却先被爱情征服了”，由此可见爱情的“威力”。...",
        "createTime": '1586617412198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 3,
        "title": "三个男人说：喜欢一个女人和爱一个女人，是两种不同的感觉",
        "content": "爱和喜欢究竟有没有区别？很多女人都不知道答案，自以为找到了一个真心爱自己的人，殊不知那仅仅只是喜欢，错付了真心，最后徒留悲伤。 喜欢，是每个人轻...",
        "createTime": '1586417412198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 4,
        "title": "在婚姻里，傻女人要房子和彩礼，而聪明的女人只要这3样东西",
        "content": "现在大多数女人结婚，都把房子和彩礼看得很重要，一般像这样的女人大都两种心态。 一种就是什么也不想，就希望未来生活有保障，房子彩礼是前提，而另一种...",
        "createTime": '1585117412198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 5,
        "title": "三个男人说：喜欢一个女人和爱一个女人，是两种不同的感觉",
        "content": "爱和喜欢究竟有没有区别？很多女人都不知道答案，自以为找到了一个真心爱自己的人，殊不知那仅仅只是喜欢，错付了真心，最后徒留悲伤。 喜欢，是每个人轻...",
        "createTime": '1566417412198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      },
      {
        "id": 6,
        "title": "在婚姻里，傻女人要房子和彩礼，而聪明的女人只要这3样东西",
        "content": "现在大多数女人结婚，都把房子和彩礼看得很重要，一般像这样的女人大都两种心态。 一种就是什么也不想，就希望未来生活有保障，房子彩礼是前提，而另一种...",
        "createTime": '1526417412198',
        "viewNum": 28,
        "commentNum": 28,
        "likeNum": 541,
        "diamontNum": 76.8
      }
    ])
  };

  render () {
    return (
      <div className='f-auto m-h-auto flex jc-b w-960 p-t-92'>
        <div className='w-p-66'>
          <div className='flex jc-b ai-c'>
            <div className='flex ai-c'>
              <img className='wh-80 br-p-50' src="https://upload.jianshu.io/users/upload_avatars/11864358/2da1d62e-4f01-4bc5-8b21-40cead8cdf21.jpg" alt=""/>
              <div className='m-l-10'>
                <div className='fs-22 m-b-10'><span className='bold'>{ this.state.userInfo.nickname }</span> <i className='iconfont icongirl c-red fs-18'/></div>
                <ul>
                  {
                    this.state.userInfoModal.map(item => (
                      <li className='inline-block p-h-8 b-r-e fs-14' key={item.title}>
                        <div className=''>{ item.value }</div>
                        <div className='c-b m-t-2'>{ item.title }</div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='p-h-20 p-v-10 inline-block c-green br-20 b-green pointer'>发简信</div>
              <div className='p-h-20 p-v-10 c-f inline-block br-20 bg-green m-l-10 pointer'>+ 关注</div>
            </div>
          </div>
          <ul>
            {
              this.state.tabList.map(item => (
                <li
                  className={'inline-block fs-14 p-h-20 p-v-10 pointer '
                  + (this.state.currentTab === item.id ? 'c-3 b-b-2-3' : 'c-9')}
                  key={item.id}>
                  <i className={'iconfont fs-18 va-2 m-r-6 ' + item.icon}/>
                  <span>{ item.title }</span>
                </li>
              ))
            }
          </ul>
          <div>
            {
              this.state.articleList.map(item => (
                <div className='b-b-e p-b-30' key={item.get('id')}>
                  <div className="fs-20 bold pointer m-t-20"><Link className='h-b' to='/chinaexpressair/detail/1'>{ item.get('title') }</Link></div>
                  <div className='flex'>
                    <div className="f-auto a-context p-t-10 c-9 lh-p-140 fs-15">{ item.get('content') }</div>
                    {
                      item.get('img') ? <Link className='f-none inline-block h-100 w-150' to='/chinaexpressair/detail/1'><img className='wh-p-100 br-6' src={item.get('img')} alt=""/></Link> : null
                    }
                  </div>
                  <div className="c-9 m-t-10">
                    <span className='iconfont m-r-10 fs-12 c-red iconzhuanshi'><span> { item.get('diamontNum') }</span></span>
                    <span className='iconfont m-r-10 fs-12 iconpinglun'><span> { item.get('viewNum') }</span></span>
                    <span className='iconfont m-r-10 fs-12 iconpinglun'><span> { item.get('commentNum') }</span></span>
                    <span className='iconfont fs-12 iconlove'><span> { item.get('likeNum') }</span></span>
                    <span className='fs-12'><span> { dateFromate(item.get('createTime')) }</span></span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-p-32 fs-14'>
          <div className='b-b-e p-b-20'>
            <div className='c-9'>个人介绍</div>
            <div className='lh-p-140 m-t-10'>用文字抚慰心灵，用情感解读世界！感谢关注！</div>
          </div>
          <div className='m-t-20 b-b-e p-b-20'>
            <div className='pointer'><i className="iconfont iconother2 fs-16 va-3 m-r-6" /><span>她关注的专题/文集/连载</span></div>
            <div className='m-t-20 pointer'><i className="iconfont iconlike fs-18 va-3 m-r-6"/><span>她喜欢的文章</span></div>
          </div>
          <div className='m-t-16 b-b-e p-b-20'>
            <div className='c-9'>她的文集</div>
            <div className='m-t-20 pointer'><i className='iconfont iconcopy c-9 fs-18 va-2 m-r-6'/><span className=''>情感必修课</span></div>
          </div>
          <div className='c-b m-t-16'>
            <span className='h-c-3'>加入黑名单 </span>
            · <span className='h-c-3'>举报用户</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,null)(withRouter(User))