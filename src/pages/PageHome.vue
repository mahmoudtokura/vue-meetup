<template>
  <div>
    <AppHero />
    <Spinner v-if="pageLoader_isLoading"/>
    <div class="container" v-else>
      <section class="section">
      <div class="m-b-lg">
        <h1 class="title is-inline">Featured Meetups in "Location"</h1>
        <AppDropdown />
        <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
        <router-link to="/find" class="button is-primary is-pulled-right m-r-sm">All</router-link>
      </div>
      <!-- Meetup component -->
      <Meetups :meetups="meetups"/>
      </section>
      <section class="section">
        <!-- Categories component -->
        <Categories :categories="categories"/>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Categories from '@/components/CategoryComponent/Categories'
import Meetups from '@/components/MeetupComponent/Meetups'
import pageLoader from '../mixins/pageLoader'

  export default {
    components: {
      Meetups,
      Categories,
    },
    mixins: [pageLoader],
    computed: {
      ...mapGetters({
        meetups: ['meetups/getMeetups'],
        categories: ['categories/getCategories']
      }),
    },
    created () {
      this.pageLoader_enableLoader()
      Promise.all([this.fetchMeetups(), this.fetchCategories()])
      .then(() => {
        this.pageLoader_disableLoader()
      })
      .catch((error)=> {
        console.log(error)
        this.pageLoader_disableLoader()
      })
    },
    methods: {
      ...mapActions('meetups', ['fetchMeetups']),
      ...mapActions('categories', ['fetchCategories']),
    }
  }
</script>

<style scoped>
  
</style>
