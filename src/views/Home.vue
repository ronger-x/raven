<template>
    <el-container class="wrapper home">
      <el-header style="height: 7vh;">
        <Header @toggleCollapse="toggleCollapse" :user="user"></Header>
      </el-header>
      <el-container style="height: 93vh;">
        <el-aside width="200px">
          <Sidebar :isCollapse="isCollapse"></Sidebar>
        </el-aside>
        <el-main>
          <el-row>
            <el-col>
              <Tags></Tags>
            </el-col>
            <el-col>
              <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                  <router-view style="height: 88vh;"></router-view>
                </keep-alive>
              </transition>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
  /* eslint-disable no-console */

  // @ is an alias to /src
import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Tags from '@/components/Tags/Tags.vue';
import "@/assets/css/dashboard.css";
import bus from '@/plugins/bus';
export default {
  name: 'home',
  data(){
    return {
      user:{
        userName: '王小二',
        userAvatar: 'https://img.hacpai.com/avatar/1429237272905_1483064274321.undefined'
      },
      activeIndex: '1',
      isCollapse:false,
      tagsList: []
    }
  },
  components: {
    Header,Sidebar,Tags
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse(){
      let isColl = false;
      if(!this.isCollapse){
        isColl = true;
      }
      this.$set(this,"isCollapse",isColl);
    }
  },
  created(){
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = [];
      for(let i = 0, len = msg.length; i < len; i ++){
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  }
}
</script>

<style scoped>
  .el-main {
    padding:0;
  }
</style>
