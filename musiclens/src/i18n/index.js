import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 导入多语言版本
import zh from './zh.js'
import en from './en.js'
import ja from './ja.js'

Vue.use(VueI18n)

const messages = {
  zh: zh,
  en: en,
  ja: ja
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})

export default i18n
