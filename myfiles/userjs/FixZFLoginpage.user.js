// ==UserScript==
// @name         修复正方页面问题
// @namespace    cubesky.zf.login
// @version      0.2
// @description  正方垃圾
// @author       CubeSky
// @match        https://jwxt.webvpn.buu.edu.cn/*
// @include      http://jwxt.buu.edu.cn/*
// @require      http://code.jquery.com/jquery-2.1.1.min.js
// @require      https://raw.githubusercontent.com/antimatter15/ocrad.js/master/ocrad.js
// @require      https://raw.githubusercontent.com/davidsonfellipe/lena.js/master/dist/lena.min.js
// @grant        none
// ==/UserScript==

(function() {
    // 修复密码输入框自动填充问题
    $('dd')[1].removeChild($('#Textbox1')[0]);
    $('#TextBox2').css('display','');
    update=function(){return;};
    // 修复验证码位置错误的问题
    $('#TextBox2').css('width','');
    $($('dl')[2]).prop('style','');
    $('dd')[2].removeChild($('#icodems')[0]);
    $('#txtSecretCode').prop('style','font-size: 14px;width:85px;vertical-align: middle;line-height:18px;');
    $('#icode').prop('style','vertical-align: middle;');
    // 修复输入框问题
    yzblur=function(){};
    keydown=function(){};
    show=function(){};
    // 向网页添加信息
    var skynode=document.createElement('div');
    skynode.className='login_copyright';
    skynode.innerHTML='<div>-----------------------------------------</div><div>正方教务系统登陆页已由『正方页面修复脚本』修复</div><div>该修复脚本由 <a href=\"https://liyin.date\" style=\"background:none;padding-left:0px\" title=\"用心感受天空的边界\">Liyin - 天空之边</a> 强力驱动</div>';
    $('.login_main')[0].appendChild(skynode);
    var skyfix=document.createElement('div');
    skyfix.className='login_copyright';
    skyfix.innerHTML='<div>-----------------------------------------</div><div>本次修复的内容如下：</div><div>0/ 密码输入框自动填充不正常的问题</div><div>1/ 验证码位置错误的问题</div><div>2/ 输入框不一样长的问题</div><div>3/ 需要输入验证码的问题（笑</div>';
    $('.login_main')[0].appendChild(skyfix);
    var skyyzm=document.createElement('div');
    skyyzm.className='login_copyright';
    skyyzm.id='guessyzm';
    skyyzm.innerHTML='';
    $('.login_main')[0].appendChild(skyyzm);
    // 验证码补丁 (WIP)
    var image = new Image();
    var canvas = document.createElement('canvas'),
    canvasContext = canvas.getContext('2d');
    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        canvasContext.drawImage(image, 0, 0, image.width, image.height);
        var dataURL = canvas.toDataURL();
        $('#icode').prop('src',dataURL);
        LenaJS.filterImage(canvas,LenaJS.saturation ,canvas);
        LenaJS.filterImage(canvas,LenaJS.sepia,canvas);
        LenaJS.filterImage(canvas,LenaJS.thresholding,canvas);
        var string = OCRAD(canvas);
        console.log('OCRAD think image should be '+string);
        var skyyzm=document.getElementById('guessyzm');
        skyyzm.innerHTML='<a href=\'#\' id=\'guessyzm\'>我猜测这次的验证码是 '+string+'</a>';
        $('#guessyzm').unbind('click');
        $('#guessyzm').click(function(){ $('#txtSecretCode').val(string); });
    };
    reloadcode=function(){
        image.src='CheckCode.aspx?'+Math.random();
        console.log('Check Code Reload By Script');
    };
    reloadcode();
})();