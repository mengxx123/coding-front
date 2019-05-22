<template>
    <my-page title="编码识别" :page="page">
        <div class="common-container container">
            <textarea class="form-control" v-model="code" rows="6" placeholder="编码内容"></textarea>
            <div class="btns">
                <ui-raised-button class="btn" primary label="识别" @click="recognize" />
            </div>
            <result :text="result" :copyable="false" />
        </div>
        <!-- <textarea class="form-control" v-model="result" rows="6" placeholder="转换结果" v-if="result"></textarea> -->
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                code: '',
                result: '',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            // debug
            this.code = '\\u8fd9\\u662f\\u6817\\u5b50'
            // this.code = '0x03,0x9f,0x25'
            // this.code = '0x03 0x9f  0x25'
            // this.code = '\\x78\\x78 '
            // this.code = '%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88'
            // this.code = '&#913;&#914;'
            // this.code = '友善爱国爱国友善平等友善敬业敬业敬业诚信自由公正敬业爱国友善自由友善敬业诚信自由自由友善平等友善平等爱国富强友善爱国自由友善平等敬业爱国爱国'
            // this.code = '=E8=BF=99=E6=98=AF=E4=BB=80=E4=B9=88'
            // this.code = '.---- ..---'
            // this.recognize()
        },
        methods: {
            recognize() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请填写要转换的内容'
                    })
                    return
                }
                console.log(this.code.match(/^(\\%[0-9A-F]{2})+$/))
                if (this.code.match(/^(\\u[0-9a-f]{4})+$/)) {
                    this.result = '这是 Unicode 编码'
                } else if (this.code.match(/^(%u[0-9a-f]{4})+$/)) {
                    this.result = '这是 Escape 编码'
                } else if (this.code.match(/^(%[0-9A-F]{2})+$/)) {
                    this.result = '这是 URL 编码'
                } else if (this.code.match(/^(&#[0-9]{3,5};)+$/)) {
                    this.result = '这是 HTML 码'
                } else if (this.code.match(/^([富强民主文明和谐自由平等公正法治爱国敬业诚信友善])+$/)) {
                    this.result = '这是核心价值观编码'
                } else if (this.code.match(/^(=[0-9A-F]{2})+$/)) {
                    this.result = '这是可打印字符引用编码 （quoted-printable 编码）'
                } else if (this.code.match(/^[ -.]+$/)) {
                    this.result = '这是摩斯码'
                } else if (this.code.match(/^(0x[0-9a-f]+,)+$/)) {
                    this.result = '这是十六进制数'
                } else if (this.code.match(/^(0x[0-9a-f]+\s+)+$/)) {
                    this.result = '这是十六进制数'
                } else if (this.code.match(/^(\\x[0-9a-f]+\s*)+$/)) {
                    this.result = '这是 16 进制的 ASCII 码'
                } else if (this.code.match(/^[0-9a-zA-Z]+=+$/)) {
                    this.result = '没有识别结果。有可能是一个 BASE 编码（Base64、Base32 等）'
                } else if (this.code.match(/^[0-9a-fA-F]{32}$/)) {
                    this.result = '没有识别结果。有可能是一段哈希值（比如 MD5、SHA1 等）。'
                } else if (this.code.match(/^[0-9a-fA-F]{32}$/)) {
                    this.result = '没有识别结果。有可能是一段哈希值（比如 SHA256 等）。'
                } else {
                    this.result = '没有识别结果。欢迎给我们反馈，帮助我们做得更好。'
                }
                // if (this.code.test(/^\\u[0-9a-f]{4}+$/)) {
                //     console.log('unicode')
                // }
                // this.result = this.code.replace(/[^\u0000-\u00FF]/g, function ($0) {
                //     return escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;')
                // })
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
