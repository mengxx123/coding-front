<template>
    <my-page title="JJEncode" :page="page">
        <div class="common-container container">
            <textarea class="form-control" v-model="code" rows="6" placeholder="要编码/解码的内容"></textarea>
            <div class="btns">
                <ui-raised-button class="btn" primary label="编码" @click="encode" />
                <ui-raised-button class="btn" secondary label="解码" @click="decode" />
            </div>
            <result :text="result" :copyable="true" />
        </div>
        <!-- <textarea class="form-control" v-model="result" rows="6" placeholder="结果" v-if="result" disabled></textarea> -->
    </my-page>
</template>

<script>
    import {encode, decode} from '../util/jjencode'
    console.log(encode)

    export default {
        data () {
            return {
                code: 'alert("I love JavaScript")',
                result: '',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/quoted_printable/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            },
            encode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的内容'
                    })
                    return
                }
                this.result = encode('$', this.code)
            },
            decode() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要编码/解码的内容'
                    })
                    return
                }
                this.result = decode(this.code)
            }
        },
        watch: {
            code() {
                this.result = null
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
