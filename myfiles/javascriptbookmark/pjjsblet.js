var ourtxt=document.evaluate("//select[contains(@name,'DataGrid')]",document.getElementById('iframeautoheight').contentDocument,null,XPathResult.ANY_TYPE,null);
var pjcount=0;
while((thistxt=ourtxt.iterateNext())!==null){
	thistxt.selectedIndex=1;
	pjcount++;
	if(pjcount==9){
		thistxt.selectedIndex=2;
		pjcount=0;
	}
}
document.evaluate("//input[contains(@id,'Button1')]",document.getElementById('iframeautoheight').contentDocument,null,XPathResult.ANY_TYPE,null).iterateNext().click();