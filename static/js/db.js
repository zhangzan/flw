/**
 * flyingwings 配置
 * @auth zhangzan
 * @date 2017-11-04
 */
window.DB = {
  // 维拉3是否展示信息
  robot3Show: 1,
  // 新闻列表每页个数
  newsPageSize: 10,
  // 新闻列表数组
  newsList: [
    {
      date: '2019-04-25',
      title: '5G已来！弗徕威打造智能机器人服务新生态',
      desc: '4月23日-25日，2019上海5G创新发展峰会暨中国联通全球产业链合作伙伴大会在上海世博中心举行。作为金桥园区的高科技代表企业之一，弗徕威携维拉机器人亮相金桥管委会“5G产业生态园区”展会，受邀与华为、诺基亚上海贝尔、中科新松、泛亚汽车、上海精准医疗等金桥园区优秀企业共同展示最新科技研究成果。',
      img: '20190425.jpg',
      url: 'https://mp.weixin.qq.com/s/5dTwoMkNyrR9A91YyCBJMQ',
      source: '弗徕威官方'
    },
    {
      date: '2019-04-12',
      title: '弗徕威角逐2019中国科技创业计划大赛！',
      desc: '本次大赛由宁波市经济和信息化局、宁波国家高新区（新材料科技城）管委会主办。弗徕威副总裁汪琳女士出席并参加了本次大赛精彩路演活动，与同行大咖共同就AI、物联网、云服务、大数据等当下前沿技术发表精彩演讲。',
      img: '20190412.jpg',
      url: 'https://mp.weixin.qq.com/s/FE4c6s0fpKlvGoMWhTkzqg',
      source: '弗徕威官方'
    },
    {
      date: '2019-04-08',
      title: '西宁市副市长陈兆超率队参访弗徕威 畅谈AI机器人落地合作',
      desc: '4月8日下午，西宁市副市长陈兆超率队参访上海市高科技企业——弗徕威智能机器人科技（上海）有限公司，同行的还有中国银行青海省分行副行长王超、市政府秘书长刘强峰等领导，与企业高管就人工智能发展现状以及机器人的落地协作进行了深入沟通和交流。。',
      img: '20190408.jpg',
      url: 'https://mp.weixin.qq.com/s/6xiMdLHxHKbzafICl2LY2w',
      source: '弗徕威官方'
    },
    {
      date: '2019-03-27',
      title: '【干货满满】弗徕威CEO陈兆先易居第三届地新引力创新峰会专场演讲',
      desc: '本次峰会聚焦房企坚守主业下的多元化，探讨地产探索美好生活场景的未来走向，展现中国房地产领域全景式创新。弗徕威CEO陈兆先作《机器人——地产转型好帮手》的主题演讲，维拉机器人现场演绎未来美好智慧生活新场景，体验者络绎不绝。',
      img: '20190327.jpg',
      url: 'https://mp.weixin.qq.com/s/MD9q4ymLPIMG3rwacEteMw',
      source: '弗徕威官方'
    },
    {
      date: '2019-03-23',
      title: '【文汇大讲堂分享】管家、保安、医生，维拉智能机器人如何定义未来智慧生活？',
      desc: '3月23日以“科技+艺术”为主题的文汇讲堂APP留言互动群线下活动举办。第一场活动是30名群听友走进位于浦东金桥经济技术开发区的弗徕威智能机器人，聆听“服务机器人是人类工具发展最高阶段”为核心观点的演讲，并在智慧生活体验馆感受“维拉”的智慧，尤其是为居家养老生活带来的周到服务。',
      img: '20190323.jpg',
      url: 'http://wenhui.whb.cn/zhuzhanapp/jtxw/20190325/251817.html?from=singlemessage&isappinstalled=0&timestamp=1553597187940',
      source: '文汇APP'
    },
    {
      date: '2019-03-17',
      title: '2019AWE,弗徕威智能机器人花式“出道”',
      desc: '3月14-17日，2019年中国家电及消费电子博览会在上海新国际博览中心举办。弗徕威携手全球领先的物联网整体解决方案提供商日海艾拉、博西家电等合作伙伴共同亮相大会现场。',
      img: '20190317.jpg',
      url: 'https://mp.weixin.qq.com/s/jg8SW9jq-lzAYqPBQs0yaw',
      source: '弗徕威官方'
    },
    {
      date: '2019-02-18',
      title: '喜报！金桥企业弗徕威入选2018年度上海市“专精特新”中小企业名单',
      desc: '近日，上海市经济和信息化委公布了2018年度上海市“专精特新”中小企业名单，本市共有706家企业入选，金桥开发区企业弗徕威智能机器人科技（上海）有限公司入榜。',
      img: '20190218.jpg',
      url: 'https://mp.weixin.qq.com/s/vjEKv50Mp1jAmLOEV0cPnQ',
      source: '金桥发布'
    },
    {
      date: '2019-01-15',
      title: '弗徕威喜获2018年度深圳机器人技术创新企业奖',
      desc: '1月14日， “2019深圳机器人创新与发展论坛暨深圳市机器人协会年会”在深圳隆重举办。论坛期间，协会对全面推动机器人产业发展、促进机器人技术创新进步的优秀企业进行了隆重表彰。弗徕威荣获2018年度深圳机器人技术创新服务机器人奖。弗徕威子公司——深圳弗徕威智能科技有限公司负责人许少强代表公司出席此次活动并领奖。',
      img: '20190115.jpg',
      url: 'https://mp.weixin.qq.com/s/CEtZargXLCZqxWkzviV8fA',
      source: '弗徕威官方'
    },
    {
      date: '2019-01-13',
      title: '【喜讯】弗徕威与Colorful Universe艺术团在美国举行战略合作签约仪式',
      desc: '美国当地时间1月13日，弗徕威智能机器人与Colorful Universe艺术团在美国Cupertino举行了隆重的战略合作协议签约仪式。',
      img: '20190113.jpg',
      url: 'https://mp.weixin.qq.com/s/SrbrrebKbgPaRCRRyzM-Tg',
      source: '弗徕威官方'
    },
    {
      date: '2019-01-11',
      title: 'CES 2019丨弗徕威亮相：引领智能服务机器人新潮流',
      desc: '2019年1月8日,一年一度的消费电子盛宴—— CES2019在美国拉斯维加斯隆重开幕。',
      img: '20190111.png',
      url: 'https://finance.china.com/jyk/news/11179727/20190111/25340266.html',
      source: '中华财经网'
    },
    {
      date: '2019-01-09',
      title: '【重磅】日海艾拉与弗徕威智能机器人在美国举行战略合作签约仪式',
      desc: '美国当地时间1月8日,正值全球科技盛会CES(国际消费类电子产品展览会)举办期间,全球领先的物联网整体解决方案提供商Ayla sunsea日海艾拉宣布与弗徕威智能机器人达成合作,在拉斯维加斯举行了隆重的战略合作协议签约仪式。',
      img: '20190109.jpg',
      url: 'http://www.ailab.cn/qiye/2019010988848.html',
      source: '人工智能网'
    },
    {
      date: '2019-01-08',
      title: '【快讯】弗徕威参与制定的两项自主机器人标准发布',
      desc: '由弗徕威参与制定的两项自主机器人标准正式发布，标准由国家机器人标准化总体组归口及执行。',
      img: '20190108.png',
      url: 'https://mp.weixin.qq.com/s/CKdMoPliM8JtgSqdLOfyFA',
      source: '弗徕威官方'
    },
    {
      date: '2019-01-07',
      title: '【点赞】专利申请从3年缩短到3个月,“浦东速度”为民企创新护航',
      desc: '“这是我见过的，最接地气的政策。我们公司在浦东知识产权保护中心申报了专利后，通过快速审查通道，原本预计需要三年的发明专利授权，仅三个月就完成了。”国内首批从事服务机器人生产研发的弗徕威科技公司总裁张殿礼告诉记者。',
      img: '20190107.jpg',
      url: 'https://web.shobserver.com/wx/detail.do?id=126009&time=1546862226435&from=singlemessage',
      source: '上观网'
    },
    {
      date: '2019-01-03',
      title: '聚焦时代起点 智启云上未来 弗徕威赴IMPACT紫光云峰会',
      desc: '2018年12月下旬，由紫光云技术有限公司主办的“IMPACT2018紫光云峰会”在天津举行。弗徕威作为紫光云的生态合作伙伴，受邀参加了本次峰会。',
      img: '20190103.jpg',
      url: 'https://mp.weixin.qq.com/s/WaxduRXBxMe7KtOxhFWIDQ',
      source: '弗徕威官方'
    },
    {
      date: '2018-12-29',
      title: '2019CES展邀请函 | 关爱无处不在，弗徕威与您相约拉斯维加斯',
      desc: '2019年1月8日到11日，第52届CES将在美国拉斯维加斯国际会展中心举行。作为全球领先的智能服务机器人企业，弗徕威受大会邀请盛装参展，展位位于SANDS HALL金沙馆1层 51305。',
      img: '20181229.png',
      url: 'https://mp.weixin.qq.com/s/k_-e_KecBKu3T-A_OnnhZw',
      source: '弗徕威官方'
    },
    {
      date: '2018-12-19',
      title: '张殿礼：AI潮起 潮不落',
      desc: '12月19日， “2018人工智能与产业融合上海高峰论坛暨上海黄浦区人工智能外滩峰会”在黄浦区科学会堂盛大开幕。弗徕威创始人张殿礼先生受邀参加本次峰会，并作主题为“AI潮起  潮不落”的主要演讲。',
      img: '20181219.jpg',
      url: 'https://mp.weixin.qq.com/s/pgqM3h_QR9Z52S7-Fhy3dA',
      source: '弗徕威官方'
    },
    {
      date: '2018-12-12',
      title: '住建部《居住区服务机器人管理技术规程》会议在京召开 弗徕威主编主导并参与',
      desc: '新华网北京12月12日电  为规范服务机器人进入社区，国家住房和城乡建设部科技与产业化发展中心将联合相关机构、企业制定《居住区机器人服务管理技术规程》。弗徕威作为主编主导单位，出席了本次会议。',
      img: '201812122.jpg',
      url: 'http://www.xinhuanet.com/info/2018-12/12/c_137668930.htm',
      source: '新华网'
    },
    {
      date: '2018-12-12',
      title: '上海AI应用场景建设实施计划正式发布 弗徕威智能机器人入选首批人工智能创新产品',
      desc: '上海人工智能应用场景建设实施计划今天（12日）正式发布，这是全国首次面向人工智能应用场景需求的征集计划。弗徕威应邀参加本次会议，公司照护型智能机器人入选人工智能创新产品目录，向“AI+家庭”应用场景发力！',
      img: '20181212.jpg',
      url: 'https://mp.weixin.qq.com/s/imhGDabFvlWPdpFF7HLVjQ?scene=25#wechat_redirect',
      source: '上海市经信委'
    },
    {
      date: '2018-11-30',
      title: '融创正式联手猪八戒网、弗徕威智能机器人 首个西部硅谷已在路上!',
      desc: '11月30日下午，都江堰市政府代表与融创中国四川公司、重庆猪八戒网、弗徕威成功签订了战略合作协议，标志着由融创、猪八戒网与弗徕威共同打造的“中国智心”互联网+人工智能产业园中园项目正式落地都江堰！',
      img: '20181130.jpg',
      url: 'https://www.toutiao.com/i6631329101162480131/?wxshare_count=3&from=groupmessage&pbid=6631332822848505348',
      source: '今日头条'
    },
    {
      date: '2018-11-24',
      title: '弗徕威受邀参加2018中国华龄论坛，董事长陈兆先先生畅谈智慧养老新模式',
      desc: '11月24日， “2018华龄大会——第六届全国智能养老战略研讨会暨中铁任之康养产业论坛“在重庆召开。弗徕威董事长陈兆先先生受邀参加本次大会并作主题演讲，与行业领域专家们共同探讨智慧康养前沿创新新模式。',
      img: '20181124.png',
      url: 'https://mp.weixin.qq.com/s/slr2MuOhywePxwFzBqjXbg',
      source: '智能养老'
    },
    {
      date: '2018-11-23',
      title: '喜报！弗徕威智能机器人荣膺2018中国年度最佳雇主最具智造精神雇主奖',
      desc: '11月23日，2018中国年度最佳雇主颁奖盛典在成都隆重揭晓，弗徕威从30854家报名企业中脱颖而出，荣获2018中国年度最佳雇主“最具智造精神雇主”奖。',
      img: '20181123.jpg',
      url: 'https://sx.sina.cn/city/2018-11-30/detail-ihpevhcm5617343.d.html',
      source: '新浪网'
    },
    {
      date: '2018-11-21',
      title: '德国汉堡科学院院士张建伟莅临弗徕威深圳分部',
      desc: '11月中旬，德国汉堡科学院院士张建伟先生来到弗徕威深圳分部参访，与弗徕威高层就新一代机器人的技术研发、应用场景落地、公司未来发展方向作深入指导和探讨。',
      img: '20181121.jpg',
      url: 'https://mp.weixin.qq.com/s/iPhMabtvjroH1UvO6_QXkQ',
      source: '弗徕威官方'
    },
    {
      date: '2018-11-20',
      title: '热烈庆祝弗徕威机器人进驻明发集团首个机器人智慧社区',
      desc: '2018年11月，弗徕威机器人进驻明发集团旗下首个机器人智慧社区——四川“广安明发广场”,标志着明发集团与弗徕威共同打造的AI智慧社区正式拉开了序幕！',
      img: '20181120.png',
      url: 'https://mp.weixin.qq.com/s/zeHUwR-8UGdyp8IgFA6luA',
      source: '弗徕威官方'
    },
    {
      date: '2018-11-16',
      title: '机器人创新生态年度峰会成功举办，弗徕威荣获年度最佳市场表现企业奖',
      desc: '弗徕威创始人兼战略总裁张殿礼受邀参加本次峰会，并就机器人的场景落地作主题演讲。弗徕威智能机器人荣获年度最佳市场表现企业奖。',
      img: '20181116.jpg',
      url: 'https://mp.weixin.qq.com/s/Y6B3GZBUxqEnb6hg9r5CrA?scene=25#wechat_redirect',
      source: '机器人创新生态'
    },
    {
      date: '2018-10-27',
      title: '14家机器人CEO再聚首，机器人创新生态线下CEO沙龙光临上海陆家嘴',
      desc: '到场的企业不仅有深兰科技、竹间智能、思岚科技、弗徕威这样上海机器人与人工智能行业的一线创新公司，也有科沃斯这样的集产品、技术创新与投资于一体的行业领导者。',
      img: '20181027.jpg',
      url: 'https://mp.weixin.qq.com/s/eOnLeRo9_HlHQVHyemaBjw?scene=25#wechat_redirect',
      source: '机器人创新生态'
    },
    {
      date: '2018-10-25',
      title: '科大讯飞机器人之路 AI同行分论坛：引领机器人行业浪潮',
      desc: '张殿礼先生认为，服务机器人是一种生产工具，是服务业中提高生产效率、变革作业模式的生产设备，不是电子消费品。此外，技术深度决定了行业周期的长度。而服务机器人技术极其复杂，是几乎囊括了人类所有技术的最终载体。',
      img: '20181025.jpg',
      url: 'https://tech.china.com/article/20181029/kejiyuan1018207914.html',
      source: '新浪网'
    },
    {
      date: '2018-10-19',
      title: '机器人的场景落地，核心是聚焦',
      desc: '2018年10月19日，由亿欧公司主办，思贝克联合主办的“BATi 智能制造•智能产品论坛”在深圳万科前海国际会议中心成功举办。下午第一个圆桌主题为“机器人的场景落地”，主持人为亿欧合伙人于东炜，分享嘉宾分别是：弗徕威机器人创始人张殿礼、优地科技联合创始人刘大志、擎朗智能创始人李通、欢创科技创始人周琨。',
      img: '20181019.jpg',
      url: 'https://www.iyiou.com/p/84204',
      source: '亿欧'
    },
    {
      date: '2018-09-23',
      title: '弗徕威“做有用的机器人”，AI赋能智慧家庭',
      desc: '2018世界人工智能大会于2018年9月17日-9月19日在上海召开。本次大会以“人工智能赋能新时代”为主题，由70余家AI相关核心企业同台展示，深度剖析AI机器商业应用。国内服务机器人的领先企业上海弗徕威智能机器人亮相此次盛会，为现场嘉宾及观众展示了其全新维拉3系列、以及前沿AI应用技术。',
      img: '20180923.jpg',
      url: 'https://3g.163.com/local/article/DSHRS6SF04188GRN.html?from=dynamic',
      source: '网易'
    },
    {
      date: '2018-09-20',
      title: '维拉机器人助力“张江女神”总决赛暨加冕之夜',
      desc: '由张江发展促进会，上海博雅酒店等联合主办的“2018张江女神”，9月20日晚在博雅酒店正式落下帷幕。弗徕威董事长兼CEO陈兆先出席担任总决赛评委。',
      img: '20180920.png',
      url: 'https://mp.weixin.qq.com/s/YdQewPi3wYwWkGT5mf6hfQ',
      source: '弗徕威官方'
    },
    {
      date: '2018-09-16',
      title: '第八届“上海公益伙伴日”落幕，张江科学城公益力量直抵人心！',
      desc: '张江企业为公益活动贡献着力量。弗徕威智能机器人、曙光医院、交行张江支行、普研标准、联想、安进生物、博雅酒店、生命时钟、生纳科技、泰创空间和张江志愿者协会等企事业单位在现场为参展人员带来了爱与温暖。',
      img: '20180916.jpg',
      url: 'http://www.sohu.com/a/254634590_195713',
      source: '搜狐'
    },
    {
      date: '2018-05-19',
      title: '“新津•新经济中心”项目将打造“弗徕威智能小镇”',
      desc: '5月18日，“新津•新经济中心”项目合作签约仪式在成都市新津县举行，新津县人民政府与保利（成都）实业有限公司、弗徕威智能机器人科技（上海）有限公司签订三方合作协议。',
      img: '20180519.jpg',
      url: 'http://sc.china.com.cn/index.php?m=wap&siteid=1&a=show_wap&catid=1106&id=273430',
      source: '中国网•锦绣天府'
    },
    {
      date: '2017-12-27',
      title: '2017张江创新达人竟然是个机器人？！快来看看“他”是何方神圣！',
      desc: '前不久，“2017第三届张江科技创新达人赛”圆满落幕，小编发现在30位张江企业个人及团队获得者中出现了与众不同的一位。圆圆的小脑袋，不到半米高的身材，披着银灰色的“外衣”，竟然是个机器人！据了解，这是组委会首次把“达人”荣誉颁发给张江智能机器人维拉，以激励张江更多人工智能创新技术的发展。',
      img: '20171227.jpg',
      url: 'https://baijiahao.baidu.com/s?id=1589204032620137946&wfr=spider&for=pc',
      source: '百家号'
    },
    {
      date: '2017-11-15',
      title: '识人又认家 弗徕威智能机器人维拉三代正式发布',
      desc: '11月15日，弗徕威智能机器人科技（上海）有限公司在深圳发布了新一代家用服务机器人——维拉三代。弗徕威智能机器人CEO陈兆先表示，这款既能识人又能认家的机器人将成为追求品质生活人群的好帮手。',
      img: '20171115.jpg',
      url: 'http://www.xinhuanet.com/info/2017-11/16/c_136756245.htm',
      source: '新华网'
    },
    {
      date: '2017-10-16',
      title: '未来已来，荣盛集团携手弗徕威共创机器人智慧社区',
      desc: '未来我们的生活到底是什么样的？10月14日，荣盛集团在济南携手弗徕威智能机器人宣布共同打造机器人智慧社区，让居民提前进入未来模式。',
      img: '20171016.jpg',
      url: 'http://news.xinhuanet.com/info/2017-10/16/c_136682923.htm',
      source: '新华网'
    },
    {
      date: '2017-04-19',
      title: '机器人+房地产=未来100年生活方式 明发集团携手弗徕威共同打造机器人智慧社区',
      desc: '明发集团在南京金奥费尔蒙酒店举办了一场题为“让时光快进100年”的2017明发集团机器人智慧社区发布盛典。明发集团副总裁郑勤刚、全联房地产商会创会会长聂梅生、英特尔（中国）战略合作与创新总监张志斌、哈尔滨工业大学机器人组副所长付宜利教授、全国工商联房地产商会常务副秘书长赵正挺、弗徕威智能机器人科技（上海）有限公司董事长张殿礼，以及众多房地产上下游合作伙伴出席了会议，共同见证机器人管家维拉2.0进驻明发机器人智慧社区。',
      img: '20170419.jpg',
      url: 'http://news.jstv.com/a/20170419/1492606992261.shtml',
      source: '荔枝房产'
    },
    {
      date: '2017-03-31',
      title: '全球人工智能顶级专家与弗徕威的碰撞',
      desc: ' 本月29日，弗徕威喜迎贵客。他们是美国加州大学洛杉矶分校的集成电路与嵌入式系统专业主任何磊教授，图像与视觉科学中心主任朱松纯教授，美国加州大学伯克利分校人工智能专家，前亚马逊计算机视觉产品部总监 Mark Nitzberg。',
      img: '20170331.jpg',
      url: 'https://mp.weixin.qq.com/s/E_BSMw-wRpeCZLrXWDFzaw',
      source: '弗徕威官方'
    },
    {
      date: '2016-12-23',
      title: '机器人中心落户上海 英特尔携手弗徕威等企业打造创新生态',
      desc: ' 英特尔宣布在上海成立机器人创新中心，并将在3年时间内打造10个明星企业，支持100个明星项目。揭幕活动上，包括弗徕威在内的8支机器人创新团队参与了路演，同时获得机器人生态创新奖。',
      img: '20161223.jpg',
      url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDA3NDI3Ng==&mid=2695672354&idx=1&sn=a16634fc2a616a252194965dc5955890&chksm=b5492fe9823ea6ff43f7feaa8dfdd2a45106275c0571324eb76b8c7f96e35abf3da29ee718ae&mpshare=1&scene=1&srcid=0303OXwVjAeZ1cZ2R9UrmWkD&key=37b239476bce728918ccb65ab547ba677a06efc27c21ba0544a1b3c1299a9a8826df6fb02c9780968cc2bb4663f8413b47b9e3e5dd2bcc605058a013bdcb2f85cbd41744ef5ee28a0e94d65a69250426&ascene=0&uin=MTY0NDYyNTE0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=ngILFynFpAwCJhinIMNenooaag0dz6J8cBEhDpseHvxWtpLkrC7RRk2UmJuxcRtf',
      source: '弗徕威官方'
    },
    {
      date: '2016-12-10',
      title: '弗徕威牵手房教中国 荣获2016年中国房地产产业创新力大奖',
      desc: '由房教中国主办的首届中国房地产产学研发展峰会暨第九届中国房地产策划师年在湖南长沙举办。弗徕威受邀参加并获得“2016年中国房地产产业创新力大奖”，是房地产行业对其在引领产业转型创新方面的巨大肯定。同时会上也授予“中国房地产策划师联谊会副主席单位”称号。',
      img: '20161210.jpg',
      url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDA3NDI3Ng==&mid=2695672341&idx=1&sn=6cbd72eceafa6f7c537bee8f160b5502&chksm=b5492fde823ea6c8b9f79a3be0c4648a83871df93a902da5261d736d5c1e7a987c7d49dbf921&mpshare=1&scene=1&srcid=0303dGhXFHO8P28zwWQJcmot&key=ae030ef7add629e9032b0be790f74a84c883617c5e748ce64e1d0b759eec57e85cfcdca825291896278de7fef7ce0d49922815f6c19da2fa54711fb3972b1834c2077cc148273a682f0be64d56620b03&ascene=0&uin=MTY0NDYyNTE0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=ngILFynFpAwCJhinIMNenooaag0dz6J8cBEhDpseHvxWtpLkrC7RRk2UmJuxcRtf',
      source: '弗徕威官方'
    },
    {
      date: '2016-11-04',
      title: '“维拉”本领过硬 弗徕威成为首批中国机器人产品认证企业',
      desc: '2016国际机器人检测认证高峰论坛成功举行。国家发改委、国家质检总局、工业和信息化部、国家认监委联合向全球发布了“中国机器人”认证标志，标志着中国正式建立实施机器人检测认证制度，并同时向首批通过认证的企业颁发了“中国机器人”产品认证证书。弗徕威机器人成为首批荣获中国机器人认证企业之一。',
      img: '20161104.jpg',
      url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDA3NDI3Ng==&mid=2695672308&idx=1&sn=94605c5b44fd77467efd2d9cdf084098&chksm=b5492c3f823ea5294d45a18c2412e94ff3243eb2db28f3c5fb000ddb1b2a5b9f65677cc4c77b&mpshare=1&scene=1&srcid=0303nTw9kDdXq7q0hixkFX4z&key=315282ce9fd9fc88083fd1450e802668e9ffc0e3e18a84b6baee95e7f7cc410a0fff959335336ad60f9d628c4cff42d45efe28b556a6d5bc50a26caf18e18bf2a172fbc2e86c92570fe09b9bd768f4f1&ascene=0&uin=MTY0NDYyNTE0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=ngILFynFpAwCJhinIMNenooaag0dz6J8cBEhDpseHvxWtpLkrC7RRk2UmJuxcRtf',
      source: '弗徕威官方'
    },
    {
      date: '2016-09-30',
      title: '创新能力权威认可 弗徕威获第五届中国创新创业大赛总决赛优秀企业',
      desc: '  据介绍，中国创新创业大赛是全国规模最大、辐射最广、层次最高、影响力最强的创新创业赛事，并发展成为中国最大的众创空间和最强的众扶平台。第五届中国创新创业大赛共收到34341家企业和团队报名，再创历史新高。',
      img: '20160930.jpg',
      url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDA3NDI3Ng==&mid=2695672292&idx=1&sn=24f5e9c17228eb28c02920d9d10503e3&chksm=b5492c2f823ea5393d86bfc31692b1f677204efd9f4159f7e92a9a5aa0a6c14341acc54a463c&mpshare=1&scene=1&srcid=0303l4lFNAkWj8Ffxz5nxhnS&key=e82f935468864c7dc11733f255c95f96f0a26c00eb95691c66302bde72c6cf418c7c9ddfce86acec9bbc63f6844c4f1b95ac02e19ff37fba84fac06ab3e1e5e31b28f89537e68243debbaf4af771f722&ascene=0&uin=MTY0NDYyNTE0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=ngILFynFpAwCJhinIMNenooaag0dz6J8cBEhDpseHvxWtpLkrC7RRk2UmJuxcRtf',
      source: '弗徕威官方'
    },
    {
      date: '2016-07-19',
      title: '找到组织！弗徕威成为机器人创新生态合作伙伴',
      desc: '弗徕威作为致力于智能服务机器人领域的研究开发和产业化的企业，凭借在服务机器人产业化及重大技术突破等多方面的突出表现，成为机器人创新生态合作伙伴，CEO陈兆先与在场嘉宾共同见证的机器人创新生态成立仪式。',
      img: '20160719.jpg',
      url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDA3NDI3Ng==&mid=2695672252&idx=1&sn=084359bf1695be4cbd7b6500efdb4149&mpshare=1&scene=1&srcid=0303vZoWQz6J1Fq0b3zrh82c&key=315282ce9fd9fc88bb4465be06773372e8e8fe7b6600b10fb13e307569ff412587f3a858d4c0dc56c18fe81240cc54a2846317bc2361c1952e5e8767fbfa64784330f117c95bc00fdd1ded93e6ed332a&ascene=0&uin=MTY0NDYyNTE0Mg%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=ngILFynFpAwCJhinIMNenooaag0dz6J8cBEhDpseHvxWtpLkrC7RRk2UmJuxcRtf',
      source: '弗徕威官方'
    },
    {
      date: '2016-07-07',
      title: '弗徕威维拉二代机器人首批220台下线',
      desc: '弗徕威作为为数不多能够实现量产的智能服务机器人领域企业，拥有产业链完整的自有技术体系，近百项核心专利技术等自主知识产权。',
      img: '20160707.jpg',
      url: 'http://www.globalrobot.com.cn/news/2/_7470.html',
      source: '全球机器人网'
    },
    {
      date: '2016-05-27',
      title: '弗徕威智能机器人发布维拉2代',
      desc: '智能服务机器人研发及产业化企业弗徕威智能机器人科技(上海)有限公司，27日在沪举办“机器人+ ——弗徕威智能机器人新品发布会”。',
      img: '20160527.jpg',
      url: 'http://www.sh.chinanews.com/cjxw/2016-05-27/5549.shtml',
      source: '中国新闻网'
    },
  ]
}