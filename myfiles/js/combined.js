 
void(function(){
   var hmt = new HMTHelper();
   if(hmt.is('links')) {
      hmt.loadjs('https://skyedge.b0.upaiyun.com/myfiles/js/linkChecker/main.js',{js:[],css:[]});
   } 
})();


void(function(){
   var hmt = new HMTHelper();
   if(hmt.is('links')) {
      hmt.loadjs('https://skyedge.b0.upaiyun.com/myfiles/js/links/main.js',{js:[],css:[]});
   } 
})();


void(function(){
   var hmt = new HMTHelper();
   if(hmt.isPageOrPost()) {
      hmt.loadjs('https://skyedge.b0.upaiyun.com/myfiles/js/menufix/main.js',{js:[],css:[]});
   } 
})();


void(function(){
   var hmt = new HMTHelper();
   if(hmt.isIndex()) {
      hmt.loadjs('https://skyedge.b0.upaiyun.com/myfiles/js/yiyan/main.js',{js:['https://skyedge.b0.upaiyun.com/myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js'],css:[]});
   } 
})();
