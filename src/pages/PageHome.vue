<template>
  <div>
    <AppHero />
    <div class="container">
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
import axios from 'axios';

import Categories from '@/components/CategoryComponent/Categories'
import Meetups from '@/components/MeetupComponent/Meetups'
  export default {
    components: {
      Meetups,
      Categories,
    },
    data() {
      return { 
        meetups: [],
        categories: [],
      }
    },
    created() {
      axios.get('/api/v1/categories')
      .then(response => {
        this.categories = response.data;
      }),

      axios.get('/api/v1/meetups')
      .then(response => {
        this.meetups = response.data
      })
    }
  }
</script>

<style scoped>
  
</style>
