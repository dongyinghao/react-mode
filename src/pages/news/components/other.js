import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SearchType extends React.Component {

  render () {
    const { data, type } = this.props;
    return (
      <div>
        <div className='fs-13'><span>{ data.title }</span><Link className='c-blue f-r' to={ data.url || '' }>查看全部 ></Link></div>
        <div className='flex jc-b ai-c m-t-16'>
          {
            data.list && data.list.map(item =>
              <div className='w-p-32 flex ai-c' key={item.id}>
                <Link to=''>
                  <img className='wh-48' src={item.photo ? item.photo : '/assets/img/defaultPhoto.webp'} alt="头像"/>
                </Link>
                <div className='fs-15 m-l-10'>
                  <h4 className='bold'><Link to=''>{ item.name }</Link></h4>
                  <p className='fs-12 c-9 m-t-6'>
                    {
                      type === 'user' ?
                      `写了 ${item.textNum}  字， ${item.likeNum} 喜欢` :
                      `文章 ${item.textNum}， ${item.likeNum} 关注`
                    }
                  </p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default connect(null,null)(SearchType)