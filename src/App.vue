<template>
  <section>
    <Navbar />
    <Products :data="data" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./layout/Navbar";
import Products from "./components/Products";

export default {
  name: "App",
  components: {
    Navbar,
    Products
  },
  props: ["data"],
  methods: {
    ...mapActions(["turnOn"])
  },
  mounted: function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.turnOn();
    }
  }
};
</script>
