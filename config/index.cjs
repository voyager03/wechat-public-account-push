/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
 
 USE_PASSAGE: 'push-deer',

 appId:"wx8424afd6b1253806",
 
 appSecret:"353d3bfb4ea0bd6a1f1b0ca38313c14d",
  
  PROVINCE: '北京',
  CITY: '海淀区',

  USERS: 
 [
    {
  
      name: '宝贝',
   
      id: 'PDU21361T9Hgv67yCqqzC6lGTFFazuxm1a2bqyAgl',
     
      useTemplateId: '0001',
     
     
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-12',
      festivals: 
     [
            // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
            {
                 type: '*生日', name: '宝贝', year: '2000', date: '01-08',
            },
             // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
            {
                 type: '生日', name: '宝贝', year: '2000', date: '02-12',
            },
            {
                 type: '节日', name: '相识纪念日', year: '2023', date: '02-00',
            },
     
     ],
        // 我们在一起已经有xxxx天了的配置
        customizedDateList: 
     [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-25' },
        // 结婚纪念日
         { keyword: 'marry_day', date: '2022-09-09' },
     ],
   },    
   ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002', 

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU21348T8Ektv33L5beRmOkZIsgctRyJqSwg0jeM',
    },
],

}

module.exports = USER_CONFIG

