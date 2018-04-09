<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import UpdateToast from '@/components/UpdateToast';

export default {
    name: 'app',
    components: {
        UpdateToast,
        AppHeader,
        AppSidebar
    },
    computed: {
        ...mapState('pageTransition', {
            pageTransitionType: state => state.type,
            pageTransitionEffect: state => state.effect
        }),

        ...mapState('appShell/appHeader', {
            appHeaderShow: state => state.show
        }),

        pageTransitionClass() {
            return `transition-${this.pageTransitionType}`;
        }
    },
    methods: {
        ...mapActions('appShell/appSidebar', [
            'showSidebar',
            'hideSidebar'
        ]),
        ...mapActions('appShell/common', [
            'setPageSwitching'
        ]),
        handleBeforeEnter(el) {
            this.setPageSwitching(true);
        },
        handleAfterEnter(el) {
            this.setPageSwitching(false);
        },
        handleClickHeaderBack() {
            this.$router.go(-1);
        },
        handleClickHeaderMenu() {
            this.showSidebar();
        },
        handleHideSidebar() {
            this.hideSidebar();
        },
        handleShowSidebar() {
            this.showSidebar();
        }
    }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/variable'
#app
    position relative
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
</style>
