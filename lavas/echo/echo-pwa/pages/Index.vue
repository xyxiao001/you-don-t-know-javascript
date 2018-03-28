<template>
  <div>
    <pull>
      <div class="content">
        <div>
          <h2 v-for="(item, index) in 15">echo {{item}}</h2>
        </div>
      </div>
    </pull>
    <app-footer-nav></app-footer-nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import AppFooterNav from '../components/AppfooterNav'
import Pull from '../components/Pull'

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        title: 'echo',
        showMenu: true,
        showBack: false,
        showLogo: false,
        actions: [
            {
                icon: 'search',
                route: '/search'
            }
        ]
    });
}

export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: 'echo',
        meta: [
            {name: 'keywords', content: 'echo'},
            {name: 'description', content: 'echo 首页'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    components: {
      AppFooterNav: AppFooterNav,
      Pull: Pull
    }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
    // align-items center
    justify-content center
    padding-bottom: 60px;
    flex-wrap wrap
    h2
        font-size 46px
        font-weight 500
</style>
