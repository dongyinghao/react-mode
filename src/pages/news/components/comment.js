import React from 'react'
import { connect } from 'react-redux'

class Comment extends React.Component {

  render () {
    return (
      <div className='p-b-20 fadeIn animated'>
        <div className='b-b-e p-b-20 fs-14 bold'>收到的评论</div>
      </div>
    )
  }
}

export default connect(null,null)(Comment)