import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Detail extends React.Component {
  render () {
    return (
      <div className='flex ai-c jc-c f-auto fs-30'>
        写文章
      </div>
    )
  }
}

export default connect(null,null)(withRouter(Detail))