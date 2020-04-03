import * as constants from './constants'

export const onFocus = () => {
  return {
    type: constants.ONFOCUS
  }
};
export const onBlur = () => {
  return {
    type: constants.ONBLUR
  }
};
export const updateList = (data) => {
  return {
    type: constants.UPDATELIST,
    data
  }
};
export const queryData = () => {
  return (dispatch) => {
    dispatch(updateList('somevalue'))
  }
};