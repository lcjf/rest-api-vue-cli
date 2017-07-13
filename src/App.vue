<template>
    <div id="app">
        <header class="container main-header">
            <img src="http://placehold.it/1200x290" alt="">
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import './styles/style.scss';
</style>
