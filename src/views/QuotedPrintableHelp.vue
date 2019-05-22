<template>
    <my-page title="Quoted-Printable - 帮助" backable>
        <div class="common-container container">
            <ui-article class="article">
                <h2>工具介绍</h2>
                <p>在所有邮件处理的各式各样的编码中，很多编码的目的都是通过编码手段使得七位字符的邮件协议体系可以传送八位的二进制文件、双字节语言文字等等。 Quoted-Printable也是这样一些编码中的一个， 它的目的同样是帮助非ASCII 编码的信件传输通过 SMTP。Quoted-Printable 编码是字符对应的编码，每个未编码的二进制字符被编码成三个字符，即一个等号和一个十六进制的数字，如“A8”。</p>
            </ui-article>
        </div>
    </my-page>
</template>

<style lang="scss" scoped>
.article {
    max-width: 800px;
}
</style>
