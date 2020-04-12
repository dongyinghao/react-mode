import React from 'react'
import { connect } from 'react-redux'

class SearchType extends React.Component {

  render () {
    const { typeChangeHandle, currentType } = this.props;
    return (
      <div>
        {
          this.props.list.map(item =>
            <div onClick={() => { typeChangeHandle(item) }}
                 key={item.id}
                 className={ 'h-bg-e p-h-16 p-v-6 lh-32 br-6 transition ' + (String(currentType) === item.id ? 'bg-e' : '') }>
              <span>{ item.name }</span>
              <div className='f-l bg-a br-6 wh-32 t-c m-r-20'>
                <i className={'c-f iconfont fs-18 ' + item.icon}/>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(null,null)(SearchType)