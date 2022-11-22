<script>
import SiteHeader from "./components/SiteHeader.vue"
import SiteMain from "./components/SiteMain.vue"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain
  }
}
</script>

<template>
  <SiteHeader />
  <SiteMain />

  <div id="site_footer">
    <!-- site footer dinamico -->
  </div>
  <!-- /#site_footer -->
</template>

<style lang="scss" scoped>

</style>