const dev = process.env.NODE_ENV !== 'production'
//备案地址
export const MIIT_BEIAN = 'http://www.miitbeian.gov.cn'

//請求地址
export const DEV_DOMAIN = 'http://localhost:7654/';
export const DEV_DOMAIN_4322 = 'http://localhost:4322/';
export const MY_BLOG = dev ? DEV_DOMAIN_4322 : 'http://www.liuweibo.cn'
export const ONLINE_DOMAIN = MY_BLOG + ':7654';
export const ONLINE_GITBOOK = MY_BLOG + ':4321';
export const LINK_ABOUT_ME = MY_BLOG + 'p/146';


//github地址
export const GITHUB_ADDRESS = 'https://github.com/Weibozzz/next-blog';
export const TOP_TIPS = 'next服务端渲染博客正在重构和开发中......'
//分页数
export const pageNum = 10;
export const TITLE = 'title'
export const ALL = 'all'

//导航路由
export const INDEX = '/'
export const INDEX_TXT = '网站首页'
export const BLOG = '/Blog'
export const BLOG_TXT = '文章列表'
export const ADMIN = '/Admin'
export const ADMIN_TXT = '后台管理'
export const LIFE = '/Life'
export const LIFE_TXT = '生活记录'
export const ABOUT = '/About'
export const ABOUT_TXT = '关于我'
export const POST_ARTICLE = '/PostArticle'
export const POST_ARTICLE_TXT = '发布文章'
export const DOCS_TXT = '文档中心'

//seo
export const COMMON_TITLE = '刘伟波-天天向上'
export const INDEX_TITLE = '刘伟波的个人网站'
export const INDEX_ENGLISH = 'Liu WeiBo\'s Personal Website'
export const KEYWORDS = '刘伟波, 个人网站,个人博客,  web前端'
export const Description = '刘伟波的个人网站，刘伟波的技术作品，刘伟波的生活成长'

//首页背景
export const BG_INDEX = [
  {
    key: '西安钟楼',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646533823&di=d1854fda2bb5d7d70d2b715c2ec05238&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180103%2Fb01e4dce16114060bc52bdb3288f7352.jpeg'
  },
  {
    key: '上海东方明珠',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646391234&di=1cdbfbdc9b1f4fcf423e915e4db7a504&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1309%2F08%2Fc13%2F25403453_1378612597227.jpg'
  },
  {
    key: '华山',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646684183&di=463eb7c844e05717779305ff364fab52&imgtype=0&src=http%3A%2F%2Ffile31.mafengwo.net%2FM00%2F5A%2F76%2FwKgBs1dA8JqAHVD-ABm1p79fL4w20.jpeg'
  },
  {
    key: '明德楼',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646741490&di=151a14e19e0338506385674a8b60cd39&imgtype=0&src=http%3A%2F%2Fi8.qhimg.com%2Ft01abe458c044f86c7f.jpg'
  },
  {
    key: '韩城古城',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532241502&di=4cd423f68d0c918ff4c1b22c30c158de&imgtype=jpg&er=1&src=http%3A%2F%2Fimgk.zol.com.cn%2Fdcbbs%2F10364%2Fa10363582.jpg'
  },
  {
    key: '韩城司马迁',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646839303&di=21fb213bd0db500738f41a259e966d19&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170731%2Fbfdffa2d0de04bd69da78987e6fe557d_th.png'
  },
  {
    key: '韩城美食',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646911000&di=a26a9a391b5906d908bbdecd5ed9373d&imgtype=0&src=http%3A%2F%2Fp1.pccoo.cn%2Fyp%2F20131021%2F201310211536103932.jpg'
  },
]
//首页切换时间
export const defaultTimer = 10000;
//关于我
export const commentPlaceHolder = '欢迎提出您在使用过程中遇到的问题或宝贵建议（400字以内），感谢您对博主的支持。(必填)'
//文章分类图片icon
export const ARTICLE_TYPE_ICON = {
  vue: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898804960&di=bb204eb57425de2ad3ea2cb6d1358df2&imgtype=0&src=http%3A%2F%2Fimage.evget.com%2Fimages%2Farticle%2F2016%2FJavascriptky-3.png',
  js: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899278471&di=cf1e2753bbc588c0bc464c78a4d212fd&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4610b912c8fcc3ced0c353279a45d688d43f20a6.jpg',
  node: 'http://p3.so.qhmsg.com/bdr/200_200_/t016cf3f2122f3fea98.png',
  react: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4217379483,208217009&fm=27&gp=0.jpg',
  h5: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899317728&di=ce75860f4ce734fdbaa75ac46ac9541c&imgtype=0&src=http%3A%2F%2Fimg2.donews.com%2F2014%2F1117%2F75136433.jpg',
  css: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899340281&di=1da2d46a754250dd998cc350d712721e&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F004kTKjwzy6WlEAPznv25%26690',
  angular: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899186529&di=2ab6317937e397e54a573f149afbded5&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2015%2F07%2F10%2Fcf3703b1280a5680e9c833ed191d5638.jpg',
  php: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899359741&di=20e63930f8dc3a384e377846173d65e1&imgtype=0&src=http%3A%2F%2Fpx.thea.cn%2FPublic%2FUpload%2F2893678%2FIntro%2F1473304881.jpg',
  mysql: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494114&di=d7a904bf9cca31fc01ee38465c59a85a&imgtype=jpg&er=1&src=http%3A%2F%2Fs3.sinaimg.cn%2Flarge%2F002CwWVCzy6MMjHltCi62',
  server: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899560408&di=10405259462a1bc63c257f9183fd85a1&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk2%2FM02%2F5D%2FD6%2FwKhQxVfI4gSEHICVAAAAADw6QqA997.jpg',
  interesting: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899490315&di=cde9b22f2ac8bda254f6838419cfe61c&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_14_1%2Fa2t5fm9607718748992.jpg',
  fight: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899419656&di=9fd12f388d86e990014516f101ab28c7&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft253%2F89%2F336734149%2F67826%2Fbc5eeb58%2F53e9ced2N8472b3d1.jpg%2521q70.jpg',
  others: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899523703&di=1b6438eb70ce2ae0a8e1df64774c4bce&imgtype=0&src=http%3A%2F%2Fwww.cidianwang.com%2Ffile%2F2017412%2F201741285824464.jpg'
}
//生活部分图片
export const LIFE_IMAGE = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063149&di=53e2bb1c3edc9d5a9646b9a97cc2ff94&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1706%2F25-1F605093625.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=527129ef93dc3d55a68b603bb98e16a9&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F96-1FF1151Q0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=b199a98890734ffc50b64f7efaaa3d33&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-1609301I647.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063162&di=32d77d92542052e1fcec437153d62204&imgtype=0&src=http%3A%2F%2Fwww.zgnhzx.com%2FUploadFiles%2Ftalent%2F2016%2F12%2F201612190924565895.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900237921&di=d645ba5b24d0e1f00d3f80368190d06e&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-16092Q25947-50.jpg',

  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494978&di=641a9b9604ba88e1963f18f89ae882bb&imgtype=jpg&er=1&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F001OQ1Ugty6Nlz6m70y4e%26amp%3B690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900281046&di=d69ee49f0ea3c15c7f0483f98e489b4e&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F8ee3e0acxb0171b491f27%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532495027&di=4d3f70886405dd11d3740539b656ba26&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.baizhan.net%2Fuploads%2Fallimg%2F171106%2F47_171106115211_1.png',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900324719&di=bbda13a0a0245f13c561d32cad6717da&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161013%2Fe4be947df7304b77bf96c7b60aeb06c4_th.jpg',
  'http://youimg1.c-ctrip.com/target/tg/726/811/170/9f4eedef3f664f798ea0846041b4fad8.jpg',

  'http://pic18.nipic.com/20111213/3752183_140830948000_2.jpg',
  'http://img8.zol.com.cn/bbs/upload/23566/23565123.jpg',
  'http://p1.so.qhmsg.com/t0101bc5934a0f24496.jpg',
  'http://p5.so.qhimgs1.com/sdr/200_200_/t010042e1ab48b0e8bb.jpg',
  'http://img15.3lian.com/2015/h1/308/d/130.jpg',

  'http://pic1.win4000.com/wallpaper/8/59360eb9ec476.jpg',
  'http://img.mp.sohu.com/upload/20170808/544c7191626b42ce8b76c157edb6d725_th.png',
  'http://pic22.nipic.com/20120725/8333799_081850001333_2.jpg'

];
//发布文章分类
export const POST_ARTICLE_TYPE = [
  {key: "h5", value: " html"},
  {key: "css", value: " css"},
  {key: "js", value: " javascript"},
  {key: "vue", value: " vue"},
  {key: "react", value: " react"},
  {key: "angular", value: " angular"},
  {key: "node", value: " node"},
  {key: "php", value: " php"},
  {key: "mysql", value: " mysql"},
  {key: "server", value: " 服务器之类"},
  {key: "interesting", value: " 生活喜好"},
  {key: "fight", value: " 激励向上"},
  {key: "others", value: " 其他"},
];



//发布文章版权
export const POST_ARTICLE_COPY = `
      
作者：刘伟波

链接：[http://www.liuweibo.cn/Blog](http://www.liuweibo.cn/Blog)

来源：[刘伟波博客](http://www.liuweibo.cn/Blog)

本文原创版权属于刘伟波 ，转载请注明出处，谢谢合作
      `;