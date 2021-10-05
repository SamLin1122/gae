<template lang="pug">
HEADER
router-view
FOOTER
</template>

<script>
import HEADER from "./components/header.vue";
import FOOTER from "./components/footer.vue";

export default {
  name: "App",
  components: { HEADER, FOOTER },
};
</script>

<style></style>
