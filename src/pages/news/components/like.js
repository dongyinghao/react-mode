import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'

class Like extends React.Component {

  render () {
    return (
      <div className='p-b-20 fadeIn animated'>
        <div className='b-b-e p-b-20 fs-14 bold'>收到的喜欢和赞</div>
      </div>
    )
  }
}

const mapStates = (state) => ({
  searchHistoryList: state.getIn(['search', 'searchHistoryList'])
});

const mapDispatch = (dispatch) => ({
  deleteHistory (id) {
    dispatch(actions.deleteSearchHistory(id))
  },
  initHistory (data) {
    dispatch(actions.initSearchHistory(data))
  }
});

export default connect(mapStates, mapDispatch)(Like)