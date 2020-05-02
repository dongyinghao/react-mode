import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Article extends React.Component {
  render () {
    return (
      <div className='p-b-20'>
        {
          this.props.articleList.map((item) => {
            return (
              <div className='b-b-e p-b-20' key={item.get('id')}>
                <div className='flex ai-c p-t-20'>
                  <div>
                    <div className="fs-20 bold pointer"><Link className='h-b' to='/easybook/detail/1'>{ item.get('title') }</Link></div>
                    <div className="f-auto a-context p-t-10 c-6 lh-p-140 fs-15">{ item.get('content') }</div>
                  </div>
                  {
                    item.get('img') ?
                      <Link className='f-none inline-block h-100 w-150' to='/easybook/detail/1'>
                        <img className='wh-p-100 br-6' src={item.get('img')} alt=""/>
                      </Link> : null
                  }
                </div>
                <div className="c-9 m-t-6">
                  <span className='iconfont m-r-10 fs-12 c-red iconzhuanshi'><span> { item.get('diamontNum') }</span></span>
                  <Link className='m-r-10 fs-12' to='/easybook/user/1'>{ item.get('nickname') }</Link>
                  <span className='iconfont m-r-10 fs-12 iconpinglun'><span> { item.get('commentNum') }</span></span>
                  <span className='iconfont fs-12 iconlove'><span> { item.get('likeNum') }</span></span>
                </div>
              </div>
            )
          })
        }
        {
          this.props.articleList.size ?
          <div className='pointer bg-c p-v-10 ta-c br-20 c-f'>阅读更多</div> : null
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  articleList: state.get('home').get('articleList')
});

export default connect(mapState, null)(Article)