function state(data){
    var items=$('li.md-links-item');
    items.each(function(sitem){
        tlink=$($('a',items[sitem])[0]).attr('href');
        if(tlink in data){
            if(data[tlink]!='200'){
                $(items[sitem]).animate({opacity:'0.4'},500);
            }
        }
    });
}
void(function(){
    $.ajax({
        url:'https://0w0.bid/linkChecker/data.jsonp?callback=state',
        dataType:'jsonp',
        cache: false,
        state: function(data){
            console.log(data)
        } 
    });
})();