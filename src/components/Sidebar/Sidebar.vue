<template>
    <div class="sidebar">
        <el-row class="tac">
            <el-col style="height: 93vh;">
                <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="isCollapse" unique-opened router>
                    <template v-for="item in items">
                        <template v-if="item.subs">
                            <el-submenu :index="item.index" :key="item.index">
                                <template slot="title">
                                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                                </template>
                                <template v-for="subItem in item.subs">
                                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                        <template slot="title">{{ subItem.title }}</template>
                                        <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                            {{ threeItem.title }}
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                        {{ subItem.title }}
                                    </el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.index" :key="item.index">
                                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        props:['isCollapse'],
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-document',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'user',
                        title: '用户管理'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-document',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'icon',
                        title: '自定义图标'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'el-icon-document',
                        index: '6',
                        title: '拖拽组件',
                        subs: [
                            {
                                index: 'drag',
                                title: '拖拽列表',
                            },
                            {
                                index: 'dialog',
                                title: '拖拽弹框',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: '7',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    };
</script>
