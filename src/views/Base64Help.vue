<template>
    <my-page title="Base64 编码解码 - 帮助" backable>
        <div class="common-container container">
            <ui-article>
                <h2>工具介绍</h2>
                    <p>本工具仅支持文本的 Base64 加密和解密，Base64 图片加密和解密请访问<a href="http://tool.yunser.com/base64/image"> Base64 图片</a> 。</p>

                    <h2>Base64 编码说明</h2>
                    <p>Base64 编码要求把 3 个 8 位字节（3 * 8 = 24）转化为 4 个 6 位的字节（4 * 6 = 24），之后在 6 位的前面补两个 0，
                        形成 8 位一个字节的形式。如果剩下的字符不足 3 个字节，则用0填充，输出字符使用‘=’，因此编码后输出的文本末尾可能会出现 1 或 2 个‘=’。</p>
                    <p>为了保证所输出的编码位可读字符，Base64 制定了一个编码表，以便进行统一转换。编码表的大小为 2^6 = 64，这也是 Base64 名称的由来。</p>

                    <h2>Base64 编码表</h2>
                    <table class="table table-bordered" style="text-align:center">
                        <tbody>
                        <tr>
                            <th scope="col">码值</th>
                            <th scope="col">字符</th>
                            <td rowspan="18">&nbsp;</td>
                            <th scope="col">码值</th>
                            <th scope="col">字符</th>
                            <td rowspan="18">&nbsp;</td>
                            <th scope="col">码值</th>
                            <th scope="col">字符</th>
                            <td rowspan="18">&nbsp;</td>
                            <th scope="col">码值</th>
                            <th scope="col">字符</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>A</td>
                            <td>16</td>
                            <td>Q</td>
                            <td>32</td>
                            <td>g</td>
                            <td>48</td>
                            <td>w</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>B</td>
                            <td>17</td>
                            <td>R</td>
                            <td>33</td>
                            <td>h</td>
                            <td>49</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>C</td>
                            <td>18</td>
                            <td>S</td>
                            <td>34</td>
                            <td>i</td>
                            <td>50</td>
                            <td>y</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>D</td>
                            <td>19</td>
                            <td>T</td>
                            <td>35</td>
                            <td>j</td>
                            <td>51</td>
                            <td>z</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>E</td>
                            <td>20</td>
                            <td>U</td>
                            <td>36</td>
                            <td>k</td>
                            <td>52</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>F</td>
                            <td>21</td>
                            <td>V</td>
                            <td>37</td>
                            <td>l</td>
                            <td>53</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>G</td>
                            <td>22</td>
                            <td>W</td>
                            <td>38</td>
                            <td>m</td>
                            <td>54</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>H</td>
                            <td>23</td>
                            <td>X</td>
                            <td>39</td>
                            <td>n</td>
                            <td>55</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>I</td>
                            <td>24</td>
                            <td>Y</td>
                            <td>40</td>
                            <td>o</td>
                            <td>56</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>J</td>
                            <td>25</td>
                            <td>Z</td>
                            <td>41</td>
                            <td>p</td>
                            <td>57</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>K</td>
                            <td>26</td>
                            <td>a</td>
                            <td>42</td>
                            <td>q</td>
                            <td>58</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>L</td>
                            <td>27</td>
                            <td>b</td>
                            <td>43</td>
                            <td>r</td>
                            <td>59</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>M</td>
                            <td>28</td>
                            <td>c</td>
                            <td>44</td>
                            <td>s</td>
                            <td>60</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>N</td>
                            <td>29</td>
                            <td>d</td>
                            <td>45</td>
                            <td>t</td>
                            <td>61</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>O</td>
                            <td>30</td>
                            <td>e</td>
                            <td>46</td>
                            <td>u</td>
                            <td>62</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>P</td>
                            <td>31</td>
                            <td>f</td>
                            <td>47</td>
                            <td>v</td>
                            <td>63</td>
                            <td>/</td>
                        </tr>
                        </tbody></table>
            </ui-article>
        </div>
    </my-page>
</template>
