<template>
  <div>
    <h1>Number : {{ number }}</h1>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Counter",
  methods: {
    ...mapMutations({
      subCounter: "subCounter",
    }),
    ...mapActions({
      addCounter: "addCounter",
    }),
  },
  computed: {
    ...mapGetters({
      number: "getCounter",
    }),
  },
};
</script>

<style scoped>
</style>