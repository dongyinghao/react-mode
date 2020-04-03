import React from "react";
import ReactDOM from "react-dom"
import { ToastWrap } from "./style"
import { CSSTransition } from "react-transition-group"

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastShow: false,
      timeout: 300,
      duration: 2000,
      content: '',
      notices: [
        {
          key: '0',
          content: '这是一个toast',
          duration: 2000,
          onClose: () => {
            console.log('关闭')
          }
        }
      ]
    };
    this.destroy = this.destroy.bind(this)
  }
  static implantToBody (content) {
    const div = document.createElement('div');
    div.setAttribute('id', 'toast');
    document.body.appendChild(div);
    const _this = ReactDOM.render(<Notification/>, div);
    _this.setState({content});
  };

  componentDidMount() {
    this.setState({toastShow: true});
    this.close = setTimeout(() => {
      this.destroy()
    }, this.state.duration)
  }

  destroy() {
    clearTimeout(this.close);
    this.setState({toastShow: false});
    setTimeout(() => {
      const toast = document.getElementById('toast');
      ReactDOM.unmountComponentAtNode(toast);
      document.body.removeChild(toast);
    }, this.state.timeout)
  }

  render() {
    return (
      <ToastWrap>
        <CSSTransition classNames='slide' timeout={this.state.timeout} in={this.state.toastShow}>
          <div className='content' onClick={this.destroy}>{ this.state.content }</div>
        </CSSTransition>
      </ToastWrap>
    )
  }
}

export default Notification