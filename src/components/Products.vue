<template>
  <div class="w-full">
    <div class="flex flex-wrap w-90p mx-auto max-w-screen-lg">
      <!-- Takes the data array and created a Product component for each object.  Item.id for the key-->
      <Product v-for="item in data.groups" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Products",
  props: ["data"],
  components: {
    Product,
  },
};
</script>
