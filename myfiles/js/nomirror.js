var allowedHost = ['bGl5aW4uZGF0ZQ==','YXJjaGl2ZS5vcmc=','bG9jYWxob3N0OjQwMDA=','MTI3LjAuMC4xOjQwMDA=', 'bGl5aW4ucmJxLmRlc2k='];
function loadSwal() {
    var loaddyncss = document.createElement('link');
    loaddyncss.setAttribute('rel','stylesheet');
    loaddyncss.setAttribute('type','text/css');
    loaddyncss.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.7.0/sweetalert2.min.css');
    var loaddynjs = document.createElement('script');
    loaddynjs.setAttribute('type','text/javascript');
    loaddynjs.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.7.0/sweetalert2.min.js');
    if (loaddynjs.readyState){  //IE
        loaddynjs.onreadystatechange = function(){
            if (loaddynjs.readyState == "loaded" ||
                    loaddynjs.readyState == "complete"){
                loaddynjs.onreadystatechange = null;
                showSwal();
            }
        };
    } else {  //Others
        loaddynjs.onload = function(){
            showSwal();
        };
    }
    document.getElementsByTagName("head")[0].appendChild(loaddyncss);
    document.getElementsByTagName("head")[0].appendChild(loaddynjs);
}
function showSwal() {
    swal({
        title: '注意',
        html: '我发现您似乎从一个非授权的镜像站点(' + window.location.search.replace('?','') + ')访问本博客<br>我现在已经将您带向原站点~',
        type:'warning',
        timer: 5000,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        allowOutsideClick: false
    });
    swal.showLoading();
}
queue.offer(function(){
    if (top.location != location) {
        top.location.href = document.location.href ;
    }
    if (!allowedHost.includes(window.btoa(window.location.host))) {
        if (window.location.pathname === '/' && window.location.search === '') {
            window.location.href = window.atob('aHR0cHM6Ly9saXlpbi5kYXRl') + '/?' + window.location.host;
        }
        if (window.location.pathname === '/' && window.location.search.startsWith('?')) {
            window.location.href = window.atob('aHR0cHM6Ly9saXlpbi5kYXRl') + '/' + window.location.search.replace('?','') + '?' + window.location.host;
        }
        if (window.location.pathname != '/') {
            window.location.href = window.atob('aHR0cHM6Ly9saXlpbi5kYXRl') + window.location.pathname + '?' + window.location.host;
        }
    }
    if(window.location.host === window.atob('bGl5aW4uZGF0ZQ==') && window.location.search !== '') {
        loadSwal();
    }
});