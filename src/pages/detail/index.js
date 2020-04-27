import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Detail extends React.Component {
  render () {
    return (
      <div className='f-auto bg-e p-b-20 p-t-72 animated slideInRight'>
        <div className='m-h-auto flex jc-b p-t-10 w-960'>
          <div className='fixed w-960 h-0 m-h-auto'>
            <div className='absolute l--60 ta-c c-9 fs-14 t-140'>
              <div className='wh-48 br-p-50 bg-f lh-48 pointer h-c-3'>
                <i className='iconfont iconzan fs-18'/>
              </div>
              <p className='m-t-6'>28</p>
              <div className='wh-48 lh-48 br-p-50 bg-f m-t-10 pointer h-c-3'>
                <i className='iconfont iconreward fs-30'/>
              </div>
              <p className='m-t-6'>赞赏</p>
            </div>
          </div>
          <div className='w-p-66 hidden bg-f p-h-16 border-box p-v-30'>
            <h3 className='fs-30'>纯洁的男女关系</h3>
            <div className='flex ai-c m-t-16'>
              <img className='br-p-50 wh-48' src="https://upload.jianshu.io/users/upload_avatars/10232737/d8ae0091-ebb2-44af-8e26-2deaea4765d2.jpg" alt=""/>
              <div className='m-l-10'>
                <div>
                  <span>金错刀</span>
                  <span className='fs-14 c-red b-red p-v-2 p-h-12 br-15 m-l-10 pointer'>关注</span>
                </div>
                <div className='c-9 fs-14 m-t-10'><span className='c-red'><i className='iconfont fs-14'>&#xe61f;</i>186</span> 2020.02.12 10:54:35 字数： 523 阅读： 2541</div>
              </div>
            </div>
            <div className='lh-p-240 m-t-16 c-6'>
              <p>深夜，一对年轻男女来到一家宾馆。</p>
              <p>"开两个单间！”男的拿着身份证说。</p><p>“不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。</p>
              <p>男的看了一眼女的，女的叹了口气：“唉！跑了好几家宾馆，都住满了。”</p>
              <p>“没办法，现在是旅游旺季，咱们又没有提前预订。”男的说。</p>
              <p>“你们还要不要这个标准间？”前台小姐抬起头来问道。</p>
              <p>男的迟疑了一下，说了声要。女的没吭声。</p>
              <p>进了房间，男的哈欠连天，坐在床上，笑嘻嘻地看着女的：“你不怕我半夜爬你床上？”</p>
              <p>女的狠狠地说：“你这个禽兽敢爬上来，我就一脚踹下去！”</p>
              <p>男的笑了笑，倒头就睡，不一会儿鼾声如雷。女的在另一张床上，翻来覆去地睡不着。</p>
              <p>一夜平安无事。</p>
              <p>第二天早上，男的伸了个懒腰，说：“昨晚睡了个好觉，做了个好梦。”</p>
              <p>女的恨恨地说：“你睡好了，我却被你的呼噜声吵得一夜没睡好。”</p>
              <p>“实在是不好意思！”男的笑着说：“昨晚太累了，我担心你对我图谋不轨，所以开玩笑说要爬你床上，你一拒绝，我就放心睡了。”</p>
              <p>女的气急败坏：“你既阴险又龌龊，简直禽兽不如！”</p>
              <p>男的哈哈大笑：“咱们虽然是孤男寡女共处一室，但毕竟保持了纯洁的男女关系。你又不是不知道，单位不允许同事间谈恋爱，一旦发现直接开除。这次出差，我也是严防死守，不敢有丝毫懈怠啊！”</p>
              <p>女的说：“那你也不能拿我开涮啊！害得我一夜无眠。今天的早餐你必须请客，我一熬夜，皮肤就不好了。”</p>
              <p>男的起身向门口走去：“可以啊！不过你忘了，这家宾馆是免费提供早餐的。哈哈…”</p>
              <p>女的追了出去：“好你个欧也妮•葛朗台！赔我的青春损失费。”</p>
            </div>
            <div className='flex jc-b c-9 fs-14 m-t-30'>
              <div className='flex ai-c'>
                <span className='wh-32 b-c br-p-50 flex ai-c jc-c m-r-10 pointer'><i className='iconfont fs-16 iconzan' /></span>
                人点赞 >
                <span className='m-l-10 wh-32 b-c br-p-50 flex ai-c jc-c pointer'><i className='iconfont fs-16 iconcai' /></span>
              </div>
              <div className='flex ai-c'><i className='iconfont m-r-10 va-3 pointer iconnote' /> 自嗨 <i className='iconfont iconomit m-l-10 b-c ta-c fs-14 wh-32 br-p-50 pointer lh-32'/></div>
            </div>
          </div>
          <div className='w-p-32'>
            <div className='bg-f p-16'>
              <div className='flex ai-c b-b-e p-b-10'>
                <img className='br-p-50 wh-48' src="https://upload.jianshu.io/users/upload_avatars/10232737/d8ae0091-ebb2-44af-8e26-2deaea4765d2.jpg" alt=""/>
                <div className='m-l-10 fs-14'>
                  <div className="flex jc-b f-auto ai-c">
                    <span>金错刀</span>
                    <span className='fs-14 c-red b-red p-v-2 p-h-8 br-15 pointer'>关注</span>
                  </div>
                  <div className='c-9 m-t-6'>总资产7,542(约52.4元)</div>
                </div>
              </div>
              <div className='fs-14 bg-f'>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>第一次品尝到爆文的滋味</Link></div>
                  <div className='m-t-10 c-9'>阅读 19,378</div>
                </div>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>日更，如履薄冰</Link></div>
                  <div className='m-t-10 c-9'>阅读 9,378</div>
                </div>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>你常挂在嘴上的话，终将会成为你的人生</Link></div>
                  <div className='m-t-10 c-9'>阅读 24</div>
                </div>
              </div>
            </div>
            <div className='bg-f p-16 m-t-10'>
              <div className='b-l-4-red p-l-6'>推荐阅读</div>
              <div className='fs-14 bg-f'>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>第一次品尝到爆文的滋味</Link></div>
                  <div className='m-t-10 c-9'>阅读 19,378</div>
                </div>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>日更，如履薄冰</Link></div>
                  <div className='m-t-10 c-9'>阅读 9,378</div>
                </div>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>笑话</Link></div>
                  <div className='m-t-10 c-9'>阅读 39,378</div>
                </div>
                <div className='m-t-20'>
                  <div><Link className='h-b' to=''>你常挂在嘴上的话，终将会成为你的人生</Link></div>
                  <div className='m-t-10 c-9'>阅读 24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,null)(withRouter(Detail))