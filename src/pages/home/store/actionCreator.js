import { constants } from './index'
import apis from '@/utils/request/apis'

export const init = () => {
  return (dispatch) => {
    apis.home().then(({data}) => {
      const action = {
        type: constants.DATAINIT_HOME,
        ...data
      };
      dispatch(action)
    }).catch(error => {
      console.log(error);
    });
  }
};
