<template>
    <el-row class="raven-container Header">
        <el-col :span="16">
            <a class="navbar-brand" @click="changeCollapse">
                <img src="@/assets/logo-text.png" alt="Vertical" class="navbar-brand-img">
            </a>
        </el-col>
        <el-col :span="8">
            <el-dropdown style="padding-top: .6rem;">
                <el-row style="cursor:pointer;">
                    <el-col :span="8" class="mr-3">
                        <div class="avatar avatar-md" :style="{backgroundImage:'url('+ user.userAvatar +')'}"/>
                    </el-col>
                    <el-col :span="12">
                        <div class="text-default" style="padding-top: .5rem;">{{user.userName}}</div>
                    </el-col>
                </el-row>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人主页</el-dropdown-item>
                    <el-dropdown-item>消息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        props: {
            user:{
                userName: '',
                userAvatar:''
            }
        },
        data(){
            return {
            }
        },
        methods:{
            changeCollapse(){
                this.$emit("toggleCollapse");
            }
        }
    };
</script>
