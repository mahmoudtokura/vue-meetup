import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageMeetupDetail from '@/pages/PageMeetupDetail'
import PageMeetupFind from '@/pages/PageMeetupFind'
import PageNotFound from '@/pages/PageNotFound'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      { path: '/',
        name: 'PageHome',
        component: PageHome
      },
      {
        path: '/meetups/:id',
        name: 'PageMeetupDetail',
        component: PageMeetupDetail
      },
      {
        path: '/find',
        name: 'PageMeetupFind',
        component: PageMeetupFind
      },
      {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
      }
    ],
    mode: 'history'
})

export default router