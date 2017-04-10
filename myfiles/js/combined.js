 
void(function(){
   var hmt = new HMTHelper();
   if(hmt.is('links')) {
      hmt.loadjs('/myfiles/js/linkChecker/main.js',{js:[],css:[]});
   } 
})();

void(function(){
   var hmt = new HMTHelper();
   if(hmt.is('links')) {
      hmt.loadjs('/myfiles/js/links/main.js',{js:[],css:[]});
   } 
})();

void(function(){
   var hmt = new HMTHelper();
   if(hmt.isPageOrPost()) {
      hmt.loadjs('/myfiles/js/menufix/main.js',{js:[],css:[]});
   } 
})();

void(function(){
   var hmt = new HMTHelper();
   if(hmt.isIndex()) {
      hmt.loadjs('/myfiles/js/yiyan/main.js',{js:['/myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js'],css:[]});
   } 
})();