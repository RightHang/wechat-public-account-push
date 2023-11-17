/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '小柔宝贝, 早上好呀！！',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相爱的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}

         ---
    星座运势

    * {{comprehensive_horoscope.DATA}}

    * {{love_horoscope.DATA}}

    * {{career_horoscope.DATA.DATA}}

    * {{wealth_horoscope.DATA}}

    * {{healthy_horoscope.DATA}}


    中文：{{note_ch_0.DATA}}
    

    古诗古文:

    * {{poetry_title.DATA}}

    * {{poetry_author.DATA}}({{poetry_dynasty.DATA}})

    * {{ poetry_content.DATA}}


    土味情话(彩虹屁):

    * {{earthy_love_words.DATA}}

    朋友圈文案:

    * {{moment_copyrighting.DATA}}

    毒鸡汤:
    * {{poison_chicken_soup.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '心肝宝贝, 早上好呀！！',
    desc: `
    🗓️ **{{date.DATA}}**

    下个休息日：{{holidaytts.DATA}}

    ---

    城市：{{city.DATA}} 

    天气☁️：{{weather.DATA}} 

    温度🌡️: {{min_temperature.DATA}}-{{max_temperature.DATA}}  

    预防感冒提醒：{{ganmao.DATA}}

    温馨提示：{{notice.DATA}}

    ---

    ❤️今天是我们恋爱的第{{love_day.DATA}}天❤️

    ❤️距离我们结婚的还有{{marry_day.DATA}}天❤️

    {{birthday_message.DATA}}
    
    ---
    
    宝贝下面可以忽略不看啦，省流!！

    
    金山每日一句：

    英文：{{note_en.DATA}}

    ---

    风向: {{wind_direction.DATA}}
      
    风级: {{wind_scale.DATA}}

    日出时间：{{sunrise.DATA}}

    日落时间：{{sunset.DATA}}


    不想惹你生气的，我并没有你想的那么坏的，宝子相信我

    `
  },
]

module.exports = TEMPLATE_CONFIG
