import { constants } from './index'
import apis from '@/utils/request/apis'

export const init = () => {
  return (dispatch) => {
    apis.user().then(({data}) => {
      const action = {
        type: constants.DATAINIT_USER,
        ...data
      };
      dispatch(action)
    }).catch(error => {
      console.log(error);
    });
  }
};
