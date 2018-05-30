import langs from './i18n/route.json'
import navConfig from './nav.config.json'

const LOAD_MAP = {
  'zh': name => {
    return r => require.ensure([], () =>
      r(require(`./views/zh/${name}.vue`)),
    'zh')
  },
  'en': name => {
    return r => require.ensure([], () =>
      r(require(`./views/en/${name}.vue`)),
    'zh')
  },
  'ja': name => {
    return r => require.ensure([], () =>
      r(require(`./views/ja/${name}.vue`)),
    'ja')
  }
}

const load = function (lang, path) {
  return LOAD_MAP[lang](path)
}

const registerRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/${ lang }`,
      redirect: `/`,
      component: load(lang, 'Index'),
      children: []
    })
    navs.forEach(nav => {
      addRoute(nav, lang, index)
    })
  })
  
  function addRoute(page, lang, index) {
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: page.name,
      component: load(lang, page.component)
    }
    route[index].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

// 默认路由 第一次进入 判断上次最后选择的语言  进行默认语言设置， 如没有选择 则默认为中文
let defaultLanguage = localStorage.getItem('MUSICLENS_LANGUAGE') || 'zh'
let defaultIndex = 0
langs.forEach((item, index) => {
  if (item.lang === defaultLanguage) {
    defaultIndex = index
  }
})
defaultLanguage = langs[defaultIndex].lang
let default1 = {...route[defaultIndex]}
default1.path = ''
let children = default1.children.map((item, index) => {
  var obj = Object.assign({}, item)
  obj.name = obj.name + 'default'
  return obj
})
localStorage.setItem('MUSICLENS_LANGUAGE', defaultLanguage)

default1.children = children
route.unshift(default1)

// 404页面
route = route.concat([{
  path: '*',
  redirect: '/'
}])

export default route