import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header className='f-none'/>
        {this.props.children}
        <Footer className='f-none'/>
      </React.Fragment>
    )
  }
}

export default Layout