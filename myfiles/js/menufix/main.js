void(function(){
  var btns=$("ul[for^='article-']");
  var topestheight=0;
  btns.each(function(index){
    var thisheight=$(btns[index]).height();
    topestheight=thisheight>topestheight?thisheight:topestheight;
  });
  if($('#post-content').height()<topestheight) {
     $('#post-content').height(topestheight);
  }
})();