import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Article extends React.Component {

  render () {
    return (
      <div>
        {
          this.props.articleList.map(item => (
            <div className='b-b-e p-b-30' key={item.get('id')}>
              <div className='flex ai-c p-t-20'>
                <div>
                  <div className="fs-20 bold pointer"><Link className='h-b' to='/easybook/detail/1'>{ item.get('title') }</Link></div>
                  <div className="f-auto a-context p-t-10 c-6 lh-p-140 fs-15">{ item.get('content') }</div>
                </div>
                {
                  item.get('img') ? <Link className='f-none inline-block h-100 w-150' to='/easybook/detail/1'><img className='wh-p-100 br-6' src={item.get('img')} alt=""/></Link> : null
                }
              </div>
              <div className="c-9 m-t-10">
                <span className='m-r-10 fs-12'><span> { item.get('author') }</span></span>
                <span className='iconfont m-r-10 fs-12 iconpinglun'><span> { item.get('viewNum') }</span></span>
                <span className='iconfont fs-12 iconlove'><span> { item.get('likeNum') }</span></span>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  articleList: state.get('focus').get('articleList')
});

export default connect(mapState,null)(Article)