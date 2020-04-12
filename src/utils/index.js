const timepointConfig = [
  {
    step: 60,
    value: 60,
    tip: '分钟前'
  },
  {
    step: 3600,
    value: 24,
    tip: '小时前'
  },
  {
    step: 3600 * 24,
    value: 30,
    tip: '天前'
  },
  {
    step: 3600 * 24 * 30,
    value: 12,
    tip: '个月前'
  },
  {
    step: 3600 * 24 * 30 * 12,
    value: 100,
    tip: '年前'
  }
];

// 人性化时间转化
export const dateFromate = (timestamp) => {
  const time = Number(timestamp);
  if (isNaN(time)) return '非法时间戳';
  let dateTip = '';
  const currentTimestamp = new Date().getTime();
  const diffTime = (currentTimestamp - timestamp) / 1000;
  for (let i = 0; i < timepointConfig.length; i ++) {
    let config = timepointConfig[i];
    if (diffTime < config.value * config.step) {
      const n = Math.floor(diffTime / config.step);
      dateTip = n + ' ' + config.tip;
      break;
    }
  }
  return dateTip
};

// 获取url查询参数
export const searchToParams = (search) => { // search形如：'?name=test&age=26&sex=25'
  let query = '';
  let data = {};
  if (search.indexOf('?') === 0) query = query.substring(1);
  const array = query.split('&');
  array.forEach(item => {
    const itemarray = item.split('=');
    data[itemarray[0]] = itemarray[1]
  });
  return data
};

// 数字分隔符(各位开始，每三位添加逗号隔开)
// 入参形如：'1234567890.4587'
export const numberFormat = (num) => {
  return num.toString().replace(/\d+/, function(n){ // 先提取整数部分
    // 正则：匹配一个数字，该数字需要满足“其后面跟随3的倍数个数字至结尾”
    // 例如7891234567890可以匹配到数字(从左到右)7、1、4、7
    return n.replace(/(\d)(?=(\d{3})+$)/g, $1 => $1+",");
  })
};