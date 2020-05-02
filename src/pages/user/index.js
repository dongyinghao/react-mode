import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ArticleList from './components/article'
import Tab from '@/components/tab'
import {actionCreator} from "../user/store";

class User extends React.Component {
  state = {
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
        key: 'focusNum'
      },
      {
        title: '粉丝',
        key: 'fansNum'
      },
      {
        title: '文章',
        key: 'articleNum'
      },
      {
        title: '字数',
        key: 'textNum'
      },
      {
        title: '收获喜欢',
        key: 'likeNum'
      },
      {
        title: '总资产',
        key: 'assetNum'
      }
    ]
  };

  tabChange = (id) => {
    this.setState({
      currentTab: id
    })
  };

  render () {
    const { userInfo } = this.props;
    const { userInfoModal, tabList, currentTab } = this.state;
    return (
      <div className='f-auto m-h-auto flex jc-b w-960 p-t-92'>
        <div className='w-p-66'>
          <div className='flex jc-b ai-c'>
            <div className='flex ai-c'>
              <img className='wh-80 br-p-50' src="https://upload.jianshu.io/users/upload_avatars/11864358/2da1d62e-4f01-4bc5-8b21-40cead8cdf21.jpg" alt=""/>
              <div className='m-l-10'>
                <div className='fs-22 m-b-10'><span className='bold'>{ userInfo.get('nickname') }</span> <i className='iconfont icongirl c-red fs-18'/></div>
                <ul>
                  {
                    userInfoModal.map(item => (
                      <li className='inline-block p-h-8 b-r-e fs-14' key={item.title}>
                        <div className=''>{ userInfo.get(item.key) }</div>
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
          <Tab tabList={ tabList } currentTab={currentTab} tabChange={this.tabChange}/>
          <ArticleList />
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

  componentDidMount() {
    this.props.dataInit()
  }
}
const mapState = (state) => ({
  userInfo: state.get('user').get('userInfo')
});

const mapDispatch = (dispatch) => ({
  dataInit () {
    dispatch(actionCreator.init())
  }
});

export default connect(mapState, mapDispatch)(withRouter(User))