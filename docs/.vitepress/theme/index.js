import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../styles/index.scss'
import Demo from '../components/demo/index.vue'
// import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  // 其他主题配置
  // extends: DefaultTheme,
  // Layout: Layout, // 每个页面的根布局组件，会把DefaultTheme的覆盖， 可搭配extends使用
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
    app.component('Demo', Demo)
  }
};