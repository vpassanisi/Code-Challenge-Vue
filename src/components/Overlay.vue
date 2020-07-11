<template>
  <div
    class="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 h-full w-full bg-black-alpha-70 z-10"
    v-on:click="toggleOverlay()"
  >
    <div v-on:click.stop class="relative bg-white z-20 shadow w-full py-4 px-8">
      <!-- Condisional render because some of the products do not have extra images, so use the hero image -->
      <Carousel
        v-if="images.length >= 1"
        :perPage="1"
        :navigationEnabled="true"
      >
        <Slide v-for="(image, index) in images" v-bind:key="index">
          <img class="mx-auto" v-bind:src="image.href" alt />
        </Slide>
      </Carousel>
      <Carousel v-else :perPage="1" :navigationEnabled="true">
        <Slide>
          <img class="mx-auto" v-bind:src="hero.href" alt />
        </Slide>
      </Carousel>
      <button class="absolute flex top-0 right-0" v-on:click="toggleOverlay()">
        <i class="material-icons text-4xl">clear</i>
      </button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Overlay",
  props: ["images", "toggleOverlay", "hero"],
  components: {
    Carousel,
    Slide,
  },
};
</script>
