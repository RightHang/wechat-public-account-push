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
    title: '小柔宝贝, 早上好呀！！',
    desc: `
    ***🗓️{{date.DATA}} ***

    城市：{{city.DATA}} 
    天气：{{weather.DATA}} 
    温度🌡️: {{min_temperature.DATA}}-{{max_temperature.DATA}}  
    预防感冒提醒：{{ganmao.DATA}}
    紫外线强度指数☀️: {{tian_api_weather_uv_index_0.DATA}}
    穿衣指数👚: {{tian_api_weather_tips_0.DATA}}
    
    ❤️今天是我们恋爱的第{{love_day.DATA}}天 
    ❤️今天是我们结婚的第{{marry_day.DATA}}天 
    
    我们重要的日提醒：
    ①：{{wx_birthday_0.DATA}} 
    ②：{{wx_birthday_1.DATA}} 
    ③：{{wx_birthday_2.DATA}} 
    
    
    假期提醒：
    🗓️ {{wx_holidaytts_0}}{{wx_holidaytts_1}}{{wx_holidaytts_2}}
    
    金山每日一句：
    英文：{{wx_note_en_0.DATA}}{{wx_note_en_1.DATA}}{{wx_note_en_2.DATA}}
    中文：{{wx_note_ch_0.DATA}}{{wx_note_ch_1.DATA}}{{wx_note_ch_2.DATA}}
    
    每日一言：
    * {{wx_one_talk_0.DATA}}{{wx_one_talk_1.DATA}}{{wx_one_talk_2.DATA}}
    
    土味情话(彩虹屁):
    * {{wx_earthy_love_words_0.DATA}}{{wx_earthy_love_words_1.DATA}}{{wx_earthy_love_words_2.DATA}}
    
    朋友圈文案:
    * {{wx_moment_copyrighting_0.DATA}}{{wx_moment_copyrighting_1.DATA}}{{wx_moment_copyrighting_2.DATA}}
    
    毒鸡汤:
    * {{wx_poison_chicken_soup_0.DATA}}{{wx_poison_chicken_soup_1.DATA}}{{wx_poison_chicken_soup_2.DATA}}
    
    古诗古文-内容:
    * {{wx_poetry_content_0.DATA}}{{wx_poetry_content_1.DATA}}{{wx_poetry_content_2.DATA}}
    
    ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
    `
  },
]

module.exports = TEMPLATE_CONFIG
