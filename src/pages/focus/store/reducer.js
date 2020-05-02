import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  articleList: [],
  recommendList: [
    {
      "avatar": "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg",
      "nickname": "董克平日记",
      "motto": "喜食好色的一枚无业游民",
      "article": ['吃了素食，看了周刊', '追光的光之画师...'],
      "id": 1,
    },
    {
      "avatar": "https://upload.jianshu.io/users/upload_avatars/4287007/b7b9c810-069e-4385-aec7-1823e94ee43d.jpg",
      "nickname": "王小麦",
      "motto": "在读文学博士，大学老师。微信号：hwangyahui 版权合作...",
      "article": ['协作的习惯', '那年那月...'],
      "id": 2,
    }
  ]
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.DATAINIT_FOCUS:
      return state.merge({
        articleList: fromJS(action.articleList)
      });
    default:
      return state
  }
};