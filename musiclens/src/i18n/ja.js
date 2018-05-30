const message = {
  hello: 'hello',
  home: {
    list: [
      {
        name: 'ホーム',
        path: '/'
      },
      {
        name: '商品',
        path: '/product'
      },
      {
        name: '購入"',
        path: '/purchase'
      },
      {
        name: 'よくある質問',
        path: '/faq'
      },
      {
        name: 'ニュース',
        path: '/news'
      },
      {
        name: 'について',
        path: '/about'
      }
    ],
    options: {
      glassList: [
        {
          name: 'VOGUEファッションモデル',
          des: 'Vogueファッションモデルのサングラスは四季をテーマに４つの色から選べられ、UV、赤外線を98%カットし、ファッションと健康を同時に持つことができる。',
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
          name: 'GEEK極客モデル',
          des: 'シンプルな超軽いフレーム、重さはわずか25グラム。ブルーライトを100％カットし、視力を守る。',
          colorIndex: 0,          
          colorList: [
            {
              tips: 'ブラック',
              name: 'index_p6.png',
              color: 'rgb(51, 51, 51)'
            }
          ]
        }
      ],
      productSpecial: {
        title: '商品について',
        list: [
          {
            img: 's1.png',
            name: '骨伝導技術',
            des: '従来とは違った聴覚体験、鼓膜を保護すると同時に高品質な聴覚体験をお届けする'
          },
          {
            img: 's2.png',
            name: 'スマートタッチコントロール',
            des: 'スマートセンサー搭載のフレーム、一指でコントロール'
          },
          {
            img: 's3.png',
            name: 'ラジオ聴取',
            des: 'スマートフォンがなくてもFMモードに切り替える'
          },
          {
            img: 's4.png',
            name: '自動に電話にでる',
            des: '5秒で自動に電話にでる'
          }
        ]
      },
      moreDetail: {
        title: 'もっと詳しく',
        list: [
          {
            name: 'BLUETOOTH接続',
            des: 'BLUETOOTH接続で音楽を聴く、電話に出る、電話を折り返す、APPを開くなどのことができる。',
            img: 'm1.png'
          },
          {
            name: 'スマートセンサー',
            des: 'スマートセンサーを通じて、MusicLensを外すと自動に音楽とラジオを中止し、かけると再開する。',
            img: 'm2.png'
          },
          {
            name: '音漏れ防止特許技術',
            des: 'イヤホンを超え、流している音楽や音が隣に聴かされず、いつでもどこでも好きなように聴ける。',
            img: 'm3.png'
          },
          {
            name: 'バッテリー持ち時間と充電',
            des: '持ち時間7～9小时 充電30分〜1時間',
            img: 'm4.png'
          },
          {
            name: '防水防塵レベル',
            des: 'IP54:いかなる方向からの水、埃の侵入によっても有害な影響を受けない。',
            img: 'm5.png'
          },
          {
            name: '安全と環境に優しい',
            des: '体や環境に良い素材を選び、サプライチェーンの質を保証する。米、欧、日、中の品質基準を満たす。',
            img: 'm6.png'
          },
          {
            name: '無料で会員サービスを体験',
            des: 'musiclensを購入した方にはecho会員サービスをプレゼントする。音楽を無料で楽しもう！',
            img: 'm7.png'
          },
          {
            name: '近眼専用レンズのオーダーサービスを提供する',
            des: '世界範囲における近眼専用レンズのオンラインオーダーサービスを提供する',
            img: 'm8.png',
            className: 'glass'
          },
        ]
      }
    },
    exhibition: [
      {
        title: '動画',
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
        title: '写真',
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
    title: 'Musiclensについて',
    des: [
      'MUSICLENSはスマート聴覚と流行視覚の融合であり',
      '高品質な骨伝導技術を用いた。メガネをかけることで音楽を聴き、レジオを聴収し、電話に出ることができる。音漏れがなく、他人に聴かされることもなく、長時間',
      'かけても痛くない。鼓膜を保護すると同時に高品質な聴覚体験をお届けする。どこにいても音楽の魅力を感じられ、知らぬまに注目を集められる。'
    ],
    more: 'もっと詳しく'
  },
  footer: {
    contact: 'お問い合わせ',
    contactList: [
      'ビジネス関係のお問い合わせは以下のメールアドレスまでお',
      '願いいたします。24時間以内に返信いたします。',
      'ビジネスに関して: business@kibey.com',
      '販売に関して: sales@kibey.com'
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
    phoneTips: '24時間カスタマーサービス（中国語＆英語）',
    copyright: '© 2018 MusicLens Inc. (アメリカ・カリフォルニア州) すべての権利を保留する'
  },
  product: {
    nav: [
      {
        name: '商品概要',
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
        name: '最新技術',
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
        name: '安全性',
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
        name: '使用概要',
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
    title: 'よくある質問',
    list: [
      {
        title: 'MusicLensはどんなスタイルと色がありますか？',
        value: `４種類のサングラススタイルと１種類の近眼スタイルがあります。各自のレンズにはその特徴があり、日常生活における色々な場合に着用できます。詳しくはMusicLensホームペー
              ジへご確認ください　。`
      },
      {
        title: 'MusicLensのレンズは目を守れますか？',
        value: `MusicLensは99.9%の紫外線、赤外線、ブルーライトから目を守っています。全てのレンズは耐衝撃性、反射防止、傷つき防止の疎水疎油コーティングを採用しています。`
      },
      {
        title: 'MusicLensのレンズは視力矯正機能がありますか？',
        value: `ありません。MusicLensはレンズの交換ができますので、視力矯正機能のレンズを求める方は専門機構で交換してください。`
      },
      {
        title: 'MusicLensの安全性はどうですか？',
        value: `MusicLensは米国、欧州連合、日本、中国の品質基準を満たし、安全認証に合格しました。パッケージを含め、体や環境に良い素材を選び、サプライチェーンの質を保証します。`
      },
      {
        title: '骨伝導技術とは？',
        value: `皮膚と骨を通じた音声伝播技術です。骨伝導技術は安全で危険性がありません。鼓膜を傷つくことがなく、音楽が好きな方や長時間音声設備を付ける方にお勧めします。`
      },
      {
        title: 'MusicLensの音質はどうですか？',
        value: `MusicLensは従来と違った聴覚体験をお届けします。音質を保証し、鼓膜を傷つきません。`
      },
      {
        title: 'MusicLensのバッテリー持ち時間はどれくらいですか？',
        value: `使用モードでは8～12時間、スタンバイモードでは約48時間です。認証が完了次第正確なバッテリー持ち時間を公表します。`
      },
      {
        title: 'MusicLensで音楽を聴く方法は？',
        value: `BLUETOOTH接続で音楽を聴くことができ、音楽をMusicLensのメモリーカードに保存することもできます。MusicLensのファッション音楽モデルを購入した方には1年間のecho会員サービス、ベーシックモデルを購入した方には半年間のecho会員サービスをプレゼントします。「echo」APPを通じて、音楽をMusicLensにダウンロードすることができます。echoは若者のために生まれた音楽アプリである。新しい形の音楽とメディアサービスを提供していて、総勢3000万のユーザーがいます。`
      },
      {
        title: 'MitCoinを獲得するには？',
        value: `音楽ブロックチェン貨幣プラットフォーム「MusicLife」が開発した新しい概念です。音楽情報を提供する報酬としては「MitCoin」と名付けられている暗号通貨がもらえます。アクセス·ハードウェアを通じて収集した再生データは「この音楽は本当の人間に再生されている」ことを保証でき、MusicLifeが収集したデータの信頼性を保証できます。詳しくはMusicLifeのホームページ：www.musiclife.ioへご確認ください。`
      },
      {
        title: 'ナビ機能の使い方',
        value: `BLUETOOTH接続でナビの音声案内を使用することができます。次代MusicLensはナビ機能を搭載します。`
      },
      {
        title: 'ラジオを聴取する方法',
        value: `音量ボタンを押してラジオ聴取を開始します。ボリュームボタンでチャンネルをかえます。`
      },
      {
        title: '電話に出る方法',
        value: `着信音が鳴ったら、5秒で自動に電話にでます。手動で出たり拒否したりすることもできます。`
      },
      {
        title: '音漏れシステムは何ですか？',
        value: `MusicLensは特許技術を用いて、骨伝導技術による音漏れ問題を解決しました。この特許技術は音楽聴取の品質と通話のプライベート性を保証しました。`
      },
      {
        title: 'レンズの色を指定できますか？',
        value: `残念ながら、現在はまだできません。`
      },
      {
        title: '中国は配送地域内ですか？',
        value: `もちろんです！MusicLensの配送は世界範囲で行います。`
      },
      {
        title: '配送料金について',
        value: `中国内地、中国香港、中国マカオとアメリカへの配送は無料です。台湾地区、日本、韓国、カナダへの配送料金は2.99ドルです。イギリス、ヨーロッパ地域、オーストラリア、ニュージーランドへの配送料金は9.99ドルです。他の地域と国への配送料金は15ドルです。kickstarterの購入ページにて配送料金を確認できます。`
      },
      {
        title: 'MusicLensの配送サービスについて',
        value: `アメリカ地域はUSPS First Class、他の地域と国はUSPS国際First ClassでMusicLensを配送します。`
      },
      {
        title: 'MusicLensのお届け日時はいつですか？',
        value: `2018年8月までに世界範囲でMusicLensを配送します。第1回目の準備が整え次第、支援者の皆様に詳しい日時をお知らせいたします。他のお客様には、第2回目の準備が整え次第、詳しい日時をお知らせいたします。`
      },
      {
        title: 'アフターサービスについて',
        value: `1年間の保証サービスが付いています。`
      },
      {
        title: '自分に似合わなかったらどうすればいいですか？',
        value: `MusicLensは7日間交換、返品できます。`
      },
      {
        title: '注文修正できますか？',
        value: `できます。Kickstarterにて修正できます。`
      },
      {
        title: 'フレームの交換できますか？',
        value: `もちろんできます。7日間以内に郵送していただいて、無料でフレームの交換ができます。`
      },
      {
        title: '試着できますか？',
        value: `残念ながら、できません。Kickstarterのクーポンを利用してMusicLensを購入することをお勧めします。気に入られなかったら、7日間交換、全額返品できます。`
      },
      {
        title: '返品について',
        value: `MusicLensを購入して7日間（7日目を含む、商品が届いた日から計算）、商品とパッケージに不備がなかれば、全額返品できます。`
      }
    ]
  },
  About: {}
}

export default message
