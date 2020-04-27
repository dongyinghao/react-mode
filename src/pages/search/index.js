import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Child from "./components"
import { CSSTransition } from 'react-transition-group'

class Search extends React.Component {

  componentDidMount() {
    // const search = window.location.search.substring(1).split('=');
    // const query = {[search[0]]: search[1]};
    this.$api.querySearch({}).then(res => {
      if (res.code === '0') {
        this.setState({
          articleList: res.data.articleList,
          relatedUserList: res.data.relatedUserList,
          relatedSubjectList: res.data.relatedSubjectList
        })
      }
    })
  }

  state = {
    currentType: '1',
    searchTypeList: [
      {
        id: '1', //1:文章、2:用户、3:文集、4:专题
        name: '文章',
        icon: 'iconarticle'
      },
      {
        id: '2',
        name: '用户',
        icon: 'iconuser'
      },
      {
        id: '3',
        name: '专题',
        icon: 'iconother'
      },
      {
        id: '4',
        name: '文集',
        icon: 'iconcopy'
      }
    ],
    relatedUserList: {},
    relatedSubjectList: {},
    filterDateShow: false,
    currentFilterDate: 1,
    filterDate: [
      {
        id: 1,
        name: '时间不限'
      },
      {
        id: 2,
        name: '最近三月'
      },
      {
        id: 3,
        name: '最近一周'
      },
      {
        id: 4,
        name: '最近一天'
      }
    ],
    articleList: []
  };

  typeChangeHandle = (item) => {
    this.setState({currentType: item.id})
  };

  dateChangeHandle = (id) => {
    this.setState({
      filterDateShow: false,
      currentFilterDate: id
    })
  };

  filterDateToggle = () => {
    this.setState({filterDateShow: !this.state.filterDateShow})
  };

  render () {
    const { currentType, articleList, filterDate, currentFilterDate, filterDateShow, relatedSubjectList, relatedUserList, searchTypeList } = this.state;
    return (
      <div className='f-auto p-t-92 w-960 m-h-auto animated slideInRight'>
        <div className="f-l w-p-32">
          <Child.SearchType
            currentType={currentType}
            list={searchTypeList}
            typeChangeHandle={this.typeChangeHandle} />
          <Child.SearchHistory />
        </div>
        <div className="w-p-66 f-r">
          <div className='p-h-16 p-v-20 bg-e'>
            <Child.SearchRelated
              data={relatedUserList}
              type='user'/>
            <div className='b-t-d m-t-20 p-t-20'>
              <Child.SearchRelated data={relatedSubjectList}/>
            </div>
          </div>
          <div className='fs-14 c-9 m-t-20'>
            <span className='c-3'>综合排序</span>
            <span className='h-c-3'> • 热门文章</span>
            <span className='h-c-3'> • 最新发布</span>
            <span className='h-c-3'> • 最新评论 </span>
            <div className='relative inline-block'>
                <span onClick={this.filterDateToggle} className='pointer'>
                | {filterDate.filter(it => it.id === currentFilterDate)[0].name}
                  <i className={"iconfont inline-block icondown va-3 transition " + (filterDateShow ? 'deg180' : '')}/></span>
              <CSSTransition
                in={filterDateShow}
                timeout={300}
                classNames='fade'
                unmountOnExit
                appear={true}
              >
                <ul className={'absolute fs-13 ta-c bg-f shadow lh-p-240 t-28 l-2 w-86'}>
                  {
                    this.state.filterDate.map(item =>
                      <li key={item.id} onClick={() => {this.dateChangeHandle(item.id)}}
                          className={'p-h-8 h-bg-e ' + (currentFilterDate === item.id ? 'bg-e' : '')}
                      >{ item.name }</li>
                    )
                  }
                </ul>
              </CSSTransition>
            </div>
            <span className='f-r'>5624 个结果</span>
          </div>
          <Child.SearchArticle list={articleList}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)