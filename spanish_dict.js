function evaluateXPath(aNode, aExpr) {
  var xpe = new XPathEvaluator();
  var nsResolver = xpe.createNSResolver(aNode.ownerDocument == null ?
    aNode.documentElement : aNode.ownerDocument.documentElement);
  var result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  var found = [];
  var res;
  while (res = result.iterateNext())
    found.push(res);
  return found;
}
     
var input = "INPUT YOUR SHIT HERE YOU APES";

var xmlCont = chrome.runtime.getURL("/thirdParty/spa-eng.tei"); //this returns the FULL_PATH of the .xml file [NOT THE XML NODES]
// console.log(xmlCont) //You can see it here

function getTranslation(input){

$.ajax({                    
      type: "GET" , 
      url: xmlCont,//Place that FULL_PATH here 
      dataType: "xml" , //This too is important 

     success: function(xml) { 

      console.log(xml)// see the ajax results if your curious

    //var xmlDoc = $.parseXML( xml );//NOT NEED FOR THIS

    //console.log(xmlDoc);// if you parseXML it returns null

    var entries = $(xml).find('body').find('entry'); //Show the text between the <title> tags

    // var regex = new RegExp("^Europa$");
    // speedy
    // $(entries).filter(function () {
    //     return regex.test($(this).text()); 
    // });

    // for (i = 0; i < spanish.length; i++){
    //    console.log(spanish[i].textContent)
    // }
    

     for (i = 0; i < entries.length; i++){
        var entry = entries[i];
        var spanish = entry.getElementsByTagName("form")[0].getElementsByTagName("orth")[0].textContent; 
        var englishes = entry.getElementsByTagName("sense"); 
        var english_list = []
         for (j = 0; j < englishes.length; j++) {
             var english = englishes[j].getElementsByTagName("cit")[0].getElementsByTagName("quote")[0].textContent;
             english_list.push(english);
         }

         if (spanish === input){
             console.log(english_list);
			 return console.log(english_list.toString());
         }
     }

    //var entry = title.getElementsByTagName('entry').text(); //Show the text between the <title> tags

}    
    });
}

