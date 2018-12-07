<template>
  <div id="app">
    <v-login></v-login>
  </div>
</template>

<script>
import vLogin from "./components/login";
export default {
  name: "App",
  components: { "v-login": vLogin }
};
</script>
