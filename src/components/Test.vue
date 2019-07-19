<template>
    <div>
        <h1>{{title}}</h1>
        <h3>{{user.name}} 年龄：{{user.age}},性别：{{user.sex}}</h3>
        <h4 v-for="user in list">{{user.name}}</h4>
        <div v-bind:title="title">鼠标点击看一下</div>
        <div v-html="h"></div>
        <div v-text="title"></div>
        <form>
            <input v-model="title" type="text">
            <button @click="getMsg">点击</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return {
                title: "标题",
                user: {name: "向文山", age: 30, sex: "男"},
                list: [
                    {name: "向文山", age: 30, sex: "男"},
                    {name: "孙权", age: 30, sex: "男"},
                    {name: "孙尚香", age: 23, sex: "女"}
                ],
                h: "<h1>呵呵</h1>"
            }
        },
        methods: {
            getMsg: function () {
                alert(this.title + this.user.name)
                this.$http.get('/test').then(response => {
                    // get body data
                    this.title = response.body;
                }, response => {
                    // error callback
                    alert(response)
                });
            }
        },
        mounted(){
            console.info("this is mounted")
        }
    }

</script>
