export default [{
  path: '/',
  name: 'root-1',
  component (resolve) { require(['./views/welcome'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 预约洗车
  path: '/appointment',
  name: 'appointment',
  component (resolve) { require(['./views/appointment'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 洗车详情页
  path: '/washorderdetail',
  name: 'washorderdetail',
  component (resolve) { require(['./views/washorderdetail'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 会员中心
  path: '/usercenter',
  name: 'usercenter',
  component (resolve) { require(['./views/usercenter'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 我的汽车
  path: '/carlist',
  name: 'carlist',
  component (resolve) { require(['./views/carlist'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 服务协议
  path: '/agreement',
  name: 'agreement',
  component (resolve) { require(['./views/agreement'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 账户明细
  path: '/accountdetailed',
  name: 'accountdetailed',
  component (resolve) { require(['./views/accountdetailed'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 客服
  path: '/services',
  name: 'services',
  component (resolve) { require(['./views/services'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 用户信息
  path: '/userinfo',
  name: 'userinfo',
  component (resolve) { require(['./views/userinfo'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 洗车记录
  path: '/washrecord',
  name: 'washrecord',
  component (resolve) { require(['./views/washrecord'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 订单状态:已接单
  path: '/haveorder',
  name: 'haveorder',
  component (resolve) { require(['./views/haveorder'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 订单状态:准备中服务员到达现场
  path: '/reach',
  name: 'reach',
  component (resolve) { require(['./views/reach'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 正在进行的订单状态
  path: '/washcomplete',
  name: 'washcomplete',
  component (resolve) { require(['./views/washcomplete'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 新增汽车
  path: '/addnewcar',
  name: 'addnewcar',
  component (resolve) { require(['./views/addnewcar'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 充值
  path: '/recharge',
  name: 'recharge',
  component (resolve) { require(['./views/recharge'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 支付
  path: '/userpay',
  name: 'userpay',
  component (resolve) { require(['./views/userpay'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 修改密码
  path: '/modifypwd',
  name: 'modifypwd',
  component (resolve) { require(['./views/modifypwd'], resolve) },
  meta: { scrollToTop: true }
},
{
  // 余额提现
  path: '/withdrawdeposit',
  name: 'withdrawdeposit',
  component (resolve) { require(['./views/withdrawdeposit'], resolve) },
  meta: { scrollToTop: true }
}
]
