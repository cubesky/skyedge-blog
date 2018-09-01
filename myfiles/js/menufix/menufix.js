void(function(){
   var hmt = new HMTHelper();
   if(hmt.isPageOrPost()) {
      hmt.loadjs('/myfiles/js/menufix/main.js',{js:[],css:[]});
   } 
})();
