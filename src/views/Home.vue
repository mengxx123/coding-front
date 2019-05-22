<template>
    <my-page title="编码解码" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '基础工具',
                        apps: [
                            {
                                name: '编码识别',
                                desc: '',
                                icon: '/static/img/coding_help.svg',
                                to: '/recognition'
                            },
                            {
                                name: '字符串转义',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: 'xxx',
                                href: 'https://code.yunser.com/escape',
                                target: '_blank'
                            },
                            {
                                name: '十六进制编辑器',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: 'xxx',
                                href: 'https://hexeditor.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '常用编码',
                        apps: [
                            {
                                name: 'Unicode 编码解码',
                                desc: '',
                                icon: '/static/img/coding_unicode.svg',
                                to: 'xxx',
                                href: 'https://unicode.yunser.com/coding',
                                target: '_blank'
                            },
                            {
                                name: 'URL 编码解码',
                                desc: '',
                                icon: '/static/img/url.svg',
                                to: 'xxx',
                                href: 'https://url.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '文件转 Base64',
                                desc: '',
                                icon: '/static/img/base64.svg',
                                to: 'xxx',
                                href: 'https://demo2.yunser.com/coding/base64.html',
                                target: '_blank'
                            },
                            {
                                name: '图片 ⇆ Base64',
                                desc: '',
                                icon: '/static/img/base64.svg',
                                to: 'xxx',
                                href: 'https://imagetool.yunser.com/base64',
                                target: '_blank'
                            },
                            {
                                name: 'Base 64',
                                desc: '',
                                icon: '/static/img/base64.svg',
                                to: '/base64'
                            },
                            {
                                name: 'Base 32',
                                desc: '',
                                icon: '/static/img/base64.svg',
                                to: '/base32'
                            },
                            {
                                name: 'Base 16',
                                desc: '',
                                icon: '/static/img/base64.svg',
                                to: '/base16'
                            },
                            // {
                            //     name: '文件哈希值/MD5',
                            //     desc: '支持 MD5、SHA1 等散哈希算法',
                            //     icon: '/static/img/hash.svg',
                            //     to: 'xxx',
                            //     href: 'https://encrypt.yunser.com/',
                            //     target: '_blank'
                            // },
                            // {
                            //     name: '哈希算法',
                            //     desc: '',
                            //     icon: '/static/img/hash.svg',
                            //     to: 'xxx',
                            //     href: 'https://encrypt.yunser.com/hash/file/',
                            //     target: '_blank'
                            // },
                            {
                                name: 'ASCII 码对照表',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: 'xxx',
                                href: 'https://code.yunser.com/asc2',
                                target: '_blank'
                            },
                            {
                                name: '摩斯码',
                                desc: '',
                                icon: '/static/img/morse.svg',
                                to: '/morse'
                            },
                            {
                                name: 'UTF-8',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/utf8'
                            },
                            {
                                name: '编码转换',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/charset/convert'
                            },
                            {
                                name: '文本转 ASCII',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/text_to_asc2'
                            },
                            {
                                name: 'Unicode',
                                desc: '',
                                icon: '/static/img/coding_unicode.svg',
                                to: 'xxx',
                                href: 'https://unicode.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '代码',
                        apps: [
                            {
                                name: 'AAEncode',
                                desc: '',
                                icon: '/static/img/coding_code.svg',
                                to: '/aaencode'
                            },
                            {
                                name: 'JJEncode',
                                desc: '',
                                icon: '/static/img/coding_code.svg',
                                to: '/jjencode'
                            },
                            {
                                name: 'JsFuck',
                                desc: '',
                                icon: '/static/img/coding_code.svg',
                                to: '/jsfuck'
                            }
                        ]
                    },
                    {
                        name: '其他编码',
                        apps: [
                            {
                                name: '二进制编码解码',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/binary_convert'
                            },
                            {
                                name: '二进制反码补码',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/binary'
                            },
                            {
                                name: '十六进制编码解码',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/hex'
                            },
                            {
                                name: 'HTML 编码解码',
                                desc: 'HTML 特殊符号对照表',
                                icon: '/static/img/html.svg',
                                to: 'xxx',
                                href: 'https://html.yunser.com/coding',
                                target: '_blank'
                            },
                            {
                                name: 'HTML 特殊符号',
                                desc: 'HTML 特殊符号对照表',
                                icon: '/static/img/html.svg',
                                to: 'xxx',
                                href: 'https://code.yunser.com/html/char',
                                target: '_blank'
                            },
                            {
                                name: '核心价值观编码',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/core_values'
                            },
                            {
                                name: 'Quoted-Printable',
                                desc: '',
                                icon: '/static/img/coding.svg',
                                to: '/quoted_printable'
                            },
                            {
                                name: 'Escape',
                                desc: 'Escape 编码解码',
                                icon: '/static/img/coding.svg',
                                to: '/escape'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=coding',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=coding',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        cursor: pointer;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
