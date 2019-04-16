<template>
    <el-row class="vertical-container">
        <el-col class="vertical-container">
            <el-col :span="8" class="align-items-center">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="登录名">
                        <el-input v-model="form.user"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>

    export default {
        name: "Login",
        data(){
            return {
                form: {
                    user: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit(){

            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
