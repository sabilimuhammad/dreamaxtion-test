import axiosPlugin from './axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import '@/assets/scss/style.scss';

const plugins = {
  install(Vue) {
    Vue.use(axiosPlugin);
    Vue.use(ElementUI, { locale } );
  },
};

export default plugins;
