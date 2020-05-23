<template>
  <div class="row columns is-multiline">
    <MeetupItem 
      v-for="meetup in meetups"
      :key="meetup._id"
      :meetup="meetup"/>
  </div>
</template>

<script>
import MeetupItem from '@/components/MeetupComponent/MeetupItem'
export default {
  components: { MeetupItem },
  props: {
    meetups: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>