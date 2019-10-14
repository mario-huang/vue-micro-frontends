<template>
  <div>
    <a-menu v-model="current" mode="horizontal" theme="dark">
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />Navigation
        </span>
        <a-menu-item key="setting:1">打开App1</a-menu-item>
        <a-menu-item key="setting:2">打开App2</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>
