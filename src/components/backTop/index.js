import React from "react";

class BackTop extends React.Component{
  state = {
    show: true
  };

  handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  };

  scrollHandle = () => {
    let top = document.documentElement.scrollTop;
    console.log(top);
    this.setState({show: top > 500})
  };

  componentDidMount() {
    // todo 防抖动
    window.addEventListener('scroll', this.scrollHandle)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle)
  }

  render() {
    return this.state.show ? <div className='fixed b-100 r-100 b-e p-v-6 p-h-12 bg-f b-c fs-14 pointer' onClick={this.handleScrollTop}>回到顶部</div> : null
  }
}

export default BackTop