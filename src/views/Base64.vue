<template>
    <my-page title="Base64 编码解码" :page="page">
        <div class="common-container container">
            <textarea class="form-control" v-model="code" rows="6" placeholder="要编码/解码的文本"></textarea>
            <div class="btns">
                <ui-raised-button class="btn" primary label="编码" @click="encode" />
                <ui-raised-button class="btn" secondary label="解码" @click="decode" />
            </div>
            <result :text="result" :copyable="true" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const encode = require("guless-converter").encode
    const decode = require("guless-converter").decode

    export default {
        data () {
            return {
                code: '',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/base64/help'
                        }
                    ]
                }
            }
        },
        methods: {
            encode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的内容'
                    })
                    return
                }
                this.result = encode(this.code, 'base64')
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要解码/解码的内容'
                    })
                    return
                }
                this.result = decode(this.code, 'base64')
            }
        }
    }
</script>

<style lang="scss" scoped>
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 33px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
</style>
