export default {
  data() {
    return {
      pageLoader_isLoading: false
    }
  },
  methods: { 
    pageLoader_enableLoader() {
      this.pageLoader_isLoading = true
    },
    pageLoader_disableLoader() {
      this.pageLoader_isLoading = false
    }
  }
}