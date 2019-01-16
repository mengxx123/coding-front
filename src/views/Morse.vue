<template>
    <my-page title="摩斯码" :page="page">
        <ui-text-field  v-model="text" hintText="请输入文字或摩斯码" multiLine :rows="4" :rowsMax="4" />
        <br>
        <ui-text-field class="option-input" v-model="long" label="嗒（长）" />
        <ui-text-field class="option-input" v-model="short" label="滴（短）" />
        <ui-text-field class="option-input" v-model="space" label="分隔" />
        <div class="btns">
            <ui-raised-button class="btn" label="编码" primary title="文字转摩斯码" @click="encode" />
            <ui-raised-button class="btn" label="解码" secondary title="摩斯码转文字" @click="decode" />
        </div>
        <div class="result" v-if="result">
            {{ result }}
        </div>
        <div class="btns" v-if="result">
            <ui-raised-button class="btn btn-copy" label="复制结果" />
            <ui-raised-button class="btn" label="播放声音" @click="playAudio" v-if="isEncode" />
        </div>
    </my-page>
</template>

<script>
    const ClipboardJS = window.ClipboardJS
    const xmorse = require('xmorse')
    const morsify = require('morsify')

    export default {
        data () {
            return {
                text: '',
                result: '',
                long: '-',
                short: '.',
                space: ' ',
                isEncode: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'info',
                            href: 'https://project.yunser.com/products/ad9097705c5511e888a50737631f72f2',
                            target: '_blank'
                        },
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/morse/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.clipboard = new ClipboardJS('.btn-copy', {
                text: trigger => {
                    return this.result
                }
            })
            this.clipboard.on('success', e => {
                this.$message({
                    type: 'success',
                    text: '已复制'
                })
                console.info('Action:', e.action)
                console.info('Text:', e.text)
                console.info('Trigger:', e.trigger)
                e.clearSelection()
            })
            this.clipboard.on('error', e => {
                console.error('Action:', e.action)
                console.error('Trigger:', e.trigger)
            })
            // this.text = 'yunser'
            // this.encode()
        },
        destroyed() {
            this.clipboard.destroy()
        },
        methods: {
            encode() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入要转换成摩斯码的内容'
                    })
                    return
                }
                this.result = xmorse.encode(this.text, {
                    long: this.long,
                    short: this.short,
                    space: this.space
                })
                this.isEncode = true
            },
            decode() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入摩斯码'
                    })
                    return
                }
                this.result = xmorse.decode(this.text, {
                    long: this.long,
                    short: this.short,
                    space: this.space
                })
                this.isEncode = false
            },
            playAudio() {
                var audio = morsify.audio(this.text)
                audio.play()
                console.log(audio)
                // audio.stop()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
        }
    }
    .result {
        width: 256px;
        margin-bottom: 16px;
        padding: 16px;
        font-size: 20px;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }
</style>
<style lang="scss">
    .option-input {
        width: 76px;
        margin-right: 8px;
        input {
            font-size: 24px;
        }
    }
</style>