import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class SearchHistory extends React.Component {

  componentDidMount() {
    this.$api.querySearchHistory({}).then(({data}) => {
      this.props.initHistory(data)
    });
  }

  render () {
    return (
      <div className='b-t-e m-t-20 fs-14'>
        <div className='c-9 lh-p-240 p-t-10 p-h-16'>
          <span>最近搜索</span>
          <span onClick={ () => { this.props.deleteHistory() } } className='f-r pointer'>清空</span>
        </div>
        <TransitionGroup>
          {
            this.props.searchHistoryList.map(item =>
              <CSSTransition timeout={500} classNames='slideLeft' key={ item.get('id') }>
                <div className='m-t-10 h-bg-e p-v-10 p-h-16'>
                  <i className='iconfont iconhistory m-r-10 fs-16 c-d va-2'/>
                  <span>{ item.get('name') }</span>
                  <i onClick={() => { this.props.deleteHistory(item.get('id')) }}
                     className='iconfont iconclose f-r c-f h-c-3 fs-13 pointer p-4'/>
                </div>
              </CSSTransition>
            )
          }
        </TransitionGroup>
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

export default connect(mapStates, mapDispatch)(SearchHistory)