import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostList from '@/components/post-list'
import SinglePost from '@/components/single-post'

// import postListTemplate from '@/components/post-list-template'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/posts',
            name: 'PostList',
            component: PostList
        },
        {
            path: ':postSlug',
            name: 'SinglePost',
            component: SinglePost
        }
    ]
})
