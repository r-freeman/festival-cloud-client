<template>
  <amplify-authenticator username-alias="email">
    <div>
      <MyNavBar />
      <b-container>
        <br />
        <b-row>
          <router-view />
        </b-row>
        <MyFooter />
      </b-container>
    </div>
  </amplify-authenticator>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyNavBar,
    MyFooter
  }
};
</script>

<style>
.error {
  color: #ff2255;
}
</style>
