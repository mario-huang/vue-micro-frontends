<template>
  <div>
    <div>
      <a-menu v-model="current" mode="horizontal" theme="dark">
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="setting" />Navigation
          </span>
          <a-menu-item key="setting:1" @click="goApp1">打开App1</a-menu-item>
          <a-menu-item key="setting:2" @click="goApp2">打开App2</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"]
    };
  },
  methods: {
    goApp1() {
      console.log("111");
    },
    goApp2() {}
  }
};
</script>
