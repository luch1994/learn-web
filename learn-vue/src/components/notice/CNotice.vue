<template>
    <div class="box" v-if="isShow">
        <h2 v-if="title">{{title}}</h2>
        <p v-if="message" class="content">{{message}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        message: {
            type: String,
            default: ""
        },
        duration: {
            type: Number,
            default: 1200
        }
    },
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);
        },
        hide() {
            this.isShow = false;
        }
    }
};
</script>
<style scoped>
.box {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
    background-color: #fff;
    border: grey 3px solid;
    box-sizing: border-box;
}
</style>