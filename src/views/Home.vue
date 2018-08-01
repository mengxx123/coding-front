<template>
    <my-page title="编码解码">
        <div class="tool-list">
            <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                v-for="app in apps">
                <router-link class="link" :to="app.to" :href="app.href" :target="app.target">
                    <img :src="app.icon" class="img">
                    <div class="info">
                        <h3 class="text">{{ app.name }}</h3>
                        <div class="desc">{{ app.desc }}</div>
                    </div>
                    <i class="icon icon-heart"></i>
                </router-link>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                apps: [
                    {
                        name: '编码识别',
                        desc: '',
                        icon: '/static/img/coding.svg',
                        to: '/recognition'
                    },
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
                        name: 'Base 64 编码解码',
                        desc: '',
                        icon: '/static/img/base64.svg',
                        to: 'xxx',
                        href: 'https://base64.yunser.com/',
                        target: '_blank'
                    },
                    {
                        name: '图片⇆Base64',
                        desc: '',
                        icon: '/static/img/base64.svg',
                        to: 'xxx',
                        href: 'https://imagetool.yunser.com/base64',
                        target: '_blank'
                    },
                    {
                        name: '文件哈希值/MD5',
                        desc: '支持 MD5、SHA1 等散哈希算法',
                        icon: '/static/img/hash.svg',
                        to: '//hash/file'
                    },
                    {
                        name: '哈希算法',
                        desc: '',
                        icon: '/static/img/hash.svg',
                        to: '/hash'
                    },
                    {
                        name: 'ASCII 码对照表',
                        desc: '',
                        icon: '/static/img/base64.svg',
                        to: 'xxx',
                        href: 'https://code.yunser.com/asc2',
                        target: '_blank'
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
                        name: 'HTML 特殊符号',
                        desc: 'HTML 特殊符号对照表',
                        icon: '/static/img/html.svg',
                        to: 'xxx',
                        href: 'https://code.yunser.com/html/char',
                        target: '_blank'
                    },
                    {
                        name: '摩斯码编码解码',
                        desc: '',
                        icon: '/static/img/morse.svg',
                        to: 'xxx',
                        href: 'https://morse.yunser.com/',
                        target: '_blank'
                    },
                    {
                        name: 'UTF-8 编码解码',
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
                        name: '核心价值观编码',
                        desc: '',
                        icon: '/static/img/coding.svg',
                        to: '/core_values'
                    },
                    {
                        name: '文本转 ASCII',
                        desc: '',
                        icon: '/static/img/coding.svg',
                        to: '/text_to_asc2'
                    },
                    {
                        name: '二进制反码补码',
                        desc: '',
                        icon: '/static/img/coding.svg',
                        to: '/binary'
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
