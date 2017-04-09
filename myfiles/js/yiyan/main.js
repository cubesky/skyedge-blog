function echokoto(result) {
    var famousperson=['爱因斯坦','牛顿','爱迪生','孔子','伽利略','法拉第','贝多芬'];
    noty({
        text: result.hitokoto + ' ———— ' + famousperson[Math.floor(Math.random()*famousperson.length)] + '没说过这句话',
        animation: {
            open: {height: 'toggle'},
            close: {height: 'toggle'},
            easing: 'swing',
            speed: 500
        },
        type: 'information',
        layout: 'top',
        timeout: 3000
    });
}
void(function(){
        $.ajax({
            url: 'https://api.lwl12.com/hitokoto/main/get?encode=json',
            dataType: 'jsonp'
        });
})();