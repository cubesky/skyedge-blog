void(function(){
   var hmt = new HMTHelper();
   if(hmt.isIndex()) {
      hmt.loadjs('/myfiles/js/yiyan/main.js',{js:['/myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js'],css:[]});
   } 
})();
