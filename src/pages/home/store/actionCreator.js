import { constants } from './index'
import apis from '../../../utils/request/apis'

export const init = () => {
  return (dispatch) => {
    apis.home('/api/home.json').then(({data}) => {
      const action = {
        type: constants.DATAINIT,
        ...data
      };
      dispatch(action)
    }).catch(error => {
      console.log(error);
    });
  }
};
