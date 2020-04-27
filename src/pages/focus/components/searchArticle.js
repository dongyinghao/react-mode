import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SearchArticle extends React.Component {

  render () {
    return (
      <div className='m-t-30 p-b-20 fadeIn animated'>
        {
          this.props.list.map( item =>
            <div className='m-t-30' key={item.id}>
              <div className='lh-26 fs-14'>
                <Link to=''><img className='wh-26 br-p-50 f-l m-r-10' src={item.photo} alt=""/></Link>
                <Link to=''>{ item.author }</Link>
                <span className='c-9 m-l-10'>{ item.createDate }</span>
              </div>
              <div className='fs-18 bold m-v-10 pointer'><Link className='h-b' to='/chinaexpressair/detail'>{ item.title }</Link></div>
              <div className='lh-p-140 fs-14 c-9'>{ item.content }</div>
              <div className='fs-14 c-9 m-t-10'>
                <i className='iconfont iconpinglun fs-14'/> {item.commentNum}
                <i className='iconfont iconpinglun m-l-10 fs-14'/> {item.viewNum}
                <i className='iconfont iconlove m-l-10 fs-14'/> {item.likeNum}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(null,null)(SearchArticle)