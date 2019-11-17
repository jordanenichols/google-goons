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

var xmlCont = chrome.runtime.getURL("/thirdParty/spa-eng.tei"); //this returns the FULL_PATH of the .xml file [NOT THE XML NODES]
            console.log(xmlCont) //You can see it here

                    $.ajax({                    
                          type: "GET" , 
                          url: xmlCont,//Place that FULL_PATH here 
                          dataType: "xml" , //This too is important 

                         success: function(xml) { 

                          console.log(xml)// see the ajax results if your curious

                        //var xmlDoc = $.parseXML( xml );//NOT NEED FOR THIS

                        //console.log(xmlDoc);// if you parseXML it returns null

                        var title = $(xml).find('value').text(); //Show the text between the <title> tags
                        console.log($(xml));
						//var entry = title.getElementsByTagName('entry').text(); //Show the text between the <title> tags
                        console.log(typeof title);
						

                    }    
                        });