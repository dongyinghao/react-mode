import React from 'react'
import { connect } from 'react-redux'

class Write extends React.Component {

  render () {
    return (
      <div className='p-b-20 fadeIn animated'>
        <div className='p-b-20 fs-14 bold'>全部投稿请求</div>
      </div>
    )
  }
}

export default connect(null,null)(Write)