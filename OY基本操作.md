## 一、Git 使用

### 1、配置SSH-Key

~~~bash
$ git config user.name
$ git config user.email
git config --global user.name "example"
git config --global user.email example@example.com
ssh-keygen -t rsa -C "example@example.com"
~~~

然后找到生成的秘钥：位置在 `C:/Users/你电脑的用户名/.ssh`
用记事本打开 `id_rsa.pub` 复制里面的内容

进入 https://github.com/settings/keys 点击 `New SSH Key` 把之前复制的内容粘贴到这里就可以了。

## 二、头像地址

~~~~yam
加速地址参考： https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
头像地址：https://cdn.jsdelivr.net/gh/OYCodeSite/CDN@0.2/oy_img/avatar.jpg
logo地址：https://cdn.jsdelivr.net/gh/OYCodeSite/CDN@0.2/oy_img/logo.png
https://gitee.com/oy_chart_bed/no1_drawing_bed/raw/master/20200709165556.jpg
# 网站截图
https://cdn.jsdelivr.net/gh/OY6090/pic@main/oy_img/20210122112445.png

avatar
~~~~

~~~~yaml
<!-- raw的外挂标签是告诉渲染引擎这段代码不用渲染。 -->
{% raw %}
<div class="example wow animate__bounceInUp">
Content to Reveal Here
</div>
{% endraw %}
~~~~



