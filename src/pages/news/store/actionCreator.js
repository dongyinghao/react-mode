import { constants } from './index'

export const initSearchHistory = (data) => ({
  type: constants.INITSEARCHHISTORY,
  data
});
export const deleteSearchHistory = (id) => ({
  type: constants.DELETESEARCHHISTORY,
  id
});