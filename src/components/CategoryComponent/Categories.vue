<template>
  <div>
    <h1 class="title">Categories</h1>
    <div class="columns cover is-multiline is-mobile">
      <CategoryItem 
        v-for="category in categories"
        :key="category._id"
        :category="category" />
    </div>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryComponent/CategoryItem'
export default {
  components: {
    CategoryItem,
  },
  name: "Category",
  props: { 
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>