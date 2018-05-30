const message = {
  home: {
    list: [
      {
        name: '首页',
        path: '/'
      },
      {
        name: '产品',
        path: '/product'
      },
      {
        name: '购买',
        path: '/purchase'
      },
      {
        name: '常见问题',
        path: '/faq'
      },
      {
        name: '新闻',
        path: '/news'
      },
      {
        name: '关于',
        path: '/about'
      },
    ],
    options: {
      glassList: [
        {
          name: 'VOGUE 时尚款',
          des: '时尚款将根据季节与潮流需要，快速更替造型。98%屏蔽紫外线与红外辐射，让您在享受科技的同时保持时尚与健康。',
          colorIndex: 0,
          colorList: [
            {
              name: 'index_p1.png',
              color: 'rgb(51, 51, 51)'
            },
            {
              name: 'index_p2.png',
              color: 'rgb(67, 202, 153)'
            },
            {
              name: 'index_p3.png',
              color: 'rgb(255, 142, 179)'
            },
            {
              name: 'index_p4.png',
              color: 'rgb(255, 212, 41)'
            }
          ]
        },
        {
          name: 'GEEK 极客款',
          des: '极简造型结合超轻框架，重量仅有25g，与普通近视镜造型无异。日常工作生活中也能让你享受音乐、耳听四方。',
          colorIndex: 0,          
          colorList: [
            {
              tips: '固定为黑色',
              name: 'index_p6.png',
              color: 'rgb(51, 51, 51)'
            }
          ]
        }
      ],
      productSpecial: {
        title: '产品特色',
        list: [
          {
            img: 's1.png',
            name: '骨传导听声',
            des: '鉴赏级音质，享受音乐不伤耳膜'
          },
          {
            img: 's2.png',
            name: '智能触控',
            des: '智能感应镜架，一指灵活触控'
          },
          {
            img: 's3.png',
            name: '收听电台',
            des: '独立于手机，可直接使用眼镜收听电台'
          },
          {
            img: 's4.png',
            name: '拨打电话',
            des: '高级通话质量接打电话'
          }
        ]
      },
      moreDetail: {
        title: '更多细节',
        list: [
          {
            name: '蓝牙连接',
            des: '连接蓝牙播放音乐、接听电话、回拨电话、打开APP等',
            img: 'm1.png'
          },
          {
            name: '智能佩戴识别',
            des: '智能感应人脸佩戴，若摘下眼镜则自动暂停音乐或电台，戴上则恢复播放',
            img: 'm2.png'
          },
          {
            name: '专利消减漏音',
            des: '远超同类骨传导听声体验。如同耳机一般，其他人听不到你播放的音乐或声音',
            img: 'm3.png'
          },
          {
            name: '电池续航与充电时间',
            des: '可连续使用7～9小时充满电时间为半小时～1小时',
            img: 'm4.png'
          },
          {
            name: '防水防尘',
            des: 'IP54：防止有害灰尘进入、防止从各方向滴落的水花对机体产生影响',
            img: 'm5.png'
          },
          {
            name: '佩戴安全、供应链环保',
            des: '严选无害材料，并保证供应链无污染。符合美、欧、日、中地区的质检标准',
            img: 'm6.png'
          },
          {
            name: '送免费音乐会员',
            des: '购买乐透®音乐眼镜即可获赠echo回声音乐APP会员，免费享受潮流音乐',
            img: 'm7.png'
          },
          {
            name: '提供近视配镜服务',
            des: '我们提供覆盖全球的近视配镜服务网络超低价即可在线配制近视镜片',
            img: 'm8.png',
            className: 'glass'
          },
        ]
      }
    },
    exhibition: [
      {
        title: '视频',
        list: [
          {
            name: 'Official Introduction Video (shot by Prototype)',
            date: 'March 17-2018',
            img: 'video1.png',
            imgPic: 'video1-m.png',
            video: 'https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video4.mp4'
          },
          {
            name: 'Onsite Interview: 2018 Sónar Music Festival @Hong Kong, China',
            date: 'March 17-2018',
            img: 'video2.png',
            imgPic: 'video2-m.png',
            video: 'https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4'
          },
          {
            name: 'Onsite Interview: 2018 Consumer Electronics Show @Las Vegas, United States',
            date: 'March 14-2018',
            img: 'video3.png',
            imgPic: 'video3-m.png',
            video: 'https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video2.mp4'
          },
          {
            name: 'Introduction to MusicLens: First Glance of Innovative Shades',
            date: 'March 9-2018',
            img: 'video4.png',
            imgPic: 'video4-m.png',
            video: 'https://qn-qn-kibey-static-cdn.app-echo.com/musiclens/video/musiclens_video1.mp4'
          }
        ]
      },
      {
        title: '图片',
        lens: 21
      }
    ]
  },
  languageDrop: [
    {
      name: '中文',
      key: 'zh',
    },
    {
      name: 'English',
      key: 'en',
    },
    {
      name: '日本語',
      key: 'ja',
    }
  ],
  about: {
    title: '关于乐透®音乐眼镜',
    des: [
      'MusicLens™乐透®音乐眼镜是智能听觉与潮流视觉的结合，通过高品质骨传导听声技术，戴上眼镜即可收听音乐、电台、接打电话。',
      '如同耳机一般，其他人听不到你播放的音乐或声音。无需在耳内放置任何扬声器，长期佩戴也不会伤害耳膜或引起耳部疼痛。既保护耳膜，又能享受高品质的听觉体验。',
      '潮流前卫的墨镜造型，让你同时享受科技与时尚。无论你身处何地，都能享受音乐带来的全部乐趣，在不动声色间成为众人关注的焦点。'
    ],
    more: '进一步了解产品'
  },
  footer: {
    contact: '联系我们',
    contactList: [
      '如有合作请发送邮件，我们将于24小时之内回复。',
      '商务合作: business@kibey.com',
      '销售咨询: sales@kibey.com  '
    ],
    iconList: [
      {
        icon: 'icon-ins.png',
        icon2: 'icon-ins-p.png',
        href: 'https://www.instagram.com/musiclens_official'
      },
      {
        icon: 'icon-facebook.png',
        icon2: 'icon-facebook-p.png',        
        href: 'https://www.facebook.com/Musiclens-360031024460561/?modal=admin_todo_tour'
      },
      {
        icon: 'icon-tw.png',
        icon2: 'icon-tw-p.png',        
        href: 'https://twitter.com/music_lens'
      },
      // {
      //   icon: 'icon-weixin.png',
      //   icon2: 'icon-weixin-p.png',      
      //   type: 'weixin',
      //   href: 'https://www.facebook.com/Musiclens-360031024460561/?modal=admin_todo_tour'
      // },
      {
        icon: 'icon-weibo.png',
        icon2: 'icon-weibo-p.png',        
        href: 'https://weibo.com/u/6396554976?topnav=1&wvr=6&topsug=1'
      }
    ],
    phone: '+86 400-820-1791',
    phoneTips: '24小时客服（中英文）',
    copyright: '© 2018 MusicLens Inc. (美国, 加州) 保留一切权利'
  },
  product: {
    nav: [
      {
        name: '产品总览',
        className: 'introduce',
        type: 'no-list'
      },
      {
        name: '材质造型',
        className: 'modeling',
        type: 'list',
        list: [
          {
            front: '1_material_1_front.png',
            back: '1_material_1_back.png'
          },
          {
            front: '1_material_2_front.png',
            back: '1_material_2_back.png'
          },
          {
            front: '1_material_3_front.png',
            back: '1_material_3_back.png'
          },
          {
            front: '1_material_4_front.png',
            back: '1_material_4_back.png'
          },
          {
            front: '1_material_5_front.png',
            back: '1_material_5_back.png'
          }
        ]
      },
      {
        name: '创新科技',
        className: 'create',
        type: 'list',
        list: [
          {
            front: '2_tech_1_front.png',
            back: '2_tech_1_back.png'
          },
          {
            front: '2_tech_2_front.png',
            back: '2_tech_2_back.png'
          },
          {
            front: '2_tech_3_front.png',
            back: '2_tech_3_back.png'
          },
          {
            front: '2_tech_4_front.png',
            back: '2_tech_4_back.png'
          },
          {
            front: '2_tech_5_front.png',
            back: '2_tech_5_back.png'
          },
          {
            front: '2_tech_6_front.png',
            back: '2_tech_6_back.png'
          },
          {
            front: '2_tech_7_front.png',
            back: '2_tech_7_back.png'
          }
        ]
      },
      {
        name: '安全性能',
        className: 'safe',
        type: 'list',
        list: [
          {
            front: '3_perform_1_front.png',
            back: '3_perform_1_back.png'
          },
          {
            front: '3_perform_2_front.png',
            back: '3_perform_2_back.png'
          },
          {
            front: '3_perform_3_front.png',
            back: '3_perform_3_back.png'
          },
          {
            front: '3_perform_4_front.png',
            back: '3_perform_4_back.png'
          }
        ]
      },
      {
        name: '服务礼遇',
        className: 'service',
        type: 'list',
        list: [
          {
            front: '4_gift_1_front.png',
            back: '4_gift_1_back.png'
          },
          {
            front: '4_gift_2_front.png',
            back: '4_gift_2_back.png'
          },
          {
            front: '4_gift_3_front.png',
            back: '4_gift_3_back.png'
          }
        ]
      },
      {
        name: '使用场景',
        className: 'use',
        type: 'list',
        list: [
          {
            front: '5_scene_1_front.png',
            back: '5_scene_1_back.png'
          },
          {
            front: '5_scene_2_front.png',
            back: '5_scene_2_back.png'
          },
          {
            front: '5_scene_3_front.png',
            back: '5_scene_3_back.png'
          },
          {
            front: '5_scene_4_front.png',
            back: '5_scene_4_back.png'
          },
          {
            front: '5_scene_5_front.png',
            back: '5_scene_5_back.png'
          }
        ]
      }
    ]
  },
  problem: {
    title: '常见问题',
    list: [
      {
        title: '乐透音乐眼镜有哪些款式和颜色？',
        value: '乐透共有2种款式，一种为墨镜(时尚款)，一种为光学镜(极客款)。时尚款墨镜分为男款与女款，男款有黑色、绿色；女款有红色、黄色。每种款式的镜片都各具特色，方便适用于日常生活的各类场景。'
      },
      {
        title: '乐透音乐眼镜会有更多款式吗？',
        value: '乐透致力于推出设计感十足、外形个性化、时尚且美观的音乐眼镜。我们会尽快推出更多符合多种脸型的设计款式，并保持定期更新。'
      },
      {
        title: '乐透音乐眼镜的镜片有哪些护眼功能？',
        value: '乐透的墨镜镜片能阻挡98%的紫外线、红外辐射，并且支持选配蓝光、夜视变色多功能镜片。所有的镜片均可抗冲击、抗反射、防划伤，并经过美国FDA落球测试，保证强烈撞击不会碎裂。',
      },
      {
        title: '购买乐透时，我能直接订制矫正视力的光学镜片吗？',
        value: '是的！您可以在线购买近视、远视、老花等光学镜片。我们提供在线配镜服务，仅需600元即可配镜，并支持全球配送。',
      },
      {
        title: '乐透音乐眼镜安全吗？',
        value: '乐透通过美国、欧盟、日本和中国四个地区的安全认证，可在全球范围内放心使用。我们选用符合环保标准的生产供应商，包括包装盒在内的所有产品均采用抗敏、安全、环保的材料制造。',
      },
      {
        title: '乐透音乐眼镜的电池能续航多久？',
        value: '乐透在持续使用状态下可续航7-9小时，在待机状态下续航约48小时。我们将在完成认证后公布准确的电池续航时间，敬请关注官网最新动态。',
      },
      {
        title: '什么是骨传导技术？',
        value: '骨传导是一种通过皮肤和骨骼传输声音的技术。不同于通过耳膜传导声音的气传导方式，骨传导技术安全无害，不会伤害鼓膜，尤其适合喜爱听音乐和长时间佩戴声音设备的人群。',
      },
      {
        title: '什么是专利消减漏音?',
        value: '乐透采用独家专利技术，有效解决了大多数骨传导声音设备都存在漏音问题，让乐透在听声时如耳机一般，他人无法听到您听的声音。',
      },
      {
        title: '乐透音乐眼镜的音质如何？',
        value: '乐透为您提供鉴赏级的音乐品质。它能完美胜任听音乐、听电台和语音通话等多种使用场景。不同于普通耳机，乐透在保证音质的同时不会伤害和刺激您的鼓膜。',
      },
      {
        title: '如何用乐透听音乐？',
        value: '您只需用蓝牙连接可以播放音乐的智能设备，如手机、电脑等，即可收听设备上的音乐。同时，购买乐透即可获赠echo回声音乐APP一年会员，免费收听、离线该APP上的音乐。echo回声是一款专为年轻人打造的潮流音乐APP，提供新颖的音乐收听与媒体服务，在全球拥有3000万用户。手机访问 www.app-echo.com 或在应用市场搜索“echo回声”下载APP。',
      },
      {
        title: '如何收听FM广播电台？',
        value: '无需连接手机，在乐透音乐眼镜上按“模式切换键”，即可开启FM广播电台收听功能。点按右侧镜架可切换广播频道。',
      },
      {
        title: '如何接听电话？',
        value: '通过蓝牙连接手机后，乐透支持手动或自动接听来电，您可以在echo回声App设置接听来电模式。响铃后，点按右侧镜架即可手动接听电话。若设置为自动接听模式，乐透会在5秒内自动接听来电。您也可以通过手机手动接听或拒绝来电。',
      },
      {
        title: '我可以用乐透听导航吗？',
        value: '可以。通过蓝牙连接手机后，即可收听手机中导航软件的语音指示。任何手机软件播放的声音，都可以通过乐透收听。',
      },
      {
        title: '如何从乐透获得区块链奖励MitCoin？',
        value: '乐透®音乐眼镜与日本区块链项目MusicLife合作，用户仅需佩戴听歌即可自动获取MitCoin，并可在echo回声App中查看获取的数量。了解更多信息请访问MusicLife官方网站：www.musiclife.io。',
      },
      {
        title: '我可以选择不同的镜片颜色吗？',
        value: '很遗憾我们暂时还未能提供这一服务。您可以前往眼镜店选配自己喜爱的镜片颜色',
      },
      {
        title: '我所在的国家在配送范围内吗？',
        value: '是的！我们的配送服务遍及全球。',
      },
      {
        title: '配送费用的金额是？',
        value: '乐透可免费配送至中国内地、中国香港特区、中国澳门特区和美国。寄往台湾地区、日本、韩国和加拿大的配送费为人民币¥18元。寄往英国、欧洲地区、澳大利亚和新西兰的配送费为人民币¥60元。寄往其他国家和地区的配送费为人民币¥95元。您也可以在乐透的购买页面中查看配送费用。',
      },
      {
        title: '乐透使用什么样的配送服务商？',
        value: '中国地区将采用顺丰快递，美国地区采用USPS First Class配送，并将跟踪和确认物流信息。全球其他地区配送均将采用国际一流的配送服务商。',
      },
      {
        title: '多久能收到乐透音乐眼镜？',
        value: '乐透音乐眼镜在2018年8月前皆为预售，将在2018年8月底开始向全球配送首批产品。我们会第一时间告知所有项目支持者准确的装运日期。2018年8月后，您购买的乐透音乐眼镜将在24小时内发货，并在全球于1～7个工作日内收到货品。',
      },
      {
        title: '保修期有多久?',
        value: '我们将提供最低半年的保修服务。具体保修时间请参考您所在国家的保修服务条款。',
      },
      {
        title: '如果感觉不适合我该怎么办？',
        value: '乐透的镜框款式大部分是男女通用的。所有款式都经过精心设计，能够很好地适应不同大小的各种脸型。我们使用的独特材料可确保镜架安全贴合人脸。如果您觉得佩戴效果不佳或不合适，可在7天内无理由换货或退货。',
      },
      {
        title: '我可以修改或取消订单吗？',
        value: '预售阶段仅支持修改订单，不支持取消订单，预售订单可通过到货后退货取消。2018年8月底正式销售开始后，您可以修改或取消您的订单，若不清楚流程，您可以拨打24小时客服电话+86 400-820-1791。',
      },
      {
        title: '如果我不喜欢购买的款式或颜色，可以更换其他款式或颜色吗？',
        value: '当然可以！您可以在收到产品后的7天内寄回给我们，我们会为您免费更换。若更换的款式存在差价，您可以在线上退补差价。',
      },
      {
        title: '我可以提前免费试戴吗？',
        value: '很遗憾我们不提供这类服务。您可以在收到产品后的7天内将不想要的款式退还，并将获得对应产品的全额退款。',
      },
      {
        title: '退货政策是怎样的？',
        value: '你在购买乐透后的7日内（含7日，自客户收到商品之日起计算），在保证乐透眼镜和包装完好的前提下，可无理由退货并获得相应的全额退款。您可以前往购买乐透的店面退货，也可以邮寄退货。若邮寄退货，退货邮费需由您自行承担。若产品被人为破坏损伤，我们将不接受退货。',
      }
    ]
  },
  About: {
  },
  news: {
    title: '新闻动态',
    iconList: ['logo1.png',  'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png']
  }
}

export default message
