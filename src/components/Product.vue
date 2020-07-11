<template>
  <div class="md:w-1/2 lg:w-1/3 w-full p-4">
    <div
      id="product_div"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      v-on:click="toggleOverlay"
      class="relative shadow rounded w-fit-content mx-auto overflow-hidden"
    >
      <!-- scales the image on hover -->
      <img
        class="rounded transform transition-transform duration-300 ease-in-out cursor-pointer"
        v-bind:class="{ 'scale-105': hover }"
        v-bind:src="item.thumbnail.href"
        alt
      />
      <div class="absolute top-0 bg-white-alpha-80 w-full p-2 font-medium shadow">{{ item.name }}</div>
      <div
        class="absolute bottom-0 left-0 bg-black-alpha-80 m-4 text-white rounded shadow py-1 px-2"
      >
        <!-- ternary to conditionally render the price or price range -->
        {{
        item.price
        ? `$${item.price.regular}`
        : `$${item.priceRange.selling.low} - $${item.priceRange.selling.high}`
        }}
      </div>
      <!-- Makes sure that the link is visible on mobile -->
      <a
        class="absolute bottom-0 right-0 bg-white shadow mb-4 px-2 py-1 rounded-l transform transition-transform duration-300 ease-in-out"
        v-bind:class="{ 'lg:translate-x-32': !hover }"
        v-bind:href="item.links.www"
        target="_blank"
      >Go to Product</a>
    </div>
    <Overlay
      v-if="isOpen"
      v-bind:images="item.images"
      v-bind:toggleOverlay="toggleOverlay"
      v-bind:hero="item.hero"
    />
  </div>
</template>

<script>
import Overlay from "./Overlay";
export default {
  name: "Product",
  props: ["item"],
  components: {
    Overlay
  },
  data: () => {
    return {
      hover: false,
      isOpen: false
    };
  },
  methods: {
    toggleOverlay() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted: function() {
    // Some products have branding in the name and some do not. This would remove it from the ones that do.
    // this.item.name = this.item.name.replace("SpringHill Suites", "");
  }
};
</script>
