<template>
    <my-page title="十六进制编码解码" :page="page">
        <div class="common-container container">
            <textarea class="form-control" v-model="code" rows="6" placeholder="要编码/解码的内容"></textarea>
            <div class="btns">
                <ui-raised-button class="btn" primary label="文本转十六进制" @click="encode" />
                <ui-raised-button class="btn" secondary label="十六进制转文本" @click="decode" />
            </div>
            <result :text="result" :copyable="true" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                code: '',
                charset: 'utf-8',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
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
                this.result = ''
                for (let i = 0; i < this.code.length; i++) {
                    var bin = this.code.charCodeAt(i).toString(16)
                    this.result += bin
                }
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的内容'
                    })
                    return
                }
                this.result = ''
                for (let i = 0; i < this.code.length; i += 2) {
                    var str = this.code.substr(i, 2) // 16 进制
                    var n = parseInt(str, 16) // 10 进制
                    this.result += String.fromCharCode(n)
                }
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
