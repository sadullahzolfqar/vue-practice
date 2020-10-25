<template>
  <PreLoader/>
  <div id="pcoded" class="pcoded">
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
        <TopBar/>
        <div class="pcoded-main-container">
            <div class="pcoded-wrapper">
                <SideBar/>
                <Container/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PreLoader from "./components/PreLoader.vue";
import TopBar from "./components/TopBar.vue";
import SideBar from "./components/SideBar.vue";
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    PreLoader,
    TopBar,
    SideBar,
    Container
  }
};
</script>

<style>
#app {

}
</style>
