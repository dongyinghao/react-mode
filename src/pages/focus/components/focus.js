import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Tab from '@/components/tab'

class Focus extends React.Component {
  state = {
    currentTab: 1,
    tabList: [
      {
        title: '全部推荐',
        id: 1
      },
      {
        title: '推荐作者',
        id: 2,
        icon: 'iconuser'
      },
      {
        title: '推荐专题',
        id: 3,
        icon: 'iconother'
      }
    ]
  };

  tabChange = (id) => {
    this.setState({
      currentTab: id
    })
  };

  render () {
    const { tabList, currentTab } = this.state;
    return (
      <div>
        <Tab tabList={ tabList } currentTab={currentTab} tabChange={this.tabChange}/>
        <div>
          {
            this.props.recommendList.map(item => (
              <div className='flex jc-b p-t-20 b-t-e p-b-20' key={item.get('id')}>
                <div className='flex'>
                  <img className='wh-48 br-p-50 m-r-10' src={item.get('avatar')} alt=""/>
                  <div className='m-t-6'>
                    <div className='fs-15'>{item.get('nickname')}</div>
                    <div className='m-t-6 fs-12 c-b'>{item.get('motto')}</div>
                    <div className='m-t-6 fs-12 c-b'>
                      {
                        item.get('article').map((it,i) => (
                          <span key={i}>{i}<i className='iconfont iconarticle va-1'/><Link className='c-b m-r-10' to='/easybook/detail/1'>{it}</Link></span>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <button className='bg-green br-30 pointer c-f p-h-30 p-v-6'>+ 关注</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
const mapState = (state) => ({
  recommendList: state.get('focus').get('recommendList')
});

export default connect(mapState,null)(Focus)