<template>
  <div
    class="flex flex-row items-center justify-center h-16 w-full bg-gray-400 dark:bg-gray-500 shadow"
  >
    <div class="flex flex-row h-full justify-end w-90p">
      <button
        class="px-2 hover:bg-gray-300 transition-colors duration-300 ease-in-out focus:outline-none"
        v-on:click="toggleDarkMode"
      >
        <i v-if="darkMode" class="material-icons">brightness_7</i>
        <i v-else class="material-icons">brightness_4</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["turnOn", "turnOff"]),
    toggleDarkMode() {
      this.darkMode ? this.turnOff() : this.turnOn();
    }
  },
  computed: mapState({
    darkMode: state => state.darkMode.darkMode
  })
};
</script>
