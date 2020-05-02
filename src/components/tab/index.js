import React from "react";
import { TabWrap } from "./style";

export default (props) => {
  const { tabList, currentTab, tabChange } = props;
  return (
    <ul>
      {
        tabList.map(item => (
          <TabWrap
            onClick={() => {tabChange(item.id)}}
            className={'inline-block fs-14 p-h-20 p-v-10 pointer h-c-3 '
            + (currentTab === item.id ? 'c-3 b-b-2-6' : 'c-9 b-b-2-f')}
            key={item.id}>
            <i className={'iconfont fs-18 va-2 m-r-6 ' + item.icon}/>
            <span>{ item.title }</span>
          </TabWrap>
        ))
      }
    </ul>
  )
};