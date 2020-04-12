import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Recommend extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      rotate: 40
    }
  }

  changeBatch () {
    this.setState({
      rotate: this.state.rotate + 720
    })
  }

  render () {
    return (
      <div>
        <div className="flex jc-b c-9 fs-15 m-v-20">
          <span>推荐作者</span>
          <span className='pointer' onClick={this.changeBatch.bind(this)}>
            <i ref={(batch) => {this.batch = batch}} style={{transform: 'rotate('+ this.state.rotate +'deg)'}} className='iconfont inline-block fs-14 m-r-6 linear'>&#xe6e1;</i>
            换一批
          </span>
        </div>
        {
          this.props.recommendList.map((item) => {
            return (
              <div className='flex ai-c m-b-20' key={item.get('id')}>
                <img className='m-r-10 br-p-50 wh-48' src={item.get('userUrl')} alt=""/>
                <div className='fs-15 f-auto'>
                  <div className='fs-14'><span>{item.get('nickname')}</span><span className='c-green f-r pointer'>+关注</span></div>
                  <div className='m-t-6 fs-12 c-9'>写了{ item.get('textNum')} 个字 喜欢 { item.get('likeNum')}</div>
                </div>
              </div>
            )
          })
        }
        <div className='bg-e br-6 b-c t-c p-v-10'><Link className='c-9 fs-14' to='/chinaexpressair/author'>查看全部 ></Link></div>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    recommendList: state.get('home').get('recommendList')
  }
};

export default connect(mapState, null)(Recommend)