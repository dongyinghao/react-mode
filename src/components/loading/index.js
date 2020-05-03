import React from "react";
import ReactDOM from "react-dom"
import { LoadingWrap } from "./style"

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastShow: false,
      content: ''
    };
  }
  static implantToBody (content) {
    const div = document.createElement('div');
    div.setAttribute('id', 'Loading');
    document.body.appendChild(div);
    ReactDOM.render(<Loading ref={container => container&&container.setState({content})}/>, div);
  };
  static removeFromBody () {
    const loading = document.getElementById('Loading');
    document.body.removeChild(loading);
  };

  render() {
    return (
      <LoadingWrap>
        <img src="/assets/img/loading.gif" alt=""/>
      </LoadingWrap>
    )
  }
}

export default Loading