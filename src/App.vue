<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  background: url('assets/bg_dot.png') center top 80px no-repeat fixed rgb(246, 247, 248);
}

body {
  margin: 0;
  display: block;
  background-color: #f5f7fb
}

a, li {
  text-decoration:none !important;
}
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a {
  color: inherit;
}

.navbar-brand {
  color: inherit;
  margin-right: 1rem;
  font-size: 1.25rem;
  white-space: nowrap;
  font-weight: 600;
  padding: 0;
  transition: .3s opacity;
  line-height: 2rem;
}
.navbar-brand-img {
  height: 3.5rem;
  line-height: 2rem;
  vertical-align: bottom;
  margin-right: .5rem;
  width: auto;
}

.menu, .wrapper, .el-menu {
  height: 100%;
}

.raven-container {
  max-width: 1200px;
}
.raven-container {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

.el-header {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #fff;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  z-index: 80;
}

.text-center {
  text-align: center !important;
}

.mr-3, .mx-3 {
  margin-right: 0.75rem !important;
}

.text-default {
  color: #495057 !important;
}

.text-muted {
  color: #9aa0ac !important;
}

.d-block {
  display: block !important;
}

.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
}

.avatar {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  display: inline-block;
  background: #ced4da no-repeat center/cover;
  position: relative;
  text-align: center;
  color: #868e96;
  font-weight: 600;
  vertical-align: bottom;
  font-size: .875rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
