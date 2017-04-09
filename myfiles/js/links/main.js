void(function(){
    $('a[title]',$('.md-links-item')).each(function(e){
        var fspan=$('a[title]',$('.md-links-item'))[e];
        if(fspan.href.toLowerCase().indexOf('https://')>=0){
            $($(fspan).children('span')[0]).append("<span>  </span><span class=\"material-icons\" style=\"color: #009900;font-size:14px;\">lock</span>");
        }
    });
})();