import React from "react";
// import { Link } from 'react-router-dom'

class Author extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      authorList: []
    };
  }

  render () {
    return (
      <div className="p-t-92 w-960 m-h-a f-auto p-b-20">
        <div className="p-r">
          <img className="w-p-100 h-100" src="/assets/img/title-author.png" alt=""/>
          <div className="r-0 t-0 p-a h-100 lh-100 c-f p-r-20"><i className="iconfont"></i>如何成为签约作者</div>
        </div>
        <div className='m-t-20' style={{width: '990px'}}>
          {
            this.state.authorList.map((item) => (
              <div key={item.id} className='p-r w-300 p-h-12 bg-e t-c p-b-20 bs-bb br-6 m-r-30 d-ib m-t-60'>
                <img className='h-0 m-t--40 p-a m-h-a wh-80 br-p-50' src={item.photo} alt=""/>
                <div className='m-t-60'>{item.name} <i className='iconfont'></i></div>
                <div className='m-t-16 lh-p-140 h-44 o-h'>{item.saying}</div>
                <div className='bg-green c-f w-100 m-h-a m-t-30 p-v-10 br-24 pointer'>+ 关注</div>
                <div className='fs-14 c-9 t-l m-t-16'>最近更新</div>
                { item.article.map((it) => <div key={it.id} className='m-t-20 fs-14 pointer h-b'>{it.title}</div>) }
              </div>
            ))
          }
        </div>
        <div className='t-c br-20 p-v-10 bg-a pointer m-t-20 c-f w-240 m-h-a'>加载更多</div>
      </div>
    )
  }
  componentDidMount() {
    this.$api.authorList().then((data) => {
      console.log(data);
      if (data.code === '0') this.setState({
        authorList: data.data
      })
    }).catch(error => {
      console.log(error);
    })
  }
}

export default Author