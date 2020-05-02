import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header className='f-none'/>
        {this.props.children}
        <Footer className='f-none'/>
      </>
    )
  }
}

export default Layout