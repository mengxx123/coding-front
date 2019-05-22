<template>
    <my-page title="摩斯码 - 帮助" backable>
        <div class="common-container container">
            <ui-article class="article">
                <h2>工具介绍</h2>
                <p>本工具仅支持 Unicode（包括中文）的摩斯码编码、解码。</p>
                <p>-...------.--..-/--..--...-.----/-..---........./-.-..-----..-.-/-.----.-..-----/-...-.----.---.-</p>
                <p>摩尔密码加密的字符只有字符，数字，标点，不区分大小写，<strong>支持中文汉字</strong>。</p>
                <h2>摩斯码介绍</h2>
                <p>摩尔斯电码（Morse alphabet）（又译为摩斯电码）是一种时通时断的信号代码，这种信号代码通过不同的排列顺序来表达不同的英文字母、数字和标点符号等。
                </p>
                <p>由美国人摩尔斯（Samuel Finley Breese Morse）于1837年发明，为摩尔斯电报机的发明（1835年）提供了条件。</p>

                <h2>莫尔斯电码表</h2>
                <p>一、26个字母的莫尔斯电码加密</p>
                <table class="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                    </tr>
                    <tr>
                        <th>A</th>
                        <td>．━</td>
                        <th>B</th>
                        <td>━ ．．．</td>
                        <th>C</th>
                        <td>━ ．━ ．</td>
                        <th>D</th>
                        <td>━ ．．</td>
                    </tr>
                    <tr>
                        <th>E</th>
                        <td>．</td>
                        <th>F</th>
                        <td>．．━ ．</td>
                        <th>G</th>
                        <td>━ ━ ．</td>
                        <th>H</th>
                        <td>．．．．</td>
                    </tr>
                    <tr>
                        <th>I</th>
                        <td>．．</td>
                        <th>J</th>
                        <td>．━ ━ ━</td>
                        <th>K</th>
                        <td>━ ．━</td>
                        <th>L</th>
                        <td>．━ ．．</td>
                    </tr>
                    <tr>
                        <th>M</th>
                        <td>━ ━</td>
                        <th>N</th>
                        <td>━ ．</td>
                        <th>O</th>
                        <td>━ ━ ━</td>
                        <th>P</th>
                        <td>．━ ━ ．</td>
                    </tr>
                    <tr>
                        <th>Q</th>
                        <td>━ ━ ．━</td>
                        <th>R</th>
                        <td>．━ ．</td>
                        <th>S</th>
                        <td>．．．</td>
                        <th>T</th>
                        <td>━</td>
                    </tr>
                    <tr>
                        <th>U</th>
                        <td>．．━</td>
                        <th>V</th>
                        <td>．．．━</td>
                        <th>W</th>
                        <td>．━ ━</td>
                        <th>X</th>
                        <td>━ ．．━</td>
                    </tr>
                    <tr>
                        <th>Y</th>
                        <td>━ ．━ ━</td>
                        <th>Z</th>
                        <td>━ ━ ．．</td>
                        <th>　</th>
                        <td>　</td>
                        <th>　</th>
                        <td>　</td>
                    </tr>
                    </tbody>
                </table>

                <p>二、数字的莫尔斯电码加密</p>

                <table class="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                    </tr>
                    <tr>
                        <th>0</th>
                        <td>━ ━ ━ ━ ━</td>
                        <th>1</th>
                        <td>．━ ━ ━ ━</td>
                        <th>2</th>
                        <td>．．━ ━ ━</td>
                        <th>3</th>
                        <td>．．．━ ━</td></tr>
                    <tr>
                        <th>4</th>
                        <td>．．．．━</td>
                        <th>5</th>
                        <td>．．．．．</td>
                        <th>6</th>
                        <td>━ ．．．．</td>
                        <th>7</th>
                        <td>━ ━ ．．．</td></tr>
                    <tr>
                        <th>8</th>
                        <td>━ ━ ━ ．．</td>
                        <th>9</th>
                        <td>━ ━ ━ ━ ．</td>
                        <th>　</th>
                        <td>　</td>
                        <th>　</th>
                        <td>　</td>
                    </tr>
                    </tbody>
                </table>

                <p>三、标点符号的莫尔斯电码加密</p>

                <table class="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td>
                        <th width="8%"><strong>字符</strong></th>
                        <td width="17%"><strong>电码符号</strong></td></tr>
                    <tr>
                        <th title="句号">.</th>
                        <td title="句号">．━ ．━ ．━</td>
                        <th title="冒号">:</th>
                        <td title="冒号">━ ━ ━ ．．．</td>
                        <th title="逗号">,</th>
                        <td title="逗号">━ ━ ．．━ ━</td>
                        <th title="分号">;</th>
                        <td title="分号">━ ．━ ．━ ．</td></tr>
                    <tr>
                        <th title="问号">?</th>
                        <td title="问号">．．━ ━ ．．</td>
                        <th title="等号">=</th>
                        <td title="等号">━ ．．．━</td>
                        <th title="省略符">'</th>
                        <td title="省略符">．━ ━ ━ ━ ．</td>
                        <th title="斜线">/</th>
                        <td title="斜线">━ ．．━ ．</td></tr>
                    <tr>
                        <th title="叹号">!</th>
                        <td title="叹号">━ ．━ ．━ ━</td>
                        <th title="连字号">━ </th>
                        <td title="连字号">━ ．．．．━</td>
                        <th title="下划线">_</th>
                        <td title="下划线">．．━ ━ ．━</td>
                        <th title="双引号">"</th>
                        <td title="双引号">．━ ．．━ ．</td></tr>
                    <tr>
                        <th title="前括号">(</th>
                        <td title="前括号">━ ．━ ━ ．</td>
                        <th title="后括号">)</th>
                        <td title="后括号">━ ．━ ━ ．━</td>
                        <th title="美元">$</th>
                        <td title="美元">．．．━ ．．━</td>
                        <th title="">&amp;</th>
                        <td title="">． ．．．</td></tr>
                    <tr>
                        <th title="">@</th>
                        <td title="">．━ ━ ．━ ．</td>
                        <th>　</th>
                        <td>　</td>
                        <th>　</th>
                        <td>　</td>
                        <th>　</th>
                        <td>　</td>
                    </tr>
                    </tbody>
                </table>

                <h3>摩斯密码灯光求救</h3>
                <ol>
                    <li>摩斯密码编码简单清晰，二义性小，编码主要是由两个字符表示："."、"-"，一长一短，这在很多情况下应用很多，比如发送求救信号。电影《风声》中就是采用在衣服上缝出摩尔密码，将消息传播出去。</li>
                    <li>在利用摩尔密码灯光求救的时候，定义：灯光长亮为"-"，灯光短量为"."，那么就可以通过手电筒的开关来发送各种信息，例如求救信息。</li>
                    <li>如果灯光是按照“短亮 暗 短亮 暗 短亮 暗 长亮 暗 长亮 暗 长亮 暗 短亮 暗 短亮 暗 短亮”这个规律来显示的话那么它就意味是求救信号SOS。</li>
                    <li>因为SOS的摩尔编码为：··· －－－ ··· ，按照上面的规定即可进行灯光编码。这个编码其实非常简单，三短、三长、三短。</li>
                    <li>除了灯光之外，利用声音（两种区别的声音）也可以发出求救信号。这种求救方式是我们都应该进行了解的，也许在必要的时候就可以派上用场。
                    </li>
                </ol>
            </ui-article>
        </div>
    </my-page>
</template>
