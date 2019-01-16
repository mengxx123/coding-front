<template>
    <my-page title="Base 32 编码解码" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="要编码/解码的文本"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="编码" @click="encode" />
            <ui-raised-button class="btn" secondary label="解码" @click="decode" />
        </div>
        <result :text="result" :copyable="true" />
    </my-page>
</template>

<script>
    const {encode, decode} = require('guless-converter')

    export default {
        data () {
            return {
                code: '',
                result: '',
                page: {
                    menu: [
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // this.code = '1'
                // this.encode()
                // this.code = this.result
                // this.decode()
            },
            encode() {
                if (!this.code) {
                    alert('请填写要编码/解码的内容')
                    return
                }
                this.result = encode(this.code, 'base32')
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的内容'
                    })
                    return
                }
                this.result = decode(this.code, 'base32')
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
.charset {
    margin-top: 16px;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
.refer {
    margin-top: 16px;
    color: #999;
}
</style>
