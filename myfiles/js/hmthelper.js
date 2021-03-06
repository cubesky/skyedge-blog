function HMTHelper() {

    this.addQueue = addQueue;
    this.isIndex = isIndex;
    this.isArchieve = isArchieve;
    this.isCategories = isCategories;
    this.isTags = isTags;
    this.isPageOrPost = isPageOrPost;
    this.is = is;
    this.loadjs = loadjs;
    this.visiorFrom = visiorFrom;
    this.isFromThisSite = isFromThisSite;
    this.isDirectToThisSite = isDirectToThisSite;

    function addQueue(element) {
        queue.offer(element);
    }

    function isIndex() {
        var baseurl=window.location.href.split(':')[0]+'://'+window.location.host+'/';
        var nowurl=window.location.href.split('index.html')[0];
        if(baseurl == nowurl) return true;
        return false;
    }

    function isArchieve() {
        return is('archives');
    }

    function isCategories() {
        return is('categories');
    }

    function isTags() {
        return is('tags');
    }

    function isPageOrPost() {
        return !(isTags() || isCategories() || isArchieve() || isIndex());
    }

    function is(which) {
        return window.location.href.split('index.html')[0].includes(which);
    }

    function loadjs(mainjs,dependency) {
        addQueue(function(){
            for (css in dependency.css) {
                var fileref=document.createElement('link');
                fileref.setAttribute('rel', 'stylesheet');
                fileref.setAttribute('type', 'text/css');
                fileref.setAttribute('href', dependency.css[css]);
                document.getElementsByTagName('head')[0].appendChild(fileref);
            }
            for (js in dependency.js) {
                var fileref=document.createElement('script');
                fileref.setAttribute('type','text/javascript');
                fileref.setAttribute('src', dependency.js[js]);
                document.getElementsByTagName('body')[0].appendChild(fileref);
            }
            var mjs=document.createElement('script');
            mjs.setAttribute('type','text/javascript');
            mjs.setAttribute('src', mainjs);
            document.getElementsByTagName('body')[0].appendChild(mjs);
        });
    }
    
    function visiorFrom() {
        return document.referrer;
    }

    function isDirectToThisSite() {
        return visiorFrom() === '';
    }

    function isFromThisSite() {
        return (isDirectToThisSite()?false:(visiorFrom().split('://')[1].split('/')[0] == window.location.href.split('://')[1].split('/')[0]));
    }

    

}